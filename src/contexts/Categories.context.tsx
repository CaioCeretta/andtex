import { ReactNode, createContext, useEffect, useState } from 'react'

import SHOP_DATA from '../shop-data'
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase.utils'

type ImageType = {
  image: string
}

type ProductDataType = {
  name: string
  id: string
  description: string
  price: string
  inStock?: boolean
  category: string
  images: ImageType[]
}

type CategoriesMap = {
  [title: string]: ProductDataType[]
}

export const CategoriesContext = createContext<{
  categoriesMap: CategoriesMap | object
}>({
  categoriesMap: {},
})

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap | object>(
    {}, // Changed initial state to an empty object
  )

  useEffect(() => {
    addCollectionAndDocuments('products', SHOP_DATA)

    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()

      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
