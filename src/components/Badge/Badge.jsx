import './Badge.css'

/**
 * Badge — small pill used for "Bestseller" / "New" product tags.
 * `tone` selects the color treatment so it can sit on light or dark backgrounds.
 */
function Badge({ children, tone = 'rust' }) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}

export default Badge
