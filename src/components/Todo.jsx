
import { useState } from 'react';
import './todo.css';

export default function Lists() {
  //array list
  const [todo, setTodo] = useState([]);
  //new list
  const [newTodo, setNewTodo] = useState('');

  //getting input value
  function inputValue(e) {
    setNewTodo(e.target.value);
  }

  // to add items 
  function adding() {
    if(newTodo.trim() !== '') {
     setTodo((prevList) => [...prevList, newTodo]);
     setNewTodo('')
    }
  }

  // remove item by index
  function removing(index) {
    setTodo(todo.filter((elem, idx) => idx !== index))
  }

  // to move list item up
  function moveUp(idx) {
    if(idx > 0) {

     let up = [...todo];
     [up[idx], up[idx - 1]] = 
     [up[idx - 1], up[idx]]

     setTodo(up)
    }
  }

  // to move list item down
  function moveDown(idx) {
    if(idx <  todo.length - 1) {

     let down = [...todo];

     [down[idx], down[idx + 1]] = 
     [down[idx + 1], down[idx]]
     setTodo(down)
    }
  }

  return (
    <div className='lists'>
      <div id="addProd">
        <input type="text" onChange={inputValue} className="inpt" placeholder='Type your lists...' value={newTodo}/>
        <button className='btn-add' onClick={adding}>Add</button>
      </div>
        <ul>
            {todo.map((element, index) => (
            <li key={index}> 
                <button className='manage' onClick={() => moveUp(index)}> 🔼 </button>
                <button className='manage' onClick={() => moveDown(index)}> 🔽 </button>
                <span className='text'>{element}</span> 
                <button className='delete' onClick={() => removing(index)}> 🗑 </button>
            </li>
            ))}
        </ul>
    </div>
  );
}
