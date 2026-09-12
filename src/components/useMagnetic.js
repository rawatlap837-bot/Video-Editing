import { useRef } from 'react'

/**
 * Gives an element a subtle "magnetic" pull toward the cursor while
 * hovered, then springs back to rest on mouse leave. Skips itself on
 * touch devices, where there's no hover to react to.
 */
export default function useMagnetic(strength = 14) {
  const ref = useRef(null)

  function onMouseMove(e) {
    const el = ref.current
    if (!el) return
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
