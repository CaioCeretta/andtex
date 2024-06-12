import Button from '../../components/Button'
import ProductImage from '../../components/products/ProductImages'

interface ImageProps {
  image: string
}

interface ProductDetailsProps {
  product: {
    id: string
    name: string
    description: string
    price: string
    category: string
    inStock: boolean
    images: ImageProps[]
  }
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <ProductImage product={product} />
      </div>
      <div className="flex flex-col gap-2 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-[#10393E]">{product.name}</h2>
        <Horizontal />
        <div className="flex items-center gap-2"></div>
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORIA: </span>
          {product.category}
        </div>
        <div className="py-10">
          <Button label="SOLICITAR COTAÇÂO" onClick={() => null} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
