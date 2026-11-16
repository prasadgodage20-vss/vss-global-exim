import { company, products } from '../data/site'
import coconutCarbon from '../assets/coconut-carbon.jpg'

const stats = [
  [String(products.length), 'grades', 'Product range'],
  ['1000+', 'mg/g', 'Iodine value'],
  ['COA', '', 'With every shipment'],
  ['Maharashtra', '', 'Based in India'],
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">India-based merchant exporter</p>
          <h1>
            Coconut shell-based <em>activated carbon</em> for global industry
          </h1>
          <p className="hero-lead">
            {company.name} sources and supplies granular, powdered and pelletized activated carbon for water
            purification, wastewater treatment, effluent treatment plants and industrial filtration.
          </p>
          <div className="hero-ctas">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>
            <a href="#enquiry" className="btn btn-ghost">
              Request a Quote
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src={coconutCarbon}
            alt="Granular activated carbon in a half coconut shell"
            width={609}
            height={416}
          />
        </figure>
        <dl className="stats">
          {stats.map(([value, unit, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {value}
                {unit && <small> {unit}</small>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
