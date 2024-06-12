import { product } from '../../utils/product'
import { truncateText } from '../../utils/truncateText'

interface ImageProps {
  image: string
}

interface ProductCardProps {
  name: string
  images: ImageProps[]
}

const ProductCard = ({ name, images }: ProductCardProps) => {
  return (
    <div
      className="col-span-1
    cursor-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm"
    >
      <div
        className="
      flex
      flex-col
      items-center
      width-4
      gap-1
      "
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <img
            className="w-full h-full object-contain"
            src={images[0].image}
            alt={name}
          />
        </div>
        <div className="mt-1">{truncateText(product.name)}</div>
        <div></div>
      </div>
    </div>
  )
}

export { ProductCard }
