import React from 'react'
import { Product } from '@/shared/interfaces'

export interface ProductProps {
	product: Product
}

export default function ProductTable(props: ProductProps) {
	const { product } = props

	return (
		<table
			className="table-auto border-collapse border
						border-zinc-600 md:w-[20rem] w-full text-left"
		>
			<thead>
				<tr className="bg-zinc-100">
					{product.categoryId === 1 ? (
						<>
							<th className="border border-zinc-600 px-4 py-2">
								Tex
							</th>
							<th className="border border-zinc-600 px-4 py-2">
								Resistência à Ruptura
							</th>
							<th className="border border-zinc-600 px-4 py-2">
								Alongamento
							</th>
							<th className="border border-zinc-600 px-4 py-2">
								Resistência à Temperatura
							</th>
							<th className="border border-zinc-600 px-4 py-2">
								Metros/Quilo
							</th>
						</>
					) : product.categoryId === 2 ? (
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
						product.categoryId === 1 ? (
							<tr key={index}>
								<td className="border border-zinc-600 px-4 py-2">
									{spec.tex}
								</td>
								<td className="border border-zinc-600 px-4 py-2">
									{spec.resistenciaRuptura}
								</td>
								<td className="border border-zinc-600 px-4 py-2">
									{spec.alongamento}
								</td>
								<td className="border border-zinc-600 px-4 py-2">
									{spec.resistenciaTemperatura}
								</td>
								<td className="border border-zinc-600 px-4 py-2">
									{spec.metrosQuilo}
								</td>
							</tr>
						) : product.categoryId === 2 ? (
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
	)
}
