import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import NavbarToggler from './NavbarToggler'
import NavItem from './NavbarItem'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-wrap shadow-sm z-30 top-0 sticky justify-between bg-[#FEC107] items-center">
        <div>
          <img
            src={logo}
            className="w-[8rem] px-3 md:w-[8rem] lg:w-[10em] xl:w-[12rem] cursor-pointer"
            alt="logo"
            onClick={() => navigate('/')}
          />
        </div>
        <nav className="hidden w-[5rem] md:w-[50vw] text-md md:flex justify-between px-10">
          <NavItem title="Produtos" path="/produtos" />
          <NavItem title="Quem somos" path="/sobre" />
          <NavItem title="Qualidade" path="/qualidade" />
        </nav>
        <NavbarToggler />
      </div>

      {/* <div className="bg-[#a28428] py-2 px-5">
        <form className="px-10" style={{ flex: '0 0 auto' }}>
          <input
            type="search"
            className="rounded placeholder-transparent md:placeholder-current text-xs md:text-lg border-[#033246] border-2 px-2 max-w-[10rem] md:max-w-[15rem] lg:max-w-[30rem] md:flex-row flex-col"
            name=""
            id=""
            placeholder="Ex: AND 601"
          />
          <button
            type="button"
            className="border text-sm md:text-md border-[#033246] rounded p-1.5 ml-3"
          >
            Pesquisar
          </button>
        </form>
      </div> */}
    </>
  )
}

export { Navbar }
