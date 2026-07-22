import { useEffect } from 'react'

/**
 * useLockBodyScroll
 * Prevents the page behind an open overlay (mobile nav drawer) from
 * scrolling. Restores the previous overflow value on cleanup so it
 * never leaks into the rest of the app.
 */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isLocked])
}
