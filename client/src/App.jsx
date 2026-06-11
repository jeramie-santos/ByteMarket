import { Route, Routes } from "react-router-dom"

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductList from "./features/products/ProductList"
import ProductDetail from "./features/products/ProductDetail"
import CartView from "./features/cart/CartView"
import ToastContainer from "./features/toasts/ToastContainer"
import Filter from "./features/filters/Filter"
import { useTheme } from "./features/theme/useTheme"

const App = () => {

  useTheme();

  return (
    <div className="flex flex-col w-full min-h-screen bg-(--color-canvas) transition-colors duration-300 text-(--color-text-main)">
      <Navbar />
      <ToastContainer />
      <main className="flex-1 flex flex-col p-4 gap-4 max-w-7xl self-center">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Filter />
              <ProductList />
            </>
          }/>
          <Route path="/product/:id" element={<ProductDetail />}/>
          <Route path="/cart" element={<CartView />}/>
        </Routes>  
      
      </main>
    </div>
  )
}

export default App
