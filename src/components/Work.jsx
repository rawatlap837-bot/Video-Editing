import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

const headingWords = [{ text: 'SELECTED' }, { text: 'WORK', highlight: true }]

// Extracts a YouTube video ID from a watch, shorts, or short-link URL
function getYouTubeId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtube\.com\/shorts\/)([^?]+)/,
    /(?:youtu\.be\/)([^?]+)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

const projects = [
  { tag: 'Cinematic AI', url: 'https://www.youtube.com/watch?v=gjMuRX4DSqQ' },
  { tag: 'Brand Stories', url: 'https://www.youtube.com/watch?v=TigOlJVPB-8' },
  { tag: 'Deep Dive', url: 'https://www.youtube.com/watch?v=gdAdK16LZmw' },
  { tag: 'Social Cuts', url: 'https://www.youtube.com/shorts/uQMNmteF1ec' },
  { tag: 'Visual Narratives', url: 'https://www.youtube.com/watch?v=zXkmecGu3z8' },
  { tag: 'On-Camera', url: 'https://www.youtube.com/watch?v=MxTxM9A23yY' },
]

export default function Work() {
  const [activeVideo, setActiveVideo] = useState(null)

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
              href="https://drive.google.com/drive/folders/1T5-0AVRnysX9go2x2A431u41dH8a98y3"
              className="rounded-full border border-lime bg-lime px-6 py-3 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-lime/90"
            >
              VIEW FULL PORTFOLIO
            </a>
          </div>

          <p className="mt-3 max-w-md text-sm text-muted">
            Films, stories and content crafted to make an impact.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.tag} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setActiveVideo(p)}
                className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-lime/50"
              >
                <img
                  src={`https://img.youtube.com/vi/${getYouTubeId(p.url)}/hqdefault.jpg`}
                  alt={p.tag}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/40 transition-colors duration-300 group-hover:bg-ink/25" />
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-lime">
                  {p.tag}
                </span>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink shadow-lg transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-sm font-bold tracking-wide text-white/70 hover:text-lime"
            >
              CLOSE ✕
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                key={activeVideo.url}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.url)}?autoplay=1`}
                title={activeVideo.tag}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}