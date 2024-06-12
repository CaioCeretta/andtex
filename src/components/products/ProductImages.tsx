import Product from '../../pages/Product/Product'

interface ImageProps {
  image: string
}

type Product = {
  id: string
  name: string
  description: string
  price: string
  category: string
  inStock: boolean
  images: ImageProps[]
}

interface ProductCardProps {
  product: Product
}

const ProductImage = ({ product }: ProductCardProps) => {
  console.log(product)

  return (
    <div className="relative col-span-5 aspect-square">
      <img
        alt={product.name}
        className="
          h-full
          max-h-[500px]
          min-h-[300px]
          w-full
          object-contain
          
          "
        src={product.images[0].image}
      />
    </div>
  )
}

export default ProductImage
