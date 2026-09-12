import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [
  { text: 'FOOTAGE' },
  { text: 'IN.', break: true },
  { text: 'CONTENT', highlight: true },
  { text: 'OUT.' },
]

const steps = [
  { title: 'Upload & Brief', desc: 'Drop your raw footage and a short brief into a shared folder — no calls required to start.' },
  { title: 'Rough Cut', desc: 'Your editor delivers a first pass within 48 hours, structured around your brief.' },
  { title: 'Review & Revise', desc: 'Leave timestamped notes right on the cut. Revisions come back same day.' },
  { title: 'Final Delivery', desc: 'Color, sound and captions locked, exported in every size your platforms need.' },
  { title: 'Repurpose & Scale', desc: 'Long form gets cut down into short form clips so one shoot fuels every channel.' },
]

export default function Process() {
  return (
    <section id="process" className="border-t border-white/5 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SplitText
          as="h2"
          words={headingWords}
          className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-x-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="relative">
              <div className="flex items-center gap-4 md:block">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime font-display text-sm text-lime animate-pulseGlow">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-lime/50 to-transparent md:absolute md:left-12 md:right-0 md:top-6 md:block" />
                )}
                <h3 className="font-display text-base tracking-wide text-white md:mt-5">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted md:mt-2">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
