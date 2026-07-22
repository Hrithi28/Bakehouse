import { useScrollReveal } from '../../hooks/useScrollReveal'
import ProductImage from '../ProductImage/ProductImage.jsx'
import Badge from '../Badge/Badge.jsx'
import { StarIcon } from '../../assets/icons.jsx'
import './ProductCard.css'

/**
 * ProductCard
 * Styled like a bakery order ticket — a perforated edge between the image
 * and the details, with the price stamped in a circular tag. This is the
 * page's signature motif, echoed at smaller scale in the nav and footer.
 */
function ProductCard({ product, style }) {
  const [ref, isVisible] = useScrollReveal()
  const { name, category, price, rating, badge, blurb } = product

  return (
    <article
      ref={ref}
      className={`product-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={style}
    >
      <div className="product-card__image-wrap">
        <ProductImage category={category} name={name} />
        {badge && (
          <div className="product-card__badge">
            <Badge tone={badge === 'Bestseller' ? 'rust' : 'honey'}>{badge}</Badge>
          </div>
        )}
        <span className="product-card__price" aria-hidden="true">
          ${price.toFixed(2)}
        </span>
      </div>

      <div className="product-card__ticket-edge" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="product-card__body">
        <div className="product-card__top-row">
          <span className="product-card__category">{category}</span>
          <span className="product-card__rating">
            <StarIcon size={12} /> {rating.toFixed(1)}
          </span>
        </div>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__blurb">{blurb}</p>
        <div className="product-card__footer-row">
          <span className="product-card__price-text">${price.toFixed(2)}</span>
          <button className="product-card__cta" type="button">
            Add to order
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
