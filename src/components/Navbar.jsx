import { useEffect, useRef, useState } from 'react'
import { site } from '../siteConfig.js'

function IconCircle({ children, href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
      aria-label="social link"
    >
      {children}
    </a>
  )
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const bookRef = useRef(null)

  useEffect(() => {
    function onClick(e) {
      if (bookRef.current && !bookRef.current.contains(e.target)) setBookOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header className="sticky top-0 z-30 w-full bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12">
        {/* Social icons */}
        <div className="hidden items-center gap-3 lg:flex">
          <IconCircle href={site.socials.facebook}>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9C16.5 3.9 15.4 3.8 14.2 3.8c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2H10V22h3.5z" />
            </svg>
          </IconCircle>
          <IconCircle href={site.socials.instagram}>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2c-2.7 0-3.1 0-4.1.1-1 .1-1.7.2-2.3.5-.6.2-1.2.6-1.7 1.1-.5.5-.9 1-1.1 1.7-.3.6-.4 1.3-.5 2.3C2.2 8.7 2.2 9.1 2.2 12s0 3.3.1 4.3c.1 1 .2 1.7.5 2.3.2.6.6 1.2 1.1 1.7.5.5 1 .9 1.7 1.1.6.3 1.3.4 2.3.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.2-.6 1.7-1.1.5-.5.9-1 1.1-1.7.3-.6.4-1.3.5-2.3.1-1 .1-1.4.1-4.3s0-3.3-.1-4.3c-.1-1-.2-1.7-.5-2.3a4.4 4.4 0 0 0-1.1-1.7 4.4 4.4 0 0 0-1.7-1.1c-.6-.3-1.3-.4-2.3-.5C15.1 2 14.7 2 12 2zm0 1.8c2.6 0 3 0 4 .1.9.1 1.4.2 1.8.4.4.2.7.4 1 .7.3.3.5.6.7 1 .2.4.3.9.4 1.8.1 1 .1 1.4.1 4s0 3-.1 4c-.1.9-.2 1.4-.4 1.8-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.4.2-.9.3-1.8.4-1 .1-1.4.1-4 .1s-3 0-4-.1c-.9-.1-1.4-.2-1.8-.4-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.2-.4-.3-.9-.4-1.8-.1-1-.1-1.4-.1-4s0-3 .1-4c.1-.9.2-1.4.4-1.8.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.2.9-.3 1.8-.4 1-.1 1.4-.1 4-.1z" />
              <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM16.9 6.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
            </svg>
          </IconCircle>
          <IconCircle href={site.socials.linkedin}>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21H9z" />
            </svg>
          </IconCircle>
          <IconCircle href={site.socials.youtube}>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </IconCircle>
        </div>

        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-lime">
            <path d="M4 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm12 2.2 5-2.6v13l-5-2.6V8.2z" />
          </svg>
          <div className="leading-none">
            <div className="font-display text-xl tracking-wide text-white">{site.brandName}</div>
            <div className="text-[10px] font-semibold tracking-[0.3em] text-lime">{site.brandTag}</div>
          </div>
        </a>

        {/* Center nav (desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-lime"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: booking dropdown + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block" ref={bookRef}>
            <button
              onClick={() => setBookOpen((v) => !v)}
              className="rounded-full bg-lime px-6 py-3 text-sm font-bold tracking-wide text-ink transition-transform hover:scale-105"
            >
              BOOK A CALL
            </button>
            <div
              className={
                'absolute right-0 mt-3 w-64 origin-top-right rounded-2xl border border-white/10 bg-[#232428] p-2 shadow-2xl transition-all duration-200 ' +
                (bookOpen
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-95 opacity-0')
              }
            >
              <a
                href={site.bookingUrls.international}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-lime/10 hover:text-lime"
              >
                🌍 International — Strategy Call
              </a>
              <a
                href={site.bookingUrls.india}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-lime/10 hover:text-lime"
              >
                🇮🇳 India — Strategy Call
              </a>
            </div>
          </div>

          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-lime hover:text-lime lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          'overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-300 ease-out lg:hidden ' +
          (open ? 'max-h-96' : 'max-h-0 border-t-0')
        }
      >
        <nav className="flex flex-col gap-4 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide text-white/80 hover:text-lime"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.bookingUrls.international}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-fit rounded-full bg-lime px-6 py-3 text-sm font-bold tracking-wide text-ink"
          >
            BOOK CALL — INTERNATIONAL
          </a>
          <a
            href={site.bookingUrls.india}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full border border-lime/70 px-6 py-3 text-sm font-bold tracking-wide text-lime"
          >
            BOOK CALL — INDIA
          </a>
        </nav>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-lime/60 via-white/10 to-transparent" />
    </header>
  )
}
