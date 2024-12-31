import React, {
	createContext,
	useState,
	useEffect,
	useMemo,
	ReactNode,
} from 'react'

import {
	Categoria,
	Produto,
	CategoriasContextProps,
	ProdutosContextProps,
} from '../../shared/interfaces'

import data from '../db/products.json' // Importando o JSON localmente

interface DataFormat {
	categorias: Categoria[]
	produtos: Produto[]
}

const dataTyped: DataFormat = data as DataFormat

// Criação dos contextos
export const CategoriasContext =
	createContext<CategoriasContextProps>({} as any)
export const ProdutosContext =
	createContext<ProdutosContextProps>({} as any)

export const CategoriasProvider = (props: any) => {
	const [categorias, setCategorias] = useState<Categoria[]>(
		[]
	)
	const [produtos, setProdutos] = useState<Produto[]>([])
	const [categoriaSelecionada, setCategoriaSelecionada] =
		useState<number | null>(null)

	//Busca Inicial das Categorias
	useEffect(() => {
		const fetchProdutosCategorias = async () => {
			setCategorias(data.categorias)
		}
	}, [])

	// Filtrar produtos com base na categoria selecionada
	useEffect(() => {
		if (categoriaSelecionada) {
			const produtosFiltrados = data.produtos.filter(
				(produto) =>
					produto.categoryId === categoriaSelecionada
			)

			setProdutos(produtosFiltrados)
		} else {
			setProdutos([])
		}
	}, [categoriaSelecionada])

	const valoresCategorias = useMemo(
		() => ({ categorias, setCategoriaSelecionada }),
		[categorias]
	)

	const valoresProdutos = useMemo(
		() => ({ produtos }),
		[produtos]
	)

	return (
		<CategoriasContext.Provider value={valoresCategorias}>
			<ProdutosContext.Provider value={valoresProdutos}>
				{props.children}
			</ProdutosContext.Provider>
		</CategoriasContext.Provider>
	)
}
