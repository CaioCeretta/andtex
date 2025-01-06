'use client'

import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { capitalizeString } from '@/lib/utils'
import useProducts from '@/data/hooks/useProducts'

// type ProductsByCategoryProps = {
// 	products: {
// 		id: number
// 		name: string
// 		description: string
// 		categoryId: number
// 		images: string[]
// 	}[]
// }

const ProductsByCategory = () => {
	const navigate = useNavigate()

	const { products } = useProducts()

	console.log(products)

	return (
		<>
			{products.map((product) => {
				const productImage = product.images[0] || ''

				return (
					<div key={product.id}>
						<div className="flex justify-center items-center flex-row">
							<Card className="w-full max-w-xs rounded-xl border">
								<div className="flex flex-col gap-4 p-4">
									<div className="aspect-square w-full overflow-hidden rounded-xl">
										<img
											src={product.images[0]}
											alt={product.name || 'Product image'}
											className="aspect-2/5 object-cover border"
										/>
									</div>
									<div className="grid gap-1.5">
										<h3 className="font-semibold text-sm md:text-base text-blue-text">
											{capitalizeString(product.name)}
										</h3>
									</div>
									<Button
										onClick={() =>
											navigate(`/produtos/${product.slug}`)
										}
										size="sm"
										variant="default"
										className="bg-main-yellow hover:bg-yellow-500 cursor-pointer text-blue-text"
									>
										Ver mais
									</Button>
								</div>
							</Card>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default ProductsByCategory
