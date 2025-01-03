// src/pages/CategoryPage.tsx
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import useCategories from '@/data/hooks/useCategories'
import { capitalizeString } from '@/lib/utils'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsByCategory from './ProductsByCategory'
import useProducts from '@/data/hooks/useProducts'

interface Product {
	id: number
	name: string
	description: string
	categoryId: number
	images: string[]
}

interface Category {
	id: number
	name: string
}

export default function CategoryPage() {
	const { categoryName } = useParams<{
		categoryName: string
	}>()

	const { products } = useProducts()

	const { categories, selectCategory } = useCategories()

	const currentCategory = categories.find(
		(cat) => cat.name === categoryName
	)

	useEffect(() => {
		if (currentCategory) {
			selectCategory(currentCategory.id)
		}
	}, [categoryName, selectCategory])

	if (!currentCategory) {
		return <div>Categoria não encontrada</div>
	}

	return (
		<MaxWidthWrapper className="mt-10">
			<h1 className="mb-3 font-semibold text-2xl text-blue-text">
				{capitalizeString(categoryName!)}
			</h1>
			<div className="flex gap-5">
				<ProductsByCategory />
			</div>
		</MaxWidthWrapper>
	)
}
