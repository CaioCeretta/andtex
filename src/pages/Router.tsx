import { Home } from 'lucide-react'
import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import Categories from './Categorias/Categories'
import CategoryPage from './Categorias/CategoryPage'
import Product from './Product/Product'
import Obrigado from './Obrigado'
import Empresa from './(Principal)/Empresa'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />

				<Route path="/quem-somos" element={<Empresa />} />

				<Route path="categorias" element={<Categories />} />
				<Route
					path="categorias/:categoryName"
					element={<CategoryPage />}
				/>

				<Route
					path="produtos/:productSlug"
					element={<Product />}
				/>

				<Route path="/obrigado" element={<Obrigado />} />
			</Route>
		</Routes>
	)
}
