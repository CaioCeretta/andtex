import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { capitalizeString } from '@/lib/utils'

export interface Category {
	id: string
	name: string
}

// interface ProductsNavDropdownProps {
//   categories: Category[]
//   className?: string
// }

export default function ProductsNavDropdown() {
	const [categories, setCategories] = useState<Category[]>(
		[]
	)

	useEffect(() => {
		async function getCategoriesProducts() {
			const response = await fetch('/data/products.json')

			const data = await response.json()

			setCategories(data.categories)
		}

		getCategoriesProducts()
	}, [])

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
