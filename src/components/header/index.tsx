
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";


const Header = () => {


  const [menu, setMenu] = useState<boolean>(false);


  const handleMenu = () => {
    console.log('menu')
    setMenu(!menu)
    console.log(menu)
  }


  return (
  
    <header className="bg-black text-white p-4 flex items-center justify-between">
    <h1 className="font-bold text-2xl">Logo</h1>

    {/* Menu normal (aparece apenas em telas md ou maiores) */}
    <nav className="hidden sm:flex gap-6">
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Services</li>
        <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
    </nav>

    {/* Menu hamburguer (só aparece em telas pequenas) */}
    <nav className="relative sm:hidden">
      <button onClick={handleMenu} className="text-2xl">
        <HiOutlineBars3 className="text-3xl" />
      </button>

      {menu && (
        <div className="absolute top-full right-0 bg-black text-white w-40 mt-2 shadow-lg rounded-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="cursor-pointer hover:text-gray-400">Home</li>
            <li className="cursor-pointer hover:text-gray-400">Services</li>
            <li className="cursor-pointer hover:text-gray-400">About</li>
            <li className="cursor-pointer hover:text-gray-400">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  </header>
    );
}

export default Header