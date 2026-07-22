import { CATEGORY_GLYPHS } from '../../assets/icons.jsx'
import './ProductImage.css'

const GRADIENTS = {
  Breads: 'linear-gradient(155deg, #e9c68d 0%, #c68a4a 100%)',
  Pastries: 'linear-gradient(155deg, #f3d9a6 0%, #e8a33d 100%)',
  Cakes: 'linear-gradient(155deg, #eec3c9 0%, #c1502e 100%)',
  Cookies: 'linear-gradient(155deg, #d9b98c 0%, #8b5a2b 100%)',
  Pies: 'linear-gradient(155deg, #f0d3a3 0%, #b5762f 100%)',
  Muffins: 'linear-gradient(155deg, #dfe6c9 0%, #7c8b6f 100%)',
}

/**
 * ProductImage
 * Stands in for real product photography (explicitly out of scope for this
 * static UI/UX assessment). Renders a category-themed gradient tile with a
 * matching hand-drawn glyph so the grid still reads clearly at a glance —
 * swap for <img> once real photography/CDN assets are available.
 */
function ProductImage({ category, name }) {
  const Glyph = CATEGORY_GLYPHS[category]
  const gradient = GRADIENTS[category] || GRADIENTS.Breads

  return (
    <div className="product-image" style={{ backgroundImage: gradient }} role="img" aria-label={`${name} — ${category}`}>
      {Glyph && <Glyph className="product-image__glyph" />}
    </div>
  )
}

export default ProductImage
