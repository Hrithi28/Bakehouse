import { useEffect, useState } from 'react'
import { WheatMark, SearchIcon, MenuIcon, CloseIcon, CartIcon } from '../../assets/icons.jsx'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import './Navbar.css'

const LINKS = [
  { label: 'Menu', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit', href: '#footer' },
]

/**
 * Navbar
 * Sticky header that gains a solid background once the page scrolls past
 * the hero. Search is static-functional: it filters the visible mock
 * product grid by name, no network request involved.
 */
function Navbar({ searchTerm, onSearchChange }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  useLockBodyScroll(isDrawerOpen)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top">
          <WheatMark size={26} />
          <span>
            Bakehouse <em>Lane</em>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__search">
          <SearchIcon size={16} />
          <input
            type="search"
            placeholder="Search the menu…"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" type="button" aria-label="View order (static mockup)">
            <CartIcon size={19} />
            <span className="navbar__cart-count">2</span>
          </button>
          <button
            className="navbar__icon-btn navbar__menu-toggle"
            type="button"
            aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen((v) => !v)}
          >
            {isDrawerOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <div className={`navbar__drawer ${isDrawerOpen ? 'is-open' : ''}`}>
        <div className="navbar__search navbar__search--mobile">
          <SearchIcon size={16} />
          <input
            type="search"
            placeholder="Search the menu…"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search products"
          />
        </div>
        {LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setIsDrawerOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
