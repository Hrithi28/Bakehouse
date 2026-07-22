import { WheatMark, InstagramIcon, FacebookIcon, PinterestIcon, ArrowIcon } from '../../assets/icons.jsx'
import './Footer.css'

const LINK_GROUPS = [
  {
    title: 'Menu',
    links: ['Breads', 'Pastries', 'Cakes', 'Cookies', 'Pies', 'Muffins'],
  },
  {
    title: 'Bakery',
    links: ['Our Story', 'Wholesale', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Order FAQ', 'Delivery Area', 'Custom Cakes', 'Contact'],
  },
]

/**
 * Footer
 * Static site footer: link columns, a non-submitting newsletter mockup
 * (per assessment scope — no real form handling), and social icon links.
 */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a className="footer__brand-mark" href="#top">
            <WheatMark size={26} />
            <span>
              Bakehouse <em>Lane</em>
            </span>
          </a>
          <p className="footer__brand-copy">
            142 Miller Street, Riverside District — open daily, 7am until the last loaf sells out.
          </p>
          <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email address" />
            <button type="submit" aria-label="Join the newsletter">
              <ArrowIcon size={15} />
            </button>
          </form>
        </div>

        <div className="footer__links">
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="footer__link-group">
              <h5>{group.title}</h5>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#products">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Bakehouse Lane. All rights reserved.</p>
        <div className="footer__social">
          <a href="#top" aria-label="Instagram">
            <InstagramIcon size={17} />
          </a>
          <a href="#top" aria-label="Facebook">
            <FacebookIcon size={17} />
          </a>
          <a href="#top" aria-label="Pinterest">
            <PinterestIcon size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
