export function getTravelAgencyJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Nueva Frontera Colombia',
    url: 'https://www.nueva-frontera.com',
    logo: 'https://www.nueva-frontera.com/logo.png',
    description:
      'Agencia de viajes de lujo especializada en Colombia auténtica. Experiencias exclusivas para viajeros exigentes.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CL 127 N° 60, Torre 3, Apt. 504',
      addressLocality: 'Bogotá',
      postalCode: '11-001',
      addressCountry: 'CO',
    },
    email: 'booking@nueva-frontera.com',
    telephone: '+573125606586',
    sameAs: [
      'https://wa.me/573125606586',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
  };
}

export function getTouristTripJsonLd(trip: {
  name: string;
  description: string;
  url: string;
  image: string;
  duration: string;
  price: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: trip.name,
    description: trip.description,
    url: trip.url,
    image: trip.image,
    touristType: 'Adventure travelers',
    itinerary: {
      '@type': 'ItemList',
      description: `${trip.duration} itinerary`,
    },
    offers: {
      '@type': 'Offer',
      price: trip.price.replace(/[^0-9.,]/g, '').replace('.', '').replace(',', '.'),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Nueva Frontera Colombia',
      url: 'https://www.nueva-frontera.com',
    },
  };
}
