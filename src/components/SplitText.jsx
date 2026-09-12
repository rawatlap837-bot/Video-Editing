import { Fragment, useEffect, useRef, useState } from 'react'

/**
 * Renders a heading word-by-word, each word masked and sliding up into
 * place with a stagger. Plays once, either immediately (`eager`, for
 * above-the-fold headings) or the first time it scrolls into view.
 *
 * words: [{ text: 'HELLO' }, { text: 'WORLD', highlight: true }, { text: 'DONE.', break: true }]
 * - `highlight` colors the word lime.
 * - `break` inserts a line break after that word.
 */
export default function SplitText({
  words,
  as: Tag = 'h2',
  className = '',
  eager = false,
  staggerMs = 45,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (eager) {
      const t = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(t)
    }

    const node = ref.current
    if (!node || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [eager])

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <span
              className={
                'inline-block transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ' +
                (visible ? 'translate-y-0 opacity-100' : 'translate-y-[110%] opacity-0') +
                (w.highlight ? ' text-lime' : '')
              }
              style={{ transitionDelay: visible ? `${i * staggerMs}ms` : '0ms' }}
            >
              {w.text}
            </span>
          </span>
          {w.break ? <br /> : ' '}
        </Fragment>
      ))}
    </Tag>
  )
}
