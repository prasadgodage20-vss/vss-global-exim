// ---------------------------------------------------------------------------
// All editable site content lives here.
// ---------------------------------------------------------------------------

export const company = {
  name: 'VSS Global EXIM',
  tagline: 'Coconut Shell-Based Activated Carbon from India',
  location: 'Shrirampur, Maharashtra, India',
  address: 'Industrial Estate, Shrirampur, Maharashtra – 413709, India',
  phone: '+91 91561 31448',
  whatsapp: '919156131448', // country code + number, digits only
  email: 'info@vssglobalexim.com',
  website: 'www.vssglobalexim.com',
}

export const whatsappLink = (text: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`

export type Category = 'Granular' | 'Powder' | 'Pelletized' | 'Specialty'

export type Texture = 'granular' | 'fine' | 'powder' | 'lump' | 'pellet'

export interface Product {
  slug: string
  name: string
  category: Category
  texture: Texture
  summary: string
  hsCode: string
  sizes: string
  specs: [label: string, value: string][]
  applications: string[]
  packaging: string[]
}

export const products: Product[] = [
  {
    slug: 'granular-activated-carbon',
    name: 'Granular Activated Carbon (GAC)',
    category: 'Granular',
    texture: 'granular',
    summary:
      'Steam-activated coconut shell carbon with a high micropore volume and very low dust. Our core product for water and air treatment.',
    hsCode: '3802 10 00',
    sizes: '4×8, 6×12, 8×16, 8×30, 12×30, 12×40, 20×40, 30×60 mesh',
    specs: [
      ['Iodine number', '900 – 1200 mg/g'],
      ['CTC activity', '50 – 70 %'],
      ['Hardness', '≥ 98 %'],
      ['Moisture', '≤ 5 %'],
      ['Ash', '≤ 3 %'],
      ['pH', '9 – 11'],
      ['Bulk density', '0.45 – 0.52 g/cc'],
    ],
    applications: [
      'Drinking and municipal water',
      'Point-of-use filter cartridges',
      'Dechlorination and odour removal',
      'Industrial process water',
    ],
    packaging: ['25 kg PP woven bags with liner', '500 kg / 1000 kg jumbo bags', 'Palletised on request'],
  },
  {
    slug: 'gold-recovery-carbon',
    name: 'Gold Recovery Carbon',
    category: 'Granular',
    texture: 'granular',
    summary:
      'Extra-hard granules for carbon-in-pulp (CIP), carbon-in-leach (CIL) and heap-leach circuits, with fast gold loading and low attrition loss.',
    hsCode: '3802 10 00',
    sizes: '6×12, 6×16, 8×16 mesh',
    specs: [
      ['Iodine number', '≥ 1000 mg/g'],
      ['CTC activity', '≥ 60 %'],
      ['Hardness', '≥ 99 %'],
      ['Moisture', '≤ 5 %'],
      ['Ash', '≤ 3 %'],
      ['Undersize', '≤ 2 %'],
    ],
    applications: ['CIP / CIL gold plants', 'Heap-leach recovery', 'Elution and regeneration circuits'],
    packaging: ['500 kg / 1000 kg jumbo bags', '25 kg bags on request'],
  },
  {
    slug: 'powdered-activated-carbon',
    name: 'Powdered Activated Carbon (PAC)',
    category: 'Powder',
    texture: 'powder',
    summary:
      'Finely milled carbon for batch decolourisation and purification, where fast adsorption kinetics matter more than reuse.',
    hsCode: '3802 10 00',
    sizes: '100, 200, 325 mesh (custom particle size on request)',
    specs: [
      ['Iodine number', '900 – 1100 mg/g'],
      ['Methylene blue', '180 – 250 mg/g'],
      ['Moisture', '≤ 10 %'],
      ['Ash', '≤ 5 %'],
      ['pH', '6 – 8 or 9 – 11'],
      ['Passing 325 mesh', '≥ 90 %'],
    ],
    applications: [
      'Sugar and syrup decolourisation',
      'Edible oil bleaching',
      'Pharmaceutical purification',
      'Wastewater treatment',
    ],
    packaging: ['20 / 25 kg multi-wall paper or PP bags', '500 kg jumbo bags'],
  },
  {
    slug: 'pelletized-activated-carbon',
    name: 'Pelletized Activated Carbon',
    category: 'Pelletized',
    texture: 'pellet',
    summary:
      'Extruded cylindrical pellets with a low pressure drop and high crush strength, made for gas-phase and vapour adsorption beds.',
    hsCode: '3802 10 00',
    sizes: '2 mm, 3 mm, 4 mm diameter pellets',
    specs: [
      ['CTC activity', '60 – 80 %'],
      ['Iodine number', '≥ 1000 mg/g'],
      ['Hardness', '≥ 95 %'],
      ['Moisture', '≤ 5 %'],
      ['Ash', '≤ 5 %'],
      ['Bulk density', '0.45 – 0.55 g/cc'],
    ],
    applications: [
      'Air and gas purification',
      'VOC and solvent recovery',
      'Odour control systems',
      'Industrial gas-phase filters',
    ],
    packaging: ['25 kg PP bags with liner', '500 kg jumbo bags'],
  },
  {
    slug: 'impregnated-carbon',
    name: 'Impregnated Activated Carbon',
    category: 'Specialty',
    texture: 'granular',
    summary:
      'Coconut shell carbon impregnated with silver, KOH, KI or sulphur to target specific contaminants and gases.',
    hsCode: '3802 10 00',
    sizes: '4×8, 6×12, 8×30 mesh',
    specs: [
      ['Impregnant', 'Ag / KOH / KI / S'],
      ['Impregnation level', 'As per requirement'],
      ['Iodine number (base)', '≥ 1000 mg/g'],
      ['Hardness', '≥ 97 %'],
      ['Moisture', '≤ 15 %'],
    ],
    applications: [
      'Silver-impregnated water filters',
      'H₂S and mercaptan removal',
      'Mercury vapour removal',
      'Respirator and gas-mask media',
    ],
    packaging: ['25 kg PP bags with liner', 'Sealed drums for sensitive grades'],
  },
]

export const categories: ('All' | Category)[] = ['All', 'Granular', 'Powder', 'Pelletized', 'Specialty']

// "Why choose us", from the brochure: quality, competitive prices, trusted Indian
// manufacturers, reliability, transparency and lasting partnerships.
export const strengths = [
  {
    title: 'Trusted Indian manufacturers',
    text: 'We source from established coconut shell carbon manufacturers in India, matched to the grade and volume you need.',
  },
  {
    title: 'Quality at competitive prices',
    text: 'Specifications are agreed before quotation, and every batch ships with a certificate of analysis (COA), at a price that works for your business.',
  },
  {
    title: 'Reliability',
    text: 'You get consistent quality from lot to lot, dependable supply schedules and export documentation done right the first time.',
  },
  {
    title: 'Transparency & partnership',
    text: 'Clear specs, honest timelines and open communication. We aim to build lasting global partnerships, not one-off sales.',
  },
]

// Brochure applications first, then the uses covered by pelletized and gold-recovery grades.
export const applications = [
  { title: 'Water Purification', text: 'Drinking water, municipal plants, RO pre-filters and filter cartridges.' },
  { title: 'Wastewater Treatment', text: 'Removal of organics, colour, odour and COD from municipal and industrial wastewater.' },
  { title: 'Effluent Treatment Plants', text: 'Tertiary polishing in ETPs to meet discharge norms.' },
  { title: 'Industrial Filtration', text: 'Process water, chemical streams and liquid-phase purification.' },
  { title: 'Air & Gas Purification', text: 'VOC removal, solvent recovery and odour control, using pelletized grades.' },
  { title: 'Gold Recovery', text: 'CIP, CIL and heap-leach circuits, using hard granular grades.' },
]

// How an order moves from enquiry to delivery with us as a merchant exporter.
export const process = [
  { title: 'Requirement', text: 'You share the product, grade, specs, quantity and destination.' },
  { title: 'Sourcing', text: 'We match your spec with a trusted Indian manufacturer.' },
  { title: 'Sample & quote', text: 'You receive a sample, its COA and a clear quotation.' },
  { title: 'Pre-shipment check', text: 'The production lot is tested against the agreed specification.' },
  { title: 'Packing', text: 'Bagged, labelled and palletised to your requirement.' },
  { title: 'Shipment', text: 'Container loading and full export documentation.' },
]

export const enquiryChecklist = [
  'Product and grade',
  'Mesh size or particle size',
  'Key specs (iodine, CTC, ash, hardness)',
  'Quantity (MT) and frequency',
  'Packing preference',
  'Destination country / port and Incoterm',
  'Documents or third-party tests needed',
]

export const productOverview = {
  title: 'Coconut Shell-Based Activated Carbon',
  paragraphs: [
    'VSS Global Exim offers coconut shell-based activated carbon, a high-quality adsorbent derived from coconut shells and processed to develop a highly porous structure with excellent adsorption properties.',
    'Coconut shell activated carbon is widely used in water purification, wastewater treatment, effluent treatment plants, and various industrial filtration applications. Its hardness, pore structure, and adsorption characteristics make it a suitable choice for removing impurities, colour, odour, and certain organic contaminants from water.',
    'As an India-based merchant exporter, VSS Global Exim works with reliable Indian manufacturers to supply coconut shell-based activated carbon that meets the specific requirements of international buyers.',
    'We focus on quality, dependable sourcing, competitive commercial terms, and professional export coordination to support long-term business relationships.',
  ],
  highlights: ['Highly porous structure', 'High hardness, low dust', 'Removes colour, odour and organics', 'Sourced from reliable Indian manufacturers'],
}
