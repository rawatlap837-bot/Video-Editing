import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [
  { text: 'FROM AN' },
  { text: 'IDEA TO SOMETHING', break: true },
  { text: 'PEOPLE', highlight: true },
  { text: 'CAN`T IGNORE.' },
]

const steps = [
  {
    title: 'IDEATE:',
    desc: 'Turn ideas into a clear creative direction. Define the hook, story, message, and visual concept before production begins.'
  },
  {
    title: 'CREATE:',
    desc: 'Transform ideas into attention-grabbing visuals. Build powerful scenes, graphics, and storytelling elements that make people stop and watch.'
  },
  {
    title: 'PRODUCE:',
    desc: 'Bring every idea to life with motion and sound. Combine animation, video, music, voice, and effects to create an engaging experience.'
  },
  {
    title: 'POLISH:',
    desc: 'Fine-tune every detail before it goes live. Refine timing, transitions, visuals, audio, and effects until everything feels sharp and professional.'
  },
  {
    title: 'DELIVER:',
    desc: 'Deliver content that is ready to perform. Optimize every video for the right platform, screen, format, and audience.'
  },
];

export default function Process() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0) // how many numbers are "lit"
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    // Pause a beat when fully lit (all 5) or right after resetting to 0
    const atEnd = activeStep >= steps.length
    const atStart = activeStep === 0
    const delay = atEnd ? 1400 : atStart ? 250 : 350

    const timeout = setTimeout(() => {
      setActiveStep((prev) => (prev >= steps.length ? 0 : prev + 1))
    }, delay)

    return () => clearTimeout(timeout)
  }, [hasStarted, activeStep])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="border-t border-white/5 bg-ink py-16 md:py-24"
    >
      <style>
        {`
          @keyframes numberPop {
            0% {
              transform: scale(0) rotate(-160deg);
              opacity: 0;
            }
            60% {
              transform: scale(1.25) rotate(8deg);
              opacity: 1;
            }
            80% {
              transform: scale(0.92) rotate(-3deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }
          @keyframes numberSettleGlow {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(163, 230, 53, 0.35);
            }
            50% {
              box-shadow: 0 0 14px 4px rgba(163, 230, 53, 0.35);
            }
          }
          .number-badge {
            transition: background-color 0.4s ease, border-color 0.4s ease, color 0.4s ease;
          }
          .number-badge--active {
            animation:
              numberPop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
              numberSettleGlow 2.4s ease-in-out 0.55s infinite;
          }
        `}
      </style>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SplitText
          as="h2"
          words={headingWords}
          className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-x-6">
          {steps.map((s, i) => {
            const isActive = i < activeStep

            return (
              <Reveal key={s.title} delay={i * 60} className="relative">
                <div className="flex items-center gap-4 md:block">
                  <div
                    className={`number-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-display text-sm ${isActive
                      ? 'number-badge--active border-lime bg-lime/10 text-lime'
                      : 'border-white/15 text-white/25'
                      }`}
                  >
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`hidden h-px flex-1 md:absolute md:left-12 md:right-0 md:top-6 md:block transition-colors duration-500 ${isActive ? 'bg-gradient-to-r from-lime/50 to-transparent' : 'bg-white/10'
                        }`}
                    />
                  )}
                  <h3 className="font-display text-base tracking-wide text-white md:mt-5">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted md:mt-2">{s.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}