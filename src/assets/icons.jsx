// Small, single-purpose line-art icon set drawn for Bakehouse Lane.
// Every icon shares a 1.5 stroke weight and rounded joins so they read as
// one consistent hand, whether used at 18px in the nav or 40px on a card.

export const WheatMark = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
    <path d="M16 27V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path
      d="M16 9c-2.1-1-3.3-2.9-3.3-4.8M16 9c2.1-1 3.3-2.9 3.3-4.8M16 13.4c-2.3-1-3.7-3.1-3.7-5.2M16 13.4c2.3-1 3.7-3.1 3.7-5.2M16 17.8c-2.3-1-3.7-3.1-3.7-5.2M16 17.8c2.3-1 3.7-3.1 3.7-5.2M16 22.2c-2.3-1-3.7-3.1-3.7-5.2M16 22.2c2.3-1 3.7-3.1 3.7-5.2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
)

export const SearchIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const MenuIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const CloseIcon = ({ size = 22, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const CartIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 4h2l1.6 10.2a2 2 0 0 0 2 1.8h7.8a2 2 0 0 0 2-1.6L20 8H6.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="20" r="1.4" fill="currentColor" />
    <circle cx="17" cy="20" r="1.4" fill="currentColor" />
  </svg>
)

export const ArrowIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const StarIcon = ({ size = 14, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.1l1.4-6.8-5.1-4.7 6.9-.8L12 2.5z" />
  </svg>
)

export const InstagramIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
)

export const FacebookIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.5 8.5h2V5.3c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.55H6v3.55h3.63V21h3.65v-4.7h3.5l.55-3.55h-4.05v-2.2c0-1.03.28-1.74 1.72-1.74z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
)

export const PinterestIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M9.5 18c.5-1.8 1.4-5.7 1.4-5.7s-.35-.7-.35-1.75c0-1.63.95-2.85 2.13-2.85 1 0 1.49.75 1.49 1.66 0 1-.64 2.5-.97 3.9-.28 1.16.58 2.1 1.72 2.1 2.06 0 3.45-2.65 3.45-5.79 0-2.39-1.6-4.17-4.53-4.17-3.3 0-5.36 2.46-5.36 5.2 0 .95.28 1.62.72 2.14.2.24.23.34.16.62-.05.2-.18.7-.23.9-.07.3-.3.4-.55.29-1.53-.62-2.24-2.29-2.24-4.17 0-3.1 2.62-6.82 7.8-6.82 4.17 0 6.92 3.02 6.92 6.26 0 4.29-2.36 7.5-5.85 7.5-1.17 0-2.27-.64-2.65-1.36 0 0-.63 2.5-.76 2.98-.23.86-.7 1.72-1.12 2.39"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
)

/* ---- Product category illustrations ----
   Warm, simple line-art placeholders standing in for photography. Each
   sits on a soft gradient tile (see ProductImage.jsx) and is themed to
   the product's category so the grid reads clearly even before real
   product photos are dropped in. */

export const BreadGlyph = (props) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M8 34c0-12 8-21 24-21s24 9 24 21c0 9-8 16-24 16S8 43 8 34z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M20 26c1.5 3 1.5 8 0 12M32 22c1.5 4 1.5 12 0 16M44 26c1.5 3 1.5 8 0 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export const CroissantGlyph = (props) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M10 40c4-16 16-24 27-22 8 1.5 12 8 10 13-1 2.7-3.6 3.7-6 2.8 2 2 2.3 5-.2 7-3 2.4-6.6.7-7.6-2.3-1 2.8-4 4.6-7 3.6-2.7-.9-3.8-3.6-2.8-6-2.7 1.3-6.1.2-7.3-2.6-1-2.4.2-4.8 2-6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CakeGlyph = (props) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M12 34h40v16a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V34z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 34c0-5 4-8 8-8s6 3 12 3 8-3 12-3 8 3 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 26v-6M32 26v-8M40 26v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 18c-1.5-1-1.5-3 0-4.4 1.5 1.4 1.5 3.4 0 4.4z" fill="currentColor" />
  </svg>
)

export const CookieGlyph = (props) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="25" cy="26" r="2.2" fill="currentColor" />
    <circle cx="38" cy="24" r="2.2" fill="currentColor" />
    <circle cx="41" cy="35" r="2.2" fill="currentColor" />
    <circle cx="27" cy="39" r="2.2" fill="currentColor" />
    <circle cx="34" cy="33" r="2.2" fill="currentColor" />
  </svg>
)

export const PieGlyph = (props) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M8 30c5-12 14-19 24-19s19 7 24 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 30h48l-3 18a5 5 0 0 1-5 4H16a5 5 0 0 1-5-4l-3-18z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M20 30c1-6 4-11 12-13M44 30c-1-6-4-11-12-13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

export const MuffinGlyph = (props) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M14 30c6-7 10-11 18-11s12 4 18 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 30h40l-4 18a5 5 0 0 1-5 4H21a5 5 0 0 1-5-4l-4-18z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M18 30l-2-4M32 30l0-6M46 30l2-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

export const CATEGORY_GLYPHS = {
  Breads: BreadGlyph,
  Pastries: CroissantGlyph,
  Cakes: CakeGlyph,
  Cookies: CookieGlyph,
  Pies: PieGlyph,
  Muffins: MuffinGlyph,
}
