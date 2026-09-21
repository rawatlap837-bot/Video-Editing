import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import CountUp from './CountUp.jsx'

const headingWords = [
  { text: 'BUILT' },
  { text: 'FOR' },
  { text: 'EVERY' },
  { text: 'CREATOR', highlight: true },
]

const industries = [
  { title: 'YouTubers & Vloggers', desc: 'Weekly long form and the shorts pulled from it, on a schedule you can rely on.' },
  { title: 'Coaches & Educators', desc: 'Course and talking-head content cut to hold attention through a full lesson.' },
  { title: 'Podcasters', desc: 'Full episodes plus clip packages built for every platform your audience is on.' },
  { title: 'Agencies & Brands', desc: 'White-label editing and brand film production your clients never see behind.' },
]

const stats = [
  { number: 1200, suffix: '+', label: 'Videos delivered' },
  { number: 48, suffix: 'hr', label: 'Average turnaround' },
  { number: 90, suffix: '%', label: 'Recurring Clients' },
  { number: 10, suffix: '+', label: 'Formats Mastered' },
]

export default function Industries() {
  return (
    <section className="border-t border-white/5 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SplitText
          as="h2"
          words={headingWords}
          className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((n, i) => (
            <Reveal key={n.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-lime/50">
                <h3 className="font-display text-base tracking-wide text-white">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{n.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-lime/40 bg-lime/[0.06] p-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl text-lime sm:text-3xl">
                  <CountUp number={s.number} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] tracking-wide text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
