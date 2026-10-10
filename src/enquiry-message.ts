export type EnquiryFields = {
  name: string
  phone: string
  email: string
  city: string
  state: string
  country: string
  service: string
  website: string
}

type EnquiryPackage = {
  title: string
  price: string
  period: string
  description: string
  bonus: string
}

export function buildEnquiryMessage(fields: EnquiryFields, offer: EnquiryPackage) {
  const price = offer.price === 'Custom quote'
    ? 'Custom quote — confirmed during consultation'
    : `${offer.price} ${offer.period}`

  return [
    "Hi Growthys! I'd like to claim an offer.",
    '',
    `Selected service: ${fields.service}`,
    `Selected package: ${offer.title}`,
    `Package price: ${price}`,
    `What's included: ${offer.description}`,
    `Package bonus: ${offer.bonus}`,
    ...(fields.service === 'Digital Marketing Services' ? ['Note: Advertising spend is separate from the management fee.'] : []),
    '',
    `Name: ${fields.name.trim()}`,
    `Phone: ${fields.phone.trim()}`,
    `Email: ${fields.email.trim()}`,
    `City: ${fields.city.trim()}`,
    `State: ${fields.state.trim()}`,
    `Country: ${fields.country}`,
    `Business website: ${fields.website}`,
    '',
    'Please confirm availability, final scope and next steps.',
  ].join('\n')
}
