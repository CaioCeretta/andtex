
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
