import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Categories from "./features/categories/Categories"
import ProductList from "./features/products/ProductList"

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <main className="min-h-screen border-2 border-green-400 flex flex-col p-4 gap-4">
        <Categories />
        <ProductList />
      </main>
    </div>
  )
}

export default App
