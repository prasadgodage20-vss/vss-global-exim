import type { Texture } from '../data/site'

// Deterministic pseudo-random generator so the art is identical on every render.
function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const config: Record<Texture, { count: number; min: number; max: number; sides: number }> = {
  granular: { count: 70, min: 5, max: 11, sides: 6 },
  fine: { count: 160, min: 2.5, max: 5, sides: 5 },
  powder: { count: 420, min: 0.8, max: 2, sides: 4 },
  lump: { count: 22, min: 11, max: 20, sides: 7 },
  pellet: { count: 55, min: 7, max: 12, sides: 0 },
}

/** Generative SVG of carbon granules, used in the hero and on product cards. */
export function Granules({ texture, seed = 7, className }: { texture: Texture; seed?: number; className?: string }) {
  const r = rng(seed)
  const { count, min, max, sides } = config[texture]
  const shapes = Array.from({ length: count }, (_, i) => {
    const cx = r() * 100
    const cy = r() * 100
    const size = min + r() * (max - min)
    const rot = r() * Math.PI * 2
    if (texture === 'pellet') {
      // Extruded cylinders: rounded rectangles at random angles.
      const tone = 0.1 + r() * 0.12
      return (
        <rect
          key={i}
          x={cx - size / 2}
          y={cy - 1.6}
          width={size}
          height={3.2}
          rx={1.6}
          transform={`rotate(${((rot * 180) / Math.PI).toFixed(1)} ${cx.toFixed(2)} ${cy.toFixed(2)})`}
          fill={`rgba(255,255,255,${tone.toFixed(3)})`}
        />
      )
    }
    const n = sides + Math.floor(r() * 3)
    const pts = Array.from({ length: n }, (_, k) => {
      const a = rot + (k / n) * Math.PI * 2
      const d = size * (0.6 + r() * 0.4)
      return `${(cx + Math.cos(a) * d).toFixed(2)},${(cy + Math.sin(a) * d).toFixed(2)}`
    }).join(' ')
    const tone = 0.18 + r() * 0.5
    return <polygon key={i} points={pts} fill={`rgba(255,255,255,${(tone * 0.22).toFixed(3)})`} />
  })

  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {shapes}
    </svg>
  )
}
