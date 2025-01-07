import OrcamentoModal from '@/components/OrcamentoModal'
import { Button } from '@/components/ui/button'
import * as Dialog from '@/components/ui/dialog'
import { formatProductName } from '@/lib/utils'
import type { Product } from '@/shared/interfaces'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import productsJSON from '../../data/db/products.json'

interface Category {
	id: number
	name: string
}

const Produto: React.FC = () => {
	const { productSlug } = useParams<{
		productSlug: string
	}>()
	const [product, setProduct] = useState<Product | null>(
		null
	)
	const [_, setCategoryName] = useState<string>('')

	useEffect(() => {
		const fetchProduct = async () => {
			const products = productsJSON.products
			const categories = productsJSON.categories

			const productData = products.find(
				(prod: Product) => prod.slug === productSlug
			)
			setProduct(productData || null)

			if (productData) {
				const category = categories.find(
					(cat: Category) =>
						cat.id === productData.categoryId
				)
				setCategoryName(
					category ? category.name : 'Unknown Category'
				)
			}
		}

		fetchProduct()
	}, [productSlug])

	if (!product) {
		return <div>Loading...</div>
	}

	const formattedProductName = formatProductName(
		product.name
	)

	return (
		<div className="max-w-full  flex mx-auto pb-5">
			<div className="my-3 mx-3 flex flex-col items-center mt-2 text-[14px] relative">
				<h1 className="text-3xl font-bold text-blue-text mb-5 underline decoration-main-yellow underline-offset-8">
					{formattedProductName}
				</h1>
				<div className="flex-1 w-full max-w-[40rem]">
					<div className="mt-1 px-10 text-md leading-5 mb-10 text-yellow-950">
						{/* Características */}
						<h2 className="font-bold text-xl mb-4">
							Características:
						</h2>
						<ul className="list-disc list-inside space-y-2">
							{product.description.characteristics.map(
								(item, index) => (
									<li key={index}>{item}</li>
								)
							)}
						</ul>

						{/* Aplicações */}
						<h2 className="font-bold text-xl mt-6 mb-4">
							Aplicações:
						</h2>
						<ul className="list-disc list-inside space-y-2">
							{product.description.applications.map(
								(item, index) => (
									<li key={index}>{item}</li>
								)
							)}
						</ul>

						{/* Especificações */}
						<h2 className="font-bold text-xl mt-6 mb-4">
							Especificações:
						</h2>
						<table className="table-auto border-collapse border border-zinc-600 w-full text-left">
							<thead>
								<tr className="bg-zinc-100">
									{product.categoryId === 2 ? (
										<>
											<th className="border border-zinc-600 px-4 py-2">
												Espessura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Gramatura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Resistência à ruptura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Largura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Construção
											</th>
										</>
									) : product.categoryId === 3 ? (
										<>
											<th className="border border-zinc-600 px-4 py-2">
												Espessura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Largura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Ruptura
											</th>
											<th className="border border-zinc-600 px-4 py-2">
												Temperatura de Trabalho
											</th>
										</>
									) : null}
								</tr>
							</thead>
							<tbody>
								{product.description.specifications.map(
									(spec, index) =>
										product.categoryId === 2 ? (
											<tr key={index}>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.espessura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.gramatura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.resistenciaRuptura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.largura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.construcao}
												</td>
											</tr>
										) : product.categoryId === 3 ? (
											<tr key={index}>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.espessura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.largura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.ruptura}
												</td>
												<td className="border border-zinc-600 px-4 py-2">
													{spec.temperaturaTrabalho}
												</td>
											</tr>
										) : null
								)}
							</tbody>
						</table>
					</div>
				</div>
				<Dialog.Dialog>
					<Dialog.DialogTrigger asChild>
						<Button
							size="lg"
							type="button"
							className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium w-[50%] flex mx-auto justify-center"
						>
							Solicitar Orçamento
						</Button>
					</Dialog.DialogTrigger>
					<OrcamentoModal
						product={{
							name: formatProductName(product.name),
						}}
					/>
				</Dialog.Dialog>
			</div>
			<div className="max-w-[35rem] w-full h-[45rem] m-auto relative group">
				<img
					className="object-cover w-full h-full rounded-2xl bg-center bg-cover duration-500"
					src={product.images[0]}
					alt={product.name}
				/>
				{/* <ImageSlider images={product.images} /> */}
			</div>
		</div>
	)
}

export default Produto
