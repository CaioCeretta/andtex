import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

import { capitalizeString } from '@/lib/utils'
import useCategories from '@/data/hooks/useCategories'

// interface ProductsNavDropdownProps {
//   categories: Category[]
//   className?: string
// }

export default function ProductsNavDropdown() {
	const { categories, selectCategory } = useCategories()

	// const navigate = useNavigate()

	// const handleCategoryClick = (category: Category) => {
	// 	selectCategory(category.id)
	// 	navigate(`/categorias/${category.name}`)
	// }

	return (
		<div className="">
			<DropdownMenu>
				<DropdownMenuTrigger>Produtos</DropdownMenuTrigger>
				<DropdownMenuContent className="p-5q">
					<DropdownMenuItem className="text-justify  border-gray-300 w-100">
						<Link
							to={'/categorias'}
							className="text-blue-text font-semibold bg-main-yellow"
						>
							Todos Produtos
						</Link>
					</DropdownMenuItem>
					{categories.map((category) => (
						<DropdownMenuItem
							onClick={() => selectCategory(category.id)}
							className="text-justify text-blue-text font-semibold border-b-1 z-20 bg-main-yellow  w-100 py-4"
							key={category.id}
						>
							<Link to={`/categorias/${category.name}`}>
								{capitalizeString(category.name)}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
