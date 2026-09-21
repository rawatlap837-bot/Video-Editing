import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [
  { text: 'WHAT' },
  { text: 'CLIENTS' },
  { text: 'ACTUALLY', highlight: true },
  { text: 'SAY' },
]

const quotes = [
  {
    quote:
      'We went from posting once a week to consistent, high-quality content. The edits feel sharp, intentional, and built for retention.',
    name: 'WAYTT THOMAS',
    role: 'YouTube Creator',
  },
  {
    quote:
      'They understood the vision from the start and turned raw footage into content that actually feels like my brand.',
    name: 'REEVA CREATES',
    role: 'Content Creator',
  },
  {
    quote:
      'From storytelling to pacing and visuals, they brought a level of polish that completely elevated our content.',
    name: 'RORY KERAN',
    role: 'Content Creator / Founder',
  },
];
export default function Testimonials() {
  return (
    <section className="border-t border-white/5 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SplitText
          as="h2"
          words={headingWords}
          className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-lime/40">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-lime">
                  <path d="M9.5 5C6 5 3 8 3 12.2 3 16 5.6 19 9 19v-4.2c-1.6 0-2.6-1-2.6-2.6 0-1.7 1.3-3 3.1-3V5zm10 0c-3.5 0-6.5 3-6.5 7.2 0 3.8 2.6 6.8 6 6.8v-4.2c-1.6 0-2.6-1-2.6-2.6 0-1.7 1.3-3 3.1-3V5z" />
                </svg>
                <p className="mt-4 text-sm leading-relaxed text-white/85">{t.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-sm text-white">{t.name}</div>
                  <div className="mt-1 text-xs tracking-wide text-muted">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
