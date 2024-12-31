export interface Category {
	id: number
	name: string
}

export interface Product {
	id: number
	name: string
	description: string
	categoryId: number
	images: string[]
}

export interface CategoriesContextProps {
	categories: Category[]
	selectedCategory: number | null
	setSelectedCategory: React.Dispatch<
		React.SetStateAction<number | null>
	>
}

export interface ProductsContextProps {
	products: Product[]
}
