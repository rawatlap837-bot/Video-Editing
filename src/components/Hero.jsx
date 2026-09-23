import { useEffect, useRef, useState } from 'react'
import cube from '../assets/cube.png'
import BookingButtons from './BookingButtons.jsx'
import SplitText from './SplitText.jsx'
import CountUp from './CountUp.jsx'
import FloatingOrbs from './FloatingOrbs.jsx'

const stats = [
  { number: 1200, suffix: '+', label: 'VIDEOS EDITED' },
  { number: 48, suffix: 'HR', label: 'AVG. TURNAROUND' },
  { number: 10, suffix: '+', label: 'FORMATS MASTERED' },
]

// const line1Words = [{ text: 'YOUR' }]
const accentWords = [{ text: 'A' }, { text: 'VIDEO' }, { text: 'EDITING' }, { text: 'STUDIO' }]
const line2Words = [{ text: 'GREAT IDEAS,' }, { text: 'DESERVE GREAT FILMS.' }]
const line3Words = [{ text: 'WE CREATE THE DIFFERENCE.' }]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const cubeWrapRef = useRef(null)

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const enterClass =
    'transition-all duration-700 ease-out motion-reduce:transition-none ' +
    (mounted ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-6 ')
  const enterStyle = (delayMs) => ({ transitionDelay: mounted ? `${delayMs}ms` : '0ms' })

  function handlePointerMove(e) {
    const el = cubeWrapRef.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translate3d(${x * 16}px, ${y * 16}px, 0)`
  }
  function handlePointerLeave() {
    const el = cubeWrapRef.current
    if (el) el.style.transform = ''
  }

  return (
    <section
      className="relative overflow-hidden bg-ink"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      {/* Animated separator line — solid lime line with a traveling highlight glint */}
      <div aria-hidden="true" className="relative h-[2px] w-full bg-lime/70 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 h-full w-1/4 animate-navGlint motion-reduce:hidden"
          style={{
            background: 'linear-gradient(90deg, transparent, #f3ffcf, transparent)',
            boxShadow: '0 0 10px 2px rgba(243,255,207,0.8)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-10 md:grid-cols-2 md:gap-6 md:px-10 md:pb-24 md:pt-16 lg:px-12">
        {/* Left: copy */}
        <div className="relative z-10">
          <h1 className="font-display leading-[0.95] text-white text-[10vw] xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4rem] [text-wrap:balance] max-w-[90%] md:max-w-[600px]">
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4 sm:gap-y-2">
              <SplitText
                as="span"
                eager
                staggerMs={55}
                startDelayMs={160}
                words={accentWords}
                className="inline-block align-middle font-display text-lime text-[16px] tracking-widest sm:text-base md:text-lg lg:text-xl xl:text-3xl"
              />
            </span>
            <SplitText as="span" eager staggerMs={55} startDelayMs={320} words={line2Words} className="block" />
            <SplitText as="span" eager staggerMs={55} startDelayMs={480} words={line3Words} className="block text-lime" />
          </h1>

          <div className={'mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4 ' + enterClass} style={enterStyle(680)}>
            <a
              href="#work"
              aria-label="watch showreel"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition-transform hover:scale-105 sm:h-16 sm:w-16"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current sm:h-6 sm:w-6">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1T5-0AVRnysX9go2x2A431u41dH8a98y3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 flex-1 max-w-xs items-center justify-center rounded-full border border-lime/60 text-xl font-medium tracking-wide text-lime transition-colors hover:bg-lime/10 sm:h-16"
            >
              Explore Our Work
            </a>
          </div>

          <div className={'mt-8 grid grid-cols-3 divide-x divide-white/15 sm:mt-10 ' + enterClass} style={enterStyle(760)}>
            {stats.map((s) => (
              <div key={s.label} className="pr-2 first:pl-0 pl-2 sm:pr-4 sm:pl-4">
                <div className="font-display text-xl text-white sm:text-2xl md:text-2xl lg:text-3xl">
                  <CountUp number={s.number} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[9px] leading-tight tracking-wide text-muted sm:text-[10px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <BookingButtons className={'mt-8 sm:mt-10 ' + enterClass} style={enterStyle(840)} />
        </div>

        {/* Right: infinitely floating cube, orbiting orbs, hover parallax tilt */}
        <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px] md:min-h-[420px] lg:min-h-[520px]">
          <div
            aria-hidden="true"
            className="absolute h-48 w-48 rounded-full bg-lime/25 blur-3xl animate-pulseGlow sm:h-64 sm:w-64 md:h-80 md:w-80"
          />
          <FloatingOrbs className="hidden sm:block" />
          <div
            ref={cubeWrapRef}
            className="relative w-full max-w-xs transition-transform duration-300 ease-out will-change-transform sm:max-w-sm md:max-w-md"
          >
            <img
              src={cube}
              alt="Floating 3D cube"
              className="w-full object-contain animate-float drop-shadow-[0_0_60px_rgba(203,254,28,0.35)]"
            />
          </div>

          <p
            className={
              'absolute bottom-0 right-0 hidden max-w-[13rem] text-right text-xs leading-relaxed tracking-wide text-muted md:max-w-[15rem] sm:block ' +
              enterClass
            }
            style={enterStyle(920)}
          >
            FROM CONCEPT TO FINAL CUT, WE CREATE FILMS THAT MAKE BRANDS STAND OUT.
          </p>
        </div>

        {/* Mobile-only version of the tagline paragraph */}
        <p className={'-mt-2 max-w-md text-sm leading-relaxed tracking-wide text-muted sm:hidden ' + enterClass} style={enterStyle(920)}>
          FROM CONCEPT TO FINAL CUT, WE CREATE FILMS THAT MAKE BRANDS STAND OUT.
        </p>
      </div>

      <a
        href="#top"
        aria-label="back to top"
        className="fixed bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-md bg-lime text-ink shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:h-11 sm:w-11"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5] sm:h-5 sm:w-5">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}