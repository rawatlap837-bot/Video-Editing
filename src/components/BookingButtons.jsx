import { site } from '../siteConfig.js'
import useMagnetic from './useMagnetic.js'

/**
 * Two strategy-call booking buttons — International and India.
 * variant: 'solid' (lime pill, for dark backgrounds) | 'onLime' (ink pill, for lime backgrounds)
 * Both buttons have a subtle magnetic pull toward the cursor on hover.
 */
export default function BookingButtons({ variant = 'solid', className = '', style }) {
  const primaryMag = useMagnetic(10)
  const secondaryMag = useMagnetic(10)

  const solid =
    'rounded-full bg-lime px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-ink transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(203,254,28,0.45)]'
  const outline =
    'rounded-full border border-lime/70 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-lime transition-colors duration-300 hover:bg-lime hover:text-ink'
  const onLimeSolid =
    'rounded-full bg-ink px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-lime transition-colors duration-300'
  const onLimeOutline =
    'rounded-full border border-ink/40 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-lime'

  const primary = variant === 'onLime' ? onLimeSolid : solid
  const secondary = variant === 'onLime' ? onLimeOutline : outline
  const magStyle = { transition: 'transform 0.2s ease-out' }

  return (
    <div className={'flex flex-wrap items-center gap-3 ' + className} style={style}>
      <a
        ref={primaryMag.ref}
        onMouseMove={primaryMag.onMouseMove}
        onMouseLeave={primaryMag.onMouseLeave}
        style={magStyle}
        href={site.bookingUrls.international}
        target="_blank"
        rel="noopener noreferrer"
        className={primary}
      >
        BOOK CALL — INTERNATIONAL
      </a>
      <a
        ref={secondaryMag.ref}
        onMouseMove={secondaryMag.onMouseMove}
        onMouseLeave={secondaryMag.onMouseLeave}
        style={magStyle}
        href={site.bookingUrls.india}
        target="_blank"
        rel="noopener noreferrer"
        className={secondary}
      >
        BOOK CALL — INDIA
      </a>
    </div>
  )
}
