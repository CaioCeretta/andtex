'use client'

import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { capitalizeString } from '@/lib/utils'

type ProductsByCategoryProps = {
  products: {
    id: number
    name: string;
    description: string;
    categoryId: number;
    images: string[];
  }[]
}

const ProductsByCategory = ({ products }: ProductsByCategoryProps) => {

  const navigate = useNavigate();

  return (
    <>
      {products.map((product) => {
        const productImage = product.images[0] || ''

        return (
          <div key={product.id}>
            <div className="flex justify-center items-center flex-row">
              <Card className="w-full max-w-xs rounded-xl border">
                <div className="grid gap-4 p-4">
                  <div className="aspect-square w-full overflow-hidden rounded-xl">
                    <img
                      src={productImage}
                      alt={product.name || 'Product image'}
                      className="aspect-4/5 object-cover border w-[250px]"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <h3 className="font-semibold text-sm md:text-base text-blue-text">
                      {capitalizeString(product.name)}
                    </h3>
                    <p className="text-sm md:text-base text-blue-text">
                      {product.description}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate(`/produtos/${product.name}`)}
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
