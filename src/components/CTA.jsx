import { site } from '../siteConfig.js'
import BookingButtons from './BookingButtons.jsx'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [
  { text: "LET'S" },
  { text: 'BRING' },
  { text: 'YOUR', break: true },
  { text: 'VISION TO LIFE' },

]

export default function CTA() {
  return (
    <section className="border-t border-white/5 bg-ink py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-lime px-8 py-12 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-ink/60">
                READY TO MAKE AN IMPACT?
              </span>
              <SplitText
                as="h2"
                words={headingWords}
                className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl"
              />
            </div>
            <BookingButtons variant="onLime" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
