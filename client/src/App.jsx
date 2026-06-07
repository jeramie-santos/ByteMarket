import { useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Categories from "./features/categories/Categories"
import ProductList from "./features/products/ProductList"

const App = () => {

  const [ selectedCategory, setSelectedCategory ] = useState("All");
  

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <main className="min-h-screen border-2 border-green-400 flex flex-col p-4 gap-4">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <ProductList selectedCategory={selectedCategory}/>
      </main>
    </div>
  )
}

export default App
