import type {
	Product,
	ProductsContextProps,
} from '@/shared/interfaces'
import { createContext, useMemo } from 'react'
import useCategories from '../hooks/useCategories'
import data from '../db/products.json'

const ProductsContext = createContext<ProductsContextProps>(
	{} as any
)

export const ProductsProvider = (props: any) => {
	const { selectedCategory } = useCategories()

	const filteredProducts = useMemo(
		() =>
			selectedCategory
				? data.products.filter(
						(product: Product) =>
							product.categoryId === selectedCategory
					)
				: [],
		[selectedCategory]
	)

	const value = useMemo(() => {
		return { products: filteredProducts }
	}, [filteredProducts])

	return (
		<ProductsContext.Provider value={value}>
			{props.children}
		</ProductsContext.Provider>
	)
}
