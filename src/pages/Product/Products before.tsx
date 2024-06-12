// import { useContext } from 'react'

// import { Link } from 'react-router-dom'
// import { ProductCard } from '../../components/products/ProductCard'
// import { CategoriesContext } from '../../contexts/Categories.context'

// type ImageType = {
//   image: string
// }

// type ProductDataType = {
//   name: string
//   id: string
//   description: string
//   price: string
//   inStock: boolean
//   category: string
//   images: ImageType[]
// }

// const Products = () => {
//   const { categoriesMap } = useContext(CategoriesContext)

//   return (
//     <>
//       {Object.keys(categoriesMap).map((title) => (
//         <div key={title}>
//           <h1 className="text-2xl bold">{title.toUpperCase()}</h1>
//           <div className="grid grid-cols-4 gap-x-3 gap-y-10 my-5" key="title">
//             {categoriesMap[title].map((product: ProductDataType) => (
//               <Link to={`/product/${product.id}`} key={product.id}>
//                 <ProductCard
//                   key={product.id}
//                   name={product.name}
//                   images={product.images}
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

// export default Products
