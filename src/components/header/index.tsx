
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import MenuList from "../menu_list";


const Header = () => {


  const [menu, setMenu] = useState<boolean>(false);


  const handleMenu = () => {
    setMenu(!menu)
  }


  return (
  
    <header className="bg-black text-white p-4 flex items-center justify-between">
    <h1 className="font-bold text-2xl">Logo</h1>

    {/* Menu normal (aparece apenas em telas md ou maiores) */}
    <nav className="hidden sm:flex gap-6">
    <MenuList />
    </nav>

    {/* Menu hamburguer (só aparece em telas pequenas) */}
    <nav className="relative sm:hidden">
      <button onClick={handleMenu} className="text-2xl">
        <HiOutlineBars3 className="text-3xl" />
      </button>

      {menu && (
        <div className="absolute top-full right-0 bg-black text-white w-40 mt-2 shadow-lg rounded-md">
         <MenuList />
        </div>
      )}
    </nav>
  </header>
    );
}

export default Header