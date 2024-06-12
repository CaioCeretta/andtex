import { Home } from 'lucide-react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import RequireAuth from '../components/RequireAuth'
import SignUp from '../components/SignUp'
import Missing from './Missing'
import Product from './Product/Product'
import Products from './Product/Products'
import AddProduct from './admin/AddProduct'
import Dashboard from './admin/Dashboard'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produtos/:id" element={<Product />} />
        <Route path="/registrar" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Require Auth */}
        <Route element={<RequireAuth />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/produto-adicionar" element={<AddProduct />} />
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}
