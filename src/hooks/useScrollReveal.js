import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal
 * Adds a `.is-visible` class (see .reveal in index.css) the first time an
 * element scrolls into the viewport, then stops observing it. Keeps the
 * animation subtle and one-shot rather than re-triggering on every scroll.
 *
 * @param {Object} options
 * @param {number} options.threshold - fraction of the element visible before it reveals
 * @param {string} options.rootMargin - shrinks/grows the trigger viewport
 */
export function useScrollReveal({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced-motion users by revealing immediately.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
