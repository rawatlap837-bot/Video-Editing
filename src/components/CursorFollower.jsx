import { useEffect, useRef, useState } from 'react'

const TRAIL_SIZE = 10
const EASE = 0.14

/**
 * A lime-green cursor made of several trailing circles that chase the real
 * pointer with staggered lag, forming a tapering comet-like streak of crisp
 * (non-blurred) circles. Grows over links/buttons, and emits a pulse ring
 * on click. Disables itself entirely on touch devices and when the user
 * has requested reduced motion — the native cursor is left alone there.
 */
export default function CursorFollower() {
  const trailRefs = useRef([])
  const target = useRef({ x: -100, y: -100 })
  const trail = useRef(Array.from({ length: TRAIL_SIZE }, () => ({ x: -100, y: -100 })))
  const raf = useRef(null)

  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pulses, setPulses] = useState([])

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    function onMove(e) {
      target.current.x = e.clientX
      target.current.y = e.clientY
      setVisible(true)
    }
    function onOver(e) {
      const el = e.target.closest && e.target.closest('a, button, input, textarea, select, [data-cursor-hover]')
      setHovering(Boolean(el))
    }
    function onDown(e) {
      const id = Date.now() + Math.random()
      setPulses((p) => [...p, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setPulses((p) => p.filter((pulse) => pulse.id !== id))
      }, 700)
    }
    function onLeaveWindow() {
      setVisible(false)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    document.addEventListener('mouseleave', onLeaveWindow)

    function tick() {
      let leadX = target.current.x
      let leadY = target.current.y

      trail.current.forEach((point, i) => {
        point.x += (leadX - point.x) * EASE
        point.y += (leadY - point.y) * EASE
        const el = trailRefs.current[i]
        if (el) {
          // Shrinks gradually toward the tail for a tapering comet shape.
          const scale = Math.max(1 - i * (0.8 / TRAIL_SIZE), 0.2)
          el.style.transform =
            `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${scale})`
        }
        leadX = point.x
        leadY = point.y
      })

      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseleave', onLeaveWindow)
      cancelAnimationFrame(raf.current)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {trail.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          aria-hidden="true"
          className={
            'pointer-events-none fixed left-0 top-0 z-[999] rounded-full ' +
            'transition-[width,height,opacity] duration-200 ease-out ' +
            (hovering
              ? 'h-24 w-24 border-2 border-lime bg-lime/10 '
              : i === 0
              ? 'h-8 w-8 bg-lime '
              : 'h-10 w-10 bg-lime ')
          }
          style={{
            opacity: visible ? Math.max(1 - i * (0.9 / TRAIL_SIZE), 0.06) : 0,
          }}
        />
      ))}

      {pulses.map((p) => (
        <div
          key={p.id}
          aria-hidden="true"
          className="pointer-events-none fixed z-[999] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime animate-cursorPulse"
          style={{ left: p.x, top: p.y }}
        />
      ))}
    </>
  )
}