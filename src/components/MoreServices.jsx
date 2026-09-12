import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [
  { text: 'WANT' },
  { text: 'MORE' },
  { text: 'THAN' },
  { text: 'A' },
  { text: 'CUT?', break: true },
  { text: 'WE' },
  { text: 'HANDLE' },
  { text: 'THAT' },
  { text: 'TOO.', highlight: true },
]

const extras = [
  {
    title: 'Thumbnails & Titles',
    desc: 'Click-worthy thumbnails and titles tested against what already works in your niche.',
  },
  {
    title: 'Scripting & Structure',
    desc: 'Hooks, story beats and pacing planned before a single clip gets cut.',
  },
  {
    title: 'Motion Graphics & Captions',
    desc: 'Animated captions, lower-thirds and graphics that keep every second earning attention.',
  },
  {
    title: 'Multi-Platform Repurposing',
    desc: 'One shoot, cut down into every format your channels actually need.',
  },
]

export default function MoreServices() {
  return (
    <section className="border-t border-white/5 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SplitText
          as="h2"
          words={headingWords}
          className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-lime/50">
                <span className="font-display text-sm text-lime">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base tracking-wide text-white">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
