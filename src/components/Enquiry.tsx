import { useState, type FormEvent } from 'react'
import { company, enquiryChecklist, products, whatsappLink } from '../data/site'

const incoterms = ['FOB', 'CIF', 'CFR', 'EXW']

export function Enquiry({ product, onProductChange }: { product: string; onProductChange: (name: string) => void }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    mesh: '',
    quantity: '',
    incoterm: 'CIF',
    message: '',
  })

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const body = () =>
    [
      `Enquiry: ${product}`,
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Destination: ${form.country}`,
      form.mesh && `Mesh / size: ${form.mesh}`,
      `Quantity: ${form.quantity}`,
      `Incoterm: ${form.incoterm}`,
      form.message && `Notes: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Enquiry – ${product}`,
    )}&body=${encodeURIComponent(body())}`
  }

  const sendWhatsApp = () => {
    const formEl = document.getElementById('enquiry-form') as HTMLFormElement
    if (!formEl.reportValidity()) return
    window.open(whatsappLink(body()), '_blank', 'noreferrer')
  }

  return (
    <section className="section section-alt" id="enquiry">
      <div className="container enquiry">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Send an enquiry</h2>
          <p>Tell us what you need and we'll reply with a quotation, usually within one business day.</p>
          <h3 className="checklist-title">Helpful to include</h3>
          <ul className="checklist">
            {enquiryChecklist.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <address className="contact-card card">
            <strong>{company.name}</strong>
            <span>{company.address}</span>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>

        <form id="enquiry-form" className="card form" onSubmit={sendEmail}>
          <label>
            Full name *
            <input required value={form.name} onChange={set('name')} autoComplete="name" />
          </label>
          <label>
            Company
            <input value={form.company} onChange={set('company')} autoComplete="organization" />
          </label>
          <label>
            Email *
            <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
          </label>
          <label>
            Destination country / port *
            <input required value={form.country} onChange={set('country')} />
          </label>
          <label className="full">
            Product *
            <select value={product} onChange={(e) => onProductChange(e.target.value)}>
              {products.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
              <option>Other / custom grade</option>
            </select>
          </label>
          <label>
            Mesh / particle size
            <input value={form.mesh} onChange={set('mesh')} placeholder="e.g. 8×30" />
          </label>
          <label>
            Quantity *
            <input required value={form.quantity} onChange={set('quantity')} placeholder="e.g. 20 MT / month" />
          </label>
          <label>
            Incoterm
            <select value={form.incoterm} onChange={set('incoterm')}>
              {incoterms.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </label>
          <label className="full">
            Specs, packing or documents needed
            <textarea rows={4} value={form.message} onChange={set('message')} />
          </label>
          <div className="form-actions full">
            <button type="submit" className="btn btn-primary">
              Send by Email
            </button>
            <button type="button" className="btn btn-outline" onClick={sendWhatsApp}>
              Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
