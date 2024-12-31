export interface CategoriesProps {
	products: any[]
}

export default function Categories(props: CategoriesProps) {
	return <div>{props.products}</div>
}
