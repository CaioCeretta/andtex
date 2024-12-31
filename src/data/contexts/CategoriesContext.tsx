import {
	createContext,
	useState,
	useEffect,
	useMemo,
} from 'react'

import {
	Category,
	Product,
	CategoriesContextProps,
	ProductsContextProps,
} from '../../shared/interfaces'

import data from '../db/products.json' // Importando o JSON localmente

interface DataFormat {
	categories: Category[]
	products: Product[]
}

const dataTyped: DataFormat = data as DataFormat

// Criação dos contextos
export const CategoriesContext =
	createContext<CategoriesContextProps>({} as any)
export const ProductsContext =
	createContext<ProductsContextProps>({} as any)

export const CategoriesProvider = (props: any) => {
	const [categories, setCategories] = useState<Category[]>(
		[]
	)
	const [selectedCategory, setSelectedCategory] = useState<
		number | null
	>(null)

	//Busca Inicial das Categorys
	useEffect(() => {
		setCategories(data.categories)
	}, [])

	const value = useMemo(
		() => ({
			categories,
			selectedCategory,
			setSelectedCategory,
		}),
		[categories, selectedCategory]
	)

	return (
		<CategoriesContext.Provider value={value}>
			{props.children}
		</CategoriesContext.Provider>
	)
}
