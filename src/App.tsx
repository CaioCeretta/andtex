
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Navbar } from './components/nav/Navbar'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
