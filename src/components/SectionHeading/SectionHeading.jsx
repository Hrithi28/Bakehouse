import './SectionHeading.css'

/**
 * SectionHeading — shared eyebrow + title + optional supporting copy,
 * reused above the product grid and story panel so section intros stay
 * visually consistent without duplicating markup.
 */
function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export default SectionHeading
