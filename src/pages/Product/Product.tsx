import { useParams } from 'react-router-dom'
import { Container } from '../../components/Container'
// import { product } from '../../utils/product'
// import ProductDetails from './ProductDetails'
import { getProductById } from '../../utils/firebase.utils'

// interface IParams {
//   productId?: string
// }

const Product = () => {
  // Fetch product details based on the ID (you can use state, context, or API call here)

  const { id } = useParams()

  console.log(id)

  console.log(getProductById())

  return (
    <div className="p-8">
      <Container>{id}</Container>
    </div>
  )
}

export default Product
