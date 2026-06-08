import { Route, Routes } from "react-router-dom"

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Categories from "./features/categories/Categories"
import ProductList from "./features/products/ProductList"
import ProductDetail from "./features/products/ProductDetail"
import CartView from "./features/cart/CartView"

const App = () => {
  return (
    <div className="flex flex-col w-full bg-(--color-canvas)">
      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />
        <Hero />
      </div>

      <main className="min-h-screen flex flex-col p-4 gap-4">
        <Routes>
          <Route path="/" element={
            <>
              <Categories />
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
