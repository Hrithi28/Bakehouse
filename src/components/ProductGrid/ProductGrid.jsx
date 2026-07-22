import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import CategoryFilter from '../CategoryFilter/CategoryFilter.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import './ProductGrid.css'

/**
 * ProductGrid
 * Combines the category filter and search term (lifted to App) to derive
 * the visible product list. All filtering happens client-side against the
 * static mock array — no requests, no persisted state.
 */
function ProductGrid({ products, categories, activeCategory, onSelectCategory, searchTerm }) {
  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="product-grid-section" id="products">
      <div className="container">
        <div className="product-grid-section__header">
          <SectionHeading
            eyebrow="Today's bake"
            title="Fresh from the oven this morning"
            description="Everything below was mixed, proofed and baked on-site today. Filter by category or search the menu."
          />
          <CategoryFilter categories={categories} active={activeCategory} onSelect={onSelectCategory} />
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} style={{ transitionDelay: `${(index % 4) * 80}ms` }} />
            ))}
          </div>
        ) : (
          <div className="product-grid-section__empty">
            <p>Nothing matches "{searchTerm}" in {activeCategory === 'All' ? 'the menu' : activeCategory.toLowerCase()} yet.</p>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
