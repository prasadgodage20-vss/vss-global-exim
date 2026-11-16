import { useState } from 'react'
import { categories, productOverview, products, whatsappLink, type Product } from '../data/site'
import { Granules } from './Granules'
import { useMediaQuery } from '../hooks/useMediaQuery'
import carbonGranules from '../assets/carbon-granules.jpg'

function ProductCard({ p, index, onEnquire }: { p: Product; index: number; onEnquire: (name: string) => void }) {
  // Specs are always shown on tablet/desktop; on phones they collapse behind a toggle.
  const wide = useMediaQuery('(min-width: 601px)')
  return (
    <article className="card product" id={p.slug}>
      <div className="product-visual">
        <Granules texture={p.texture} seed={index * 97 + 13} />
        <span className="chip">{p.category}</span>
      </div>
      <div className="product-body">
        <h3>{p.name}</h3>
        <p>{p.summary}</p>

        <dl className="meta">
          <div>
            <dt>Sizes</dt>
            <dd>{p.sizes}</dd>
          </div>
          <div>
            <dt>HS code</dt>
            <dd>{p.hsCode}</dd>
          </div>
        </dl>

        <details className="more" open={wide}>
          <summary>Specifications, applications &amp; packaging</summary>
          <table className="specs">
            <caption className="sr-only">Typical specifications for {p.name}</caption>
            <tbody>
              {p.specs.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="lists">
            <div>
              <h4>Applications</h4>
              <ul>
                {p.applications.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Packaging</h4>
              <ul>
                {p.packaging.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <div className="product-ctas">
          <a
            href="#enquiry"
            className="btn btn-primary btn-sm"
            onClick={() => onEnquire(p.name)}
          >
            Enquire
          </a>
          <a
            className="btn btn-outline btn-sm"
            href={whatsappLink(`Hello, I am interested in ${p.name}. Please share price and availability.`)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

export function Products({ onEnquire }: { onEnquire: (name: string) => void }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const shown = filter === 'All' ? products : products.filter((p) => p.category === filter)

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="overview">
          <div>
            <p className="eyebrow">Product overview</p>
            <h2>{productOverview.title}</h2>
            {productOverview.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <figure className="overview-media">
            <img src={carbonGranules} alt="Close-up of coconut shell granular activated carbon" width={609} height={402} />
            <ul className="highlights">
              {productOverview.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </figure>
        </div>

        <div className="section-head">
          <p className="eyebrow">Product range</p>
          <h3 className="grades-title">Available grades</h3>
          <p>
            These are typical values. Final specifications are agreed before quotation and confirmed by a COA for each
            batch.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Filter products by category">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={filter === c} className="filter" onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <p className="count" aria-live="polite">
          Showing {shown.length} of {products.length} products
        </p>

        <div className="product-grid">
          {shown.map((p) => (
            <ProductCard key={p.slug} p={p} index={products.indexOf(p)} onEnquire={onEnquire} />
          ))}
        </div>
      </div>
    </section>
  )
}
