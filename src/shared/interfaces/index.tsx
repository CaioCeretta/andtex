export interface Category {
	id: number
	name: string
}

export interface SpecificationTecido {
	type: 'tecido'
	espessura: string
	gramatura: string
	resistenciaRuptura: string
	largura: string
	construcao: string
}

export interface SpecificationFita {
	type: 'fita'
	espessura: string
	largura: string
	ruptura: string
	temperaturaTrabalho: string
}

export type Specification =
	| SpecificationFita
	| SpecificationTecido

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

export interface CategoriesContextProps {
	categories: Category[]
	selectedCategory: number | null
	selectCategory: (id: number) => void
}

export interface ProductsContextProps {
	products: Product[]
}
