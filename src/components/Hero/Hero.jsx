import { ArrowIcon } from '../../assets/icons.jsx'
import './Hero.css'

/**
 * Hero
 * Signature moment for the page: a warm oven-shelf composition with rising
 * steam wisps and a rotating "baked fresh" stamp badge, standing in for a
 * hero product photo. Motion is ambient and CSS-only (transform/opacity)
 * so it's cheap and respects prefers-reduced-motion via index.css.
 */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Est. neighborhood bakery</span>
          <h1 className="hero__title">
            Baked before <em>sunrise</em>,
            <br />
            still warm at your door.
          </h1>
          <p className="hero__subtitle">
            Sourdough, laminated pastry, and layer cakes made in small batches with
            stone-milled flour — order today's bake or reserve tomorrow morning's.
          </p>
          <div className="hero__cta-row">
            <a className="btn btn-primary" href="#products">
              Browse today's bake <ArrowIcon size={15} />
            </a>
            <a className="btn btn-ghost" href="#story">
              Our story
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>4:00am</dt>
              <dd>First loaves out</dd>
            </div>
            <div>
              <dt>12+</dt>
              <dd>Fresh items daily</dd>
            </div>
            <div>
              <dt>4.8★</dt>
              <dd>Average rating</dd>
            </div>
          </dl>
        </div>

        <div className="hero__scene" aria-hidden="true">
          <div className="hero__stamp">
            <svg viewBox="0 0 120 120" className="hero__stamp-ring">
              <defs>
                <path id="stampCircle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href="#stampCircle" startOffset="0%">
                  BAKED FRESH DAILY • BAKEHOUSE LANE •
                </textPath>
              </text>
            </svg>
            <span className="hero__stamp-center">100%</span>
          </div>

          <div className="hero__loaf">
            <div className="hero__loaf-glow" />
            <span className="hero__steam s1" />
            <span className="hero__steam s2" />
            <span className="hero__steam s3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
