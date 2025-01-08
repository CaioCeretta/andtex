import React from 'react'
import { Product } from '@/shared/interfaces'

export interface ProductProps {
	product: Product
}

export default function ProductTable(props: ProductProps) {
	const { product } = props

	return (
		<table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
			<thead>
				<tr className="bg-gray-50">
					{product.categoryId === 1 ? (
						<>
							<th className="border border-gray-300 px-6 py-4 rounded-tl-lg">
								Tex
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Resistência à Ruptura
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Alongamento
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Resistência à Temperatura
							</th>
							<th className="border border-gray-300 px-6 py-4 rounded-tr-lg">
								Metros/Quilo
							</th>
						</>
					) : product.categoryId === 2 ? (
						<>
							<th className="border border-gray-300 px-6 py-4 rounded-tl-lg">
								Espessura
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Gramatura
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Resistência à ruptura
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Largura
							</th>
							<th className="border border-gray-300 px-6 py-4 rounded-tr-lg">
								Construção
							</th>
						</>
					) : product.categoryId === 3 ? (
						<>
							<th className="border border-gray-300 px-6 py-4 rounded-tl-lg">
								Espessura
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Largura
							</th>
							<th className="border border-gray-300 px-6 py-4">
								Ruptura
							</th>
							<th className="border border-gray-300 px-6 py-4 rounded-tr-lg">
								Temperatura de Trabalho
							</th>
						</>
					) : null}
				</tr>
			</thead>
			<tbody>
				{product.description.specifications.map(
					(spec, index) => (
						<tr
							key={index}
							className={
								index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
							}
						>
							{product.categoryId === 1 ? (
								<>
									<td className="border border-gray-300 px-6 py-4">
										{spec.tex}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.resistenciaRuptura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.alongamento}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.resistenciaTemperatura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.metrosQuilo}
									</td>
								</>
							) : product.categoryId === 2 ? (
								<>
									<td className="border border-gray-300 px-6 py-4">
										{spec.espessura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.gramatura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.resistenciaRuptura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.largura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.construcao}
									</td>
								</>
							) : product.categoryId === 3 ? (
								<>
									<td className="border border-gray-300 px-6 py-4">
										{spec.espessura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.largura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.ruptura}
									</td>
									<td className="border border-gray-300 px-6 py-4">
										{spec.temperaturaTrabalho}
									</td>
								</>
							) : null}
						</tr>
					)
				)}
			</tbody>
		</table>
	)
}
