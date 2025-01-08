import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { FaBuilding, FaWhatsapp } from 'react-icons/fa'
import ProductsNavDropdown from './DropdownProducts/ProductsNavDropdown'

const Navbar = () => {
	return (
		<div className="mb-10">
			<nav
				className="transition-all inset-x-0 top-0 md:h-[80px] lg:h-[125px] 
				h-[75px] w-full border-b border-secondary-yellow bg-yellow-nav
				px-2 md:px-5 lg:px-10"
			>
				<MaxWidthWrapper className="max-w-10xl">
					<div className="flex h-[60px] md:h-[80px] lg:h-[125px] items-center justify-between px-3">
						<div className="relative w-36 h-[8rem] sm:h-[12rem] flex items-center border-0 outline-none">
							<a href="/">
								<img
									src="/andtex-logo.png"
									className="h-20 lg:h-full w-full"
									alt="logo"
								/>
							</a>
						</div>

						{/* <div>
							<form
								className="relative w-full z-20 ml-auto xl:w-[460px] md:w-[360px] mr-[40px] mt-0 mb-0
          "
							>
								<div className="flex relative justify-center items-center">
									<Input
										type="search"
										className="bg-white w-full relative h-[56px] pt-0 pr-2 pb-0 pl-2 font-medium
              text-medium text-gray-800 border-b border-gray-300"
										placeholder="O que deseja?"
									/>
									<MagnifyingGlassIcon className="w-8 h-8 absolute right-2" />
								</div>
							</form>
						</div> */}

						<div className="flex h-full items-center space-x-5 lg:space-x-20 text-blue-text font-medium text-lg">
							<ProductsNavDropdown />
							<div className="text-sm lg:text-lg flex justify-center items-center gap-x-2">
								<Link to="/contato">Contato</Link>
								<FaWhatsapp className="lg:w-8 lg:h-8 w-3 h-3" />
							</div>
							<div className="text-sm lg:text-lg  flex justify-center items-center gap-x-2">
								<Link to="/quem-somos">Quem Somos</Link>
								<FaBuilding className="lg:w-8 lg:h-8 h-4 w-4" />
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</nav>
		</div>
	)
}

export default Navbar
