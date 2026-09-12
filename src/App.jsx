import CursorFollower from './components/CursorFollower.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Formats from './components/Formats.jsx'
import MoreServices from './components/MoreServices.jsx'
import Process from './components/Process.jsx'
import Work from './components/Work.jsx'
import Testimonials from './components/Testimonials.jsx'
import Industries from './components/Industries.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

const tickerItems = [
  'LONG FORM',
  'SHORT FORM',
  'FACELESS',
  'AI VIDEOS',
  'BRAND FILMS',
  'STORYTELLING',
  'TALKING HEAD',
]

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink">
      <CursorFollower />
      <Navbar />
      <Hero />
      <Marquee items={tickerItems} />
      <Formats />
      <MoreServices />
      <Process />
      <Work />
      <Testimonials />
      <Industries />
      <CTA />
      <Footer />
    </div>
  )
}
