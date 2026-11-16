import { useState } from 'react'
import { company, whatsappLink } from '../data/site'
import logo from '../assets/logo.png'

const nav = [
  ['About', '#about'],
  ['Products', '#products'],
  ['Applications', '#applications'],
  ['Process', '#process'],
  ['Contact', '#enquiry'],
]

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${company.name} home`}>
      <img src={logo} alt="" className="logo-mark" width={160} height={134} />
      <span className="logo-text">
        VSS GLOBAL
        <br />
        EXIM
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="utility">
        <div className="container utility-inner">
          <span>Merchant exporter of coconut shell activated carbon · {company.location}</span>
          <span className="utility-links">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
          <nav id="main-nav" className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="btn btn-primary btn-sm" href={whatsappLink('Hello, I would like a quote for activated carbon.')} target="_blank" rel="noreferrer">
              Get a Quote
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
