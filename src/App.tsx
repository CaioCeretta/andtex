
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Navbar } from './components/nav/Navbar'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className="flex-grow bg-blue">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>

  )
}

export default App
  