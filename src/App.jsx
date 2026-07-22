import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import ProductGrid from './components/ProductGrid/ProductGrid.jsx'
import StoryPanel from './components/StoryPanel/StoryPanel.jsx'
import Footer from './components/Footer/Footer.jsx'
import { PRODUCTS, CATEGORIES } from './data/products.js'

/**
 * App
 * Owns the two pieces of UI state the assessment asks for — active
 * category and search term — and passes them down. Everything else is
 * static mock data; there is no backend, auth, cart, or persistence here
 * by design (see the assessment's implementation constraint).
 */
function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main>
        <Hero />
        <ProductGrid
          products={PRODUCTS}
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchTerm={searchTerm}
        />
        <StoryPanel />
      </main>
      <Footer />
    </>
  )
}

export default App
