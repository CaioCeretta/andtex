export interface Categoria {
	id: number
	name: string
}

export interface Produto {
	id: number
	name: string
	description: string
	categoryId: number
	images: string[]
}

export interface CategoriasContextProps {
	categorias: Categoria[]
	setCategoriaSelecionada: (
		categoriaId: number | null
	) => void
}

export interface ProdutosContextProps {
	produtos: Produto[]
}
