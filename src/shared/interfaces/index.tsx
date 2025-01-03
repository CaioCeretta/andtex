export interface Category {
	id: number
	name: string
}

export interface Specification {
	Espessura: string
	Gramatura: string
	'Resistência à ruptura': string
	Largura: string
	Construção: string
}

export interface Product {
	id: number
	name: string
	slug: string
	description: {
		applications: string[]
		characteristics: string[]
		specifications: Specification[]
	}
	categoryId: number
	images: string[]
}

export interface ProductWithSimpleDescription {
	id: number
	name: string
	slug: string
	description: string
	categoryId: number
	images: string[]
}
export interface CategoriesContextProps {
	categories: Category[]
	selectedCategory: number | null
	selectCategory: (id: number) => void
}

export interface ProductsContextProps {
	products: Product[]
}
