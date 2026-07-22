import './CategoryFilter.css'

/**
 * CategoryFilter
 * Static-functional per assessment scope: clicking a chip filters the
 * already-loaded mock product list client-side (no API call, no server
 * state) and updates the active visual state.
 */
function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter products by category">
      {categories.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={active === category}
          className={`category-filter__chip ${active === category ? 'is-active' : ''}`}
          onClick={() => onSelect(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
