import { User } from "lucide-react";

import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <>
      <div className="p-5 h-15  flex justify-between bg-[#FEC107] items-center">
        <img src={logo} className="w-[25em]" alt="logo" />

        <form>
        <input type="search" className="rounded border-[#033246] px-2 py-1" name="" id="" />
        <button type="button" className="border border-[#033246] rounded p-1 ml-3">Pesquisar</button>
        </form>

        <User />
      </div>
    </>
  );
}

export { Navbar };