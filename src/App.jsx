
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductDetails from './Pages/ProductDetails'
import { CartWishlistProvider } from './Utils/CartWishlistContext'
export const CountContext = createContext(0)
function App() {
  const [cart, setCart] = useState(0)

  return (
    <>
      
      <CountContext.Provider value={[cart, setCart]}>
        <Navbar/>
        <ProductDetails/>
      </CountContext.Provider>
      
    </>
  )
}

export default App
