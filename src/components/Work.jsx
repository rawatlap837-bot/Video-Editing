import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [{ text: 'RECENT' }, { text: 'WORK', highlight: true }]

const projects = [
  { tag: 'Long Form' },
  { tag: 'Short Form' },
  { tag: 'Faceless' },
  { tag: 'Brand Film' },
  { tag: 'Talking Head' },
  { tag: 'Storytelling' },
]

export default function Work() {
  return (
    <section id="work" className="border-t border-white/5 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SplitText
              as="h2"
              words={headingWords}
              className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
            />
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:border-lime hover:text-lime"
            >
              VIEW FULL REEL
            </a>
          </div>

          <p className="mt-3 max-w-md text-sm text-muted">
            Swap these placeholders for thumbnails or embeds from your best edits.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.tag} delay={(i % 3) * 90}>
              <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-lime/50">
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-lime">
                  {p.tag}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
