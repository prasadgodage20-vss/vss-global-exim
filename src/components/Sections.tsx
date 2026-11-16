import { applications, company, process, strengths } from '../data/site'
import carbonGranules from '../assets/carbon-granules.jpg'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div>
          <p className="eyebrow">About us</p>
          <h2>Sourcing and supplying coconut shell activated carbon</h2>
          <p>
            {company.name} is an India-based merchant export company. We source and supply coconut shell-based
            activated carbon for water purification, wastewater treatment, effluent treatment plants and industrial
            filtration.
          </p>
          <p>
            We deliver quality products at competitive prices through trusted Indian manufacturers. Our focus is on
            reliability, transparency and lasting global partnerships.
          </p>
        </div>
        <ul className="strengths">
          {strengths.map((s, i) => (
            <li key={s.title} className="card">
              <span className="num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Applications() {
  return (
    <section className="section section-alt" id="applications">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Applications</p>
          <h2>Where our carbon works</h2>
        </div>
        <ul className="app-grid">
          {applications.map((a) => (
            <li key={a.title} className="card app">
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How we work</p>
          <h2>From enquiry to delivery</h2>
        </div>
        <ol className="process">
          {process.map((s, i) => (
            <li key={s.title}>
              <span className="step">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band" style={{ backgroundImage: `url(${carbonGranules})` }}>
      <div className="container cta-inner">
        <div>
          <h2>Need a reliable activated carbon supplier?</h2>
          <p>Tell us your specification. We'll send a sample, a COA and a quotation.</p>
        </div>
        <a href="#enquiry" className="btn btn-primary">
          Send an Enquiry
        </a>
      </div>
    </section>
  )
}
