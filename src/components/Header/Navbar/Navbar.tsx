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
				className="transition-all inset-x-0 top-0  h-[125px] w-full border-b
    border-secondary-yellow bg-yellow-nav px-10"
			>
				<MaxWidthWrapper className="max-w-10xl">
					<div className="flex h-[110px] items-center justify-between px-3">
						<div className="relative w-36 h-[90%] border-0 outline-none">
							<a href="/">
								<img src="/andtex-logo.png" alt="logo" />
							</a>
						</div>

						<div>
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
						</div>

						<div className="flex h-full items-center space-x-20 text-blue-text font-medium text-lg">
							<ProductsNavDropdown />
							<div className="flex justify-center items-center gap-x-2">
								<Link to="/contato">Contato</Link>
								<FaWhatsapp className="w-8 h-8" />
							</div>
							<div className="flex justify-center items-center gap-x-2">
								<Link to="/quem-somos">Quem Somos</Link>
								<FaBuilding className="w-8 h-8" />
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</nav>
		</div>
	)
}

export default Navbar
