import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-17'>
      <img src={logo} alt="A canvas" className='object-contain mb-8 w-44 h-44'/>
      <h1 className='text-xl font-semibold tracking-widest text-center uppercase md:text-amber-800 font-title'>To-Do List</h1>
      <p className='text-stone-500'> Prioritize below all of your To-Do</p>
    </header>
  );
}
