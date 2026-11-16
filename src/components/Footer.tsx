import { company, products, whatsappLink } from '../data/site'
import { Logo } from './Header'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            {company.tagline}. We are a merchant exporter of granular, powdered and pelletized grades, sourced from
            trusted Indian manufacturers.
          </p>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <a href={`#${p.slug}`}>{p.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{company.address}</li>
            <li>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`https://${company.website}`}>{company.website}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {year} {company.name}. All rights reserved.
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
      <a
        className="wa-float"
        href={whatsappLink('Hello, I have an enquiry about activated carbon.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"
          />
        </svg>
      </a>
    </footer>
  )
}
