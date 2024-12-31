import useCategories from '@/data/hooks/useCategories'

export default function Categories() {
	const { categories } = useCategories()

	return (
		<div>
			{categories.map((category) => {
				return <p>{category.name}</p>
			})}
		</div>
	)
}
