import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [
  { text: 'ONE' },
  { text: 'EDITING' },
  { text: 'TEAM.', break: true },
  { text: 'EVERY' },
  { text: 'STORY', highlight: true },
  { text: 'YOU' },
  { text: 'NEED.' },
]

const formats = [
  {
    title: 'Long Form',
    desc: 'Podcasts, vlogs and deep-dives cut for full watch time, not just a hook.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9.5v5l5-2.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Short Form',
    desc: 'Reels, Shorts and TikToks paced for the scroll, with captions built in.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
        <path d="M11 19.5h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Faceless',
    desc: 'Stock, screen capture and voiceover assembled into a channel that never shows you.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M2 3l19 19" strokeLinecap="round" />
        <path d="M5 21c1-3.5 4-5.5 7-5.5s6 2 7 5.5" />
      </svg>
    ),
  },
  {
    title: 'AI Videos',
    desc: 'AI-generated footage, voices and avatars edited into a clean, believable final cut.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Brand Films',
    desc: 'Product and company films that pitch, launch and sell without feeling like an ad.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <rect x="2.5" y="5" width="14" height="14" rx="1.5" />
        <path d="M20 8l1.5-1v10L20 16" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Storytelling',
    desc: 'Narrative structure, pacing and sound design that carry a viewer start to finish.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <path d="M4 4.5h9a3 3 0 0 1 3 3v12l-3-2.2H4z" strokeLinejoin="round" />
        <path d="M8 9h6M8 12.5h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Talking Head',
    desc: 'Interviews and to-camera content, tightened and cut clean with zero dead air.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current fill-none" strokeWidth="1.6">
        <rect x="8" y="3" width="8" height="12" rx="4" />
        <path d="M5 12v1a7 7 0 0 0 14 0v-1M12 20v2M9 22h6" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Formats() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-white/5 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SplitText
          as="h2"
          words={headingWords}
          className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <div
                className={
                  'h-full rounded-2xl border p-6 transition-all hover:-translate-y-1 ' +
                  (i === 3
                    ? 'border-lime bg-lime text-ink'
                    : 'border-white/10 bg-white/[0.03] text-white hover:border-lime/50')
                }
              >
                <div
                  className={
                    'flex h-12 w-12 items-center justify-center rounded-full border ' +
                    (i === 3 ? 'border-ink/30 text-ink' : 'border-white/15 text-lime')
                  }
                >
                  {f.icon}
                </div>
                <h3 className="mt-5 font-display text-base tracking-wide">{f.title}</h3>
                <p className={'mt-2 text-sm leading-relaxed ' + (i === 3 ? 'text-ink/70' : 'text-muted')}>
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
