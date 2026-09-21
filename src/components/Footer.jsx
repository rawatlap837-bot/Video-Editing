import { site } from '../siteConfig.js'
import BookingButtons from './BookingButtons.jsx'
import Reveal from './Reveal.jsx'
import ATS2 from '../assets/ATS1.png'

// Same anchors as the navbar — footer nav should never drift from it.
const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const formatLinks = [
  { label: 'Long Form', href: '#services' },
  { label: 'Short Form', href: '#services' },
  { label: 'Faceless', href: '#services' },
  { label: 'AI Videos', href: '#services' },
  { label: 'Brand Films', href: '#services' },
  { label: 'Storytelling', href: '#services' },
  { label: 'Talking Head', href: '#services' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-ink pt-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <img src={ATS2} alt="logo" className="h-12 w-auto object-contain" />
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                A video editing studio for creators and brands — long form, short form,
                faceless, AI, brand film, storytelling and talking head.
              </p>
              <BookingButtons className="mt-6" />
            </div>

            <div>
              <h4 className="font-display text-sm tracking-wide text-white">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-lime">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm tracking-wide text-white">Video Formats</h4>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {formatLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-lime">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:gap-6">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-lime">
                {site.email}
              </a>
              <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-lime">
                {site.phone}
              </a>
              <span>{site.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9C16.5 3.9 15.4 3.8 14.2 3.8c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2H10V22h3.5z" />
                </svg>
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12 2c-2.7 0-3.1 0-4.1.1-1 .1-1.7.2-2.3.5-.6.2-1.2.6-1.7 1.1-.5.5-.9 1-1.1 1.7-.3.6-.4 1.3-.5 2.3C2.2 8.7 2.2 9.1 2.2 12s0 3.3.1 4.3c.1 1 .2 1.7.5 2.3.2.6.6 1.2 1.1 1.7.5.5 1 .9 1.7 1.1.6.3 1.3.4 2.3.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.2-.6 1.7-1.1.5-.5.9-1 1.1-1.7.3-.6.4-1.3.5-2.3.1-1 .1-1.4.1-4.3s0-3.3-.1-4.3c-.1-1-.2-1.7-.5-2.3a4.4 4.4 0 0 0-1.1-1.7 4.4 4.4 0 0 0-1.7-1.1c-.6-.3-1.3-.4-2.3-.5C15.1 2 14.7 2 12 2zm0 1.8c2.6 0 3 0 4 .1.9.1 1.4.2 1.8.4.4.2.7.4 1 .7.3.3.5.6.7 1 .2.4.3.9.4 1.8.1 1 .1 1.4.1 4s0 3-.1 4c-.1.9-.2 1.4-.4 1.8-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.4.2-.9.3-1.8.4-1 .1-1.4.1-4 .1s-3 0-4-.1c-.9-.1-1.4-.2-1.8-.4-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.2-.4-.3-.9-.4-1.8-.1-1-.1-1.4-.1-4s0-3 .1-4c.1-.9.2-1.4.4-1.8.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.2.9-.3 1.8-.4 1-.1 1.4-.1 4-.1z" />
                  <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM16.9 6.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
                </svg>
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21H9z" />
                </svg>
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 text-center text-xs text-muted">
            © {new Date().getFullYear()} {site.brandName}. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  )
}