export interface TripDay {
  day: number;
  title: string;
  description: string;
  hotel?: string;
  meals?: string;
}

export interface TripHotel {
  name: string;
  location: string;
  img: string;
}

export interface Trip {
  slug: string;
  /** Key in messages/*.json under trip namespace (e.g. 'norte', 'selva') */
  i18nKey: string;
  heroImg: string;
  facts: {
    duration: string;
    type: string;
    difficulty: string;
    group: string;
    theme: string;
  };
  price: {
    amount: string;
    per: string;
    notes: string;
  };
  highlights: string[];
  itinerary: TripDay[];
  hotels: TripHotel[];
  includes: string[];
  excludes: string[];
}

export const trips: Trip[] = [
  {
    slug: 'colombia-inedita',
    i18nKey: 'inedita',
    heroImg: '/img/viaje-bogota-cartagena-hero.jpg',
    facts: {
      duration: '19 días',
      type: 'Grupo',
      difficulty: 'Media',
      group: '10–16 pax',
      theme: 'Cultural, Naturaleza, Aventura',
    },
    price: { amount: '3.080 €', per: 'por persona (vuelos incluidos)', notes: '+ tasas de aeropuerto · hab. doble' },
    highlights: [
      'Bogotá y sus alrededores: La Candelaria, Monserrate, Zipaquirá',
      'Eje Cafetero: haciendas, Valle del Cócora, Salento',
      'Sierra Nevada de Santa Marta: comunidades indígenas',
      'Parque Nacional Tayrona: playas y selva tropical',
      'Cartagena de Indias: historia, gastronomía y playas',
      'Vuelos nacionales incluidos',
    ],
    itinerary: [
      { day: 1, title: 'Madrid → Bogotá', description: 'Vuelo internacional. Llegada y traslado al hotel.', hotel: 'Hotel Spot Bogotá 3★', meals: 'C' },
      { day: 2, title: 'Bogotá', description: 'Visita a La Candelaria, Museo del Oro, cerro de Monserrate.', hotel: 'Hotel Spot Bogotá 3★', meals: 'D / A' },
      { day: 3, title: 'Bogotá → Zipaquirá → Villa de Leyva', description: 'Catedral de Sal de Zipaquirá. Ruta hacia Villa de Leyva.', hotel: 'Hotel Plaza Mayor 3★', meals: 'D / A' },
      { day: 4, title: 'Villa de Leyva → Barichara', description: 'Exploración de Villa de Leyva. Viaje a Barichara.', hotel: 'Hotel Las Terrazas 3★', meals: 'D / A' },
      { day: 5, title: 'Barichara → Eje Cafetero', description: 'Vuelo a Pereira. Llegada al Eje Cafetero.', hotel: 'Hacienda Combia', meals: 'D / A / C' },
      { day: 6, title: 'Eje Cafetero', description: 'Tour del café, Valle del Cócora, Salento.', hotel: 'Hacienda Combia', meals: 'D / A' },
      { day: 7, title: 'Eje Cafetero → Filandia', description: 'Filandia y sus miradores. Artesanías en cestería.', hotel: 'Hacienda Combia', meals: 'D / A' },
      { day: 8, title: 'Eje Cafetero → Santa Marta', description: 'Vuelo a Santa Marta vía Bogotá.', hotel: 'Hotel Boutique Don Pepe', meals: 'D' },
      { day: 9, title: 'Sierra Nevada', description: 'Visita a comunidades indígenas Wiwa en la Sierra Nevada.', hotel: 'Hotel Boutique Don Pepe', meals: 'D / A' },
      { day: 10, title: 'Minca', description: 'Pueblo de montaña, fincas de cacao y café, cascadas.', hotel: 'Hotel Boutique Don Pepe', meals: 'D / A' },
      { day: 11, title: 'Santa Marta → Tayrona', description: 'Entrada al Parque Nacional Tayrona. Caminata a las playas.', hotel: 'Ecohabs Tayrona', meals: 'D / A / C' },
      { day: 12, title: 'Tayrona', description: 'Día libre en el parque. Snorkeling, senderismo.', hotel: 'Ecohabs Tayrona', meals: 'D / A / C' },
      { day: 13, title: 'Tayrona → Palomino', description: 'Tubing en el río Palomino. Playa del río y mar.', hotel: 'Aite Eco Lodge', meals: 'D / A' },
      { day: 14, title: 'Palomino → Cartagena', description: 'Traslado a Cartagena de Indias.', hotel: 'Hotel Quadrifolio 5★', meals: 'D' },
      { day: 15, title: 'Cartagena', description: 'Tour a pie por la ciudad amurallada, Getsemaní, San Felipe.', hotel: 'Hotel Quadrifolio 5★', meals: 'D / A' },
      { day: 16, title: 'Islas del Rosario', description: 'Excursión en lancha a las Islas del Rosario. Snorkeling.', hotel: 'Hotel Quadrifolio 5★', meals: 'D / A' },
      { day: 17, title: 'Cartagena libre', description: 'Día libre. Compras, gastronomía o playa de Bocagrande.', hotel: 'Hotel Quadrifolio 5★', meals: 'D' },
      { day: 18, title: 'Cartagena → Madrid', description: 'Traslado al aeropuerto. Vuelo de regreso.', meals: 'D' },
      { day: 19, title: 'Llegada a Madrid', description: 'Llegada a Madrid.' },
    ],
    hotels: [
      { name: 'Hotel Spot Bogotá', location: 'Bogotá', img: '/img/hotel-opera.jpg' },
      { name: 'Hacienda Combia', location: 'Eje Cafetero', img: '/img/hacienda-combia.jpg' },
      { name: 'Ecohabs Tayrona', location: 'Tayrona', img: '/img/hotel-tayrona.jpg' },
      { name: 'Hotel Quadrifolio', location: 'Cartagena', img: '/img/hotel-sofitel-cartagena.jpg' },
    ],
    includes: [
      'Vuelos internacionales Madrid–Bogotá–Cartagena–Madrid',
      'Vuelos nacionales según itinerario',
      'Todos los traslados terrestres en vehículo privado',
      'Alojamiento en hoteles indicados (o similares)',
      'Comidas según programa (D=Desayuno, A=Almuerzo, C=Cena)',
      'Guía acompañante español durante todo el viaje',
      'Todas las actividades y excursiones indicadas',
      'Asistencia telefónica 24h en destino',
    ],
    excludes: [
      'Tasas de aeropuerto',
      'Gastos personales',
      'Comidas no indicadas en el programa',
      'Entradas no especificadas',
      'Seguro médico de viaje',
      'Propinas',
    ],
  },
  {
    slug: 'de-la-selva-al-desierto',
    i18nKey: 'selva',
    heroImg: '/img/viaje-selva-desierto-hero.jpg',
    facts: { duration: '15 días', type: 'FIT', difficulty: 'Media', group: '2–6 pax', theme: 'Aventura, Naturaleza' },
    price: { amount: '2.890 €', per: 'por persona', notes: 'hab. doble · sin vuelos internacionales' },
    highlights: [
      'Amazonas: selva, comunidades indígenas, fauna',
      'Parque Nacional Tayrona: playas y bosque tropical',
      'La Guajira: desierto, Wayuu, Cabo de la Vela',
      'Cartagena de Indias: patrimonio y gastronomía',
    ],
    itinerary: [
      { day: 1, title: 'Llegada a Leticia', description: 'Llegada al Amazonas colombiano.', hotel: 'Canaloa Ecoluxury Lodge', meals: 'C' },
      { day: 2, title: 'Amazonas', description: 'Exploración de la selva, encuentro con comunidades indígenas.', hotel: 'Canaloa Ecoluxury Lodge', meals: 'D / A / C' },
      { day: 3, title: 'Amazonas', description: 'Avistamiento de delfines rosados, pesca artesanal.', hotel: 'Canaloa Ecoluxury Lodge', meals: 'D / A / C' },
      { day: 4, title: 'Leticia → Santa Marta', description: 'Vuelo a Santa Marta.', hotel: 'Hotel Don Pepe', meals: 'D' },
      { day: 5, title: 'Tayrona', description: 'Parque Nacional Tayrona.', hotel: 'Ecohabs Tayrona', meals: 'D / A / C' },
      { day: 6, title: 'Tayrona', description: 'Día libre en el parque.', hotel: 'Ecohabs Tayrona', meals: 'D / A / C' },
      { day: 7, title: 'Tayrona → Palomino', description: 'Traslado a Palomino. Tubing en el río.', hotel: 'Aite Eco Lodge', meals: 'D / A' },
      { day: 8, title: 'Palomino → La Guajira', description: 'Ruta hacia la Guajira. Uribia, rancherías Wayuu.', hotel: 'Ranchería Wayuu', meals: 'D / A / C' },
      { day: 9, title: 'La Guajira', description: 'Cabo de la Vela, Pilón de Azúcar, Punta Gallinas.', hotel: 'Ranchería Wayuu', meals: 'D / A / C' },
      { day: 10, title: 'La Guajira → Riohacha', description: 'Regreso por la Guajira. Flamencos en Camarones.', hotel: 'Hotel Riohacha', meals: 'D / A' },
      { day: 11, title: 'Riohacha → Cartagena', description: 'Vuelo a Cartagena de Indias.', hotel: 'Hotel Quadrifolio', meals: 'D' },
      { day: 12, title: 'Cartagena', description: 'Tour por la ciudad amurallada.', hotel: 'Hotel Quadrifolio', meals: 'D / A' },
      { day: 13, title: 'Islas del Rosario', description: 'Excursión a las islas.', hotel: 'Hotel Quadrifolio', meals: 'D / A' },
      { day: 14, title: 'Cartagena libre', description: 'Día libre para explorar.', hotel: 'Hotel Quadrifolio', meals: 'D' },
      { day: 15, title: 'Salida', description: 'Traslado al aeropuerto.', meals: 'D' },
    ],
    hotels: [
      { name: 'Canaloa Ecoluxury Lodge', location: 'Amazonas', img: '/img/hotel-canaloa.jpg' },
      { name: 'Ecohabs Tayrona', location: 'Tayrona', img: '/img/hotel-tayrona.jpg' },
      { name: 'Hotel Quadrifolio', location: 'Cartagena', img: '/img/hotel-sofitel-cartagena.jpg' },
    ],
    includes: [
      'Vuelos nacionales según itinerario',
      'Todos los traslados terrestres',
      'Alojamiento en hoteles indicados',
      'Comidas según programa',
      'Guías locales especializados',
      'Actividades y excursiones indicadas',
      'Asistencia 24h',
    ],
    excludes: ['Vuelos internacionales', 'Tasas de aeropuerto', 'Gastos personales', 'Comidas no indicadas', 'Seguro de viaje', 'Propinas'],
  },
  {
    slug: 'secretos-del-sur',
    i18nKey: 'sur',
    heroImg: '/img/viaje-sur-caribe-hero.jpg',
    facts: { duration: '11 días', type: 'FIT', difficulty: 'Media', group: '2–8 pax', theme: 'Cultural' },
    price: { amount: '2.450 €', per: 'por persona', notes: 'hab. doble · sin vuelos internacionales' },
    highlights: ['Desierto de la Tatacoa', 'San Agustín: estatuas precolombinas', 'Popayán: la ciudad blanca', 'Haciendas cafeteras'],
    itinerary: [
      { day: 1, title: 'Llegada a Bogotá', description: 'Recepción y traslado al hotel.', hotel: 'Hotel La Opera', meals: 'C' },
      { day: 2, title: 'Bogotá', description: 'Tour por La Candelaria y Monserrate.', hotel: 'Hotel La Opera', meals: 'D / A' },
      { day: 3, title: 'Bogotá → Tatacoa', description: 'Vuelo a Neiva. Ruta al desierto de la Tatacoa.', hotel: 'Bethel Bio Luxury Hotel', meals: 'D / A' },
      { day: 4, title: 'Tatacoa → San Agustín', description: 'Observación de estrellas. Ruta a San Agustín.', hotel: 'Hotel Akawanka', meals: 'D / A' },
      { day: 5, title: 'San Agustín', description: 'Parque Arqueológico, estatuas precolombinas.', hotel: 'Hotel Akawanka', meals: 'D / A' },
      { day: 6, title: 'San Agustín → Popayán', description: 'Estrecho del Magdalena. Ruta a Popayán.', hotel: 'Hotel Dann Monasterio', meals: 'D / A' },
      { day: 7, title: 'Popayán', description: 'Tour por la ciudad blanca. Gastronomía local.', hotel: 'Hotel Dann Monasterio', meals: 'D / A' },
      { day: 8, title: 'Popayán → Eje Cafetero', description: 'Ruta al Eje Cafetero.', hotel: 'Hacienda Combia', meals: 'D / A / C' },
      { day: 9, title: 'Eje Cafetero', description: 'Tour del café, Valle del Cócora.', hotel: 'Hacienda Combia', meals: 'D / A' },
      { day: 10, title: 'Eje Cafetero → Cartagena', description: 'Vuelo a Cartagena.', hotel: 'Hotel en Cartagena', meals: 'D' },
      { day: 11, title: 'Salida', description: 'Traslado al aeropuerto.', meals: 'D' },
    ],
    hotels: [
      { name: 'Hotel La Opera', location: 'Bogotá', img: '/img/hotel-opera.jpg' },
      { name: 'Hotel Dann Monasterio', location: 'Popayán', img: '/img/hotel-dann-monasterio.jpg' },
      { name: 'Hacienda Combia', location: 'Eje Cafetero', img: '/img/hacienda-combia.jpg' },
    ],
    includes: ['Vuelos nacionales', 'Traslados terrestres', 'Alojamiento', 'Comidas según programa', 'Guías', 'Excursiones', 'Asistencia 24h'],
    excludes: ['Vuelos internacionales', 'Tasas', 'Gastos personales', 'Comidas no indicadas', 'Seguro', 'Propinas'],
  },
  {
    slug: 'aventura-en-el-norte',
    i18nKey: 'norte',
    heroImg: '/img/viaje-norte-hero.jpg',
    facts: { duration: '14 días', type: 'FIT', difficulty: 'Alta', group: '2–8 pax', theme: 'Aventura, Naturaleza' },
    price: { amount: '2.780 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['Ciudad Perdida: trekking de 4 días', 'Sierra Nevada y comunidades indígenas', 'Parque Nacional Tayrona', 'La Guajira y Cabo de la Vela'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Comidas según programa', 'Guías', 'Excursiones', 'Asistencia 24h'],
    excludes: ['Vuelos internacionales', 'Tasas', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'safari-en-los-llanos',
    i18nKey: 'llanos',
    heroImg: '/img/viaje-llanos-hero.jpg',
    facts: { duration: '7 días', type: 'FIT', difficulty: 'Baja', group: '2–6 pax', theme: 'Naturaleza, Fauna' },
    price: { amount: '1.890 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['Safari llanero en los llanos orientales', 'Avistamiento de fauna: capibaras, caimanes, anacondas', 'Cabalgatas y cultura vaquera', 'Atardeceres en la sabana infinita'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Pensión completa', 'Guías', 'Actividades'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'extension-a-las-islas',
    i18nKey: 'islas',
    heroImg: '/img/viaje-islas-hero.jpg',
    facts: { duration: '5 días', type: 'FIT', difficulty: 'Baja', group: '2+ pax', theme: 'Playa, Relax' },
    price: { amount: '1.280 €', per: 'por persona', notes: 'hab. doble' },
    highlights: ['San Andrés: playas de arena blanca', 'Providencia: paraíso del Caribe', 'Snorkeling en la barrera de coral', 'Cayos y vida marina'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Desayunos'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Comidas no incluidas', 'Seguro'],
  },
  {
    slug: 'extension-al-amazonas',
    i18nKey: 'amazonas',
    heroImg: '/img/viaje-amazonas-hero.jpg',
    facts: { duration: '5 días', type: 'FIT', difficulty: 'Media', group: '2–6 pax', theme: 'Naturaleza, Indígena' },
    price: { amount: '1.450 €', per: 'por persona', notes: 'hab. doble' },
    highlights: ['Selva amazónica primaria', 'Comunidades indígenas Ticuna', 'Delfines rosados', 'Victoria Regia y fauna silvestre'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelo Bogotá–Leticia–Bogotá', 'Traslados', 'Lodge en selva', 'Pensión completa', 'Guías indígenas'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'el-nido-del-condor',
    i18nKey: 'nido',
    heroImg: '/img/viaje-nido-condor-hero.jpg',
    facts: { duration: '12 días', type: 'Luxury', difficulty: 'Baja', group: '2–4 pax', theme: 'Luxury, Cultural' },
    price: { amount: '5.980 €', per: 'por persona', notes: 'hab. doble · todo incluido' },
    highlights: ['Alojamientos de lujo en todo el recorrido', 'Traslados en avioneta privada', 'Gastronomía de autor', 'Experiencias exclusivas y personalizadas'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales y avionetas privadas', 'Hoteles 5★ y lodges exclusivos', 'Pensión completa gourmet', 'Guía privado', 'Todas las actividades', 'Asistencia VIP 24h'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro premium', 'Propinas'],
  },
  {
    slug: 'avistamiento-de-ballenas',
    i18nKey: 'ballenas',
    heroImg: '/img/viaje-ballenas-hero.jpg',
    facts: { duration: '8 días', type: 'FIT', difficulty: 'Media', group: '2–8 pax', theme: 'Naturaleza, Pacífico' },
    price: { amount: '2.350 €', per: 'por persona', notes: 'hab. doble · jun–oct' },
    highlights: ['Avistamiento de ballenas jorobadas', 'Nuquí y la costa del Pacífico', 'Selva tropical del Chocó', 'Playas vírgenes y biodiversidad'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Lodge en Nuquí', 'Pensión completa', 'Excursiones de avistamiento', 'Guías'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'cano-cristales',
    i18nKey: 'cano',
    heroImg: '/img/viaje-cano-cristales-hero.jpg',
    facts: { duration: '4 días', type: 'FIT', difficulty: 'Media', group: '2–10 pax', theme: 'Naturaleza' },
    price: { amount: '980 €', per: 'por persona', notes: 'hab. doble · jun–nov' },
    highlights: ['El río de los cinco colores', 'Caño Cristales en la Serranía de la Macarena', 'Piscinas naturales multicolor', 'Fauna y flora única'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelo Bogotá–La Macarena–Bogotá', 'Alojamiento', 'Comidas', 'Guía local', 'Entradas al parque'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro'],
  },
  {
    slug: 'ciudades-miticas',
    i18nKey: 'ciudades',
    heroImg: '/img/viaje-ciudades-hero.jpg',
    facts: { duration: '10 días', type: 'FIT', difficulty: 'Baja', group: '2–8 pax', theme: 'Cultural, Historia' },
    price: { amount: '2.290 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['Bogotá: La Candelaria, Monserrate', 'Villa de Leyva y Barichara', 'Santa Cruz de Mompox', 'Cartagena de Indias'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Comidas según programa', 'Guías', 'Excursiones'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'de-bogota-a-cartagena',
    i18nKey: 'bogota',
    heroImg: '/img/viaje-bogota-hero.jpg',
    facts: { duration: '10 días', type: 'FIT', difficulty: 'Baja', group: '2–8 pax', theme: 'Cultural, Completo' },
    price: { amount: '2.180 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['Bogotá y Zipaquirá', 'Eje Cafetero', 'Santa Marta y Tayrona', 'Cartagena de Indias'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Comidas según programa', 'Guías', 'Excursiones'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'de-los-andes-al-caribe',
    i18nKey: 'andes',
    heroImg: '/img/viaje-andes-caribe-hero.jpg',
    facts: { duration: '16 días', type: 'FIT', difficulty: 'Media', group: '2–8 pax', theme: 'Completo' },
    price: { amount: '3.250 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['Bogotá y altiplano cundiboyacense', 'Eje Cafetero y Valle del Cócora', 'Costa Caribe: Tayrona, Santa Marta', 'Cartagena de Indias'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Comidas según programa', 'Guías', 'Excursiones', 'Asistencia 24h'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'del-sur-al-caribe',
    i18nKey: 'sur',
    heroImg: '/img/viaje-sur-caribe-hero.jpg',
    facts: { duration: '14 días', type: 'FIT', difficulty: 'Media', group: '2–8 pax', theme: 'Cultural, Naturaleza' },
    price: { amount: '2.890 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['San Agustín y Tatacoa', 'Popayán y Eje Cafetero', 'Costa Caribe', 'Cartagena de Indias'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Comidas según programa', 'Guías', 'Excursiones'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'la-guajira',
    i18nKey: 'guajira',
    heroImg: '/img/viaje-guajira-hero.jpg',
    facts: { duration: '5 días', type: 'FIT', difficulty: 'Alta', group: '2–8 pax', theme: 'Aventura, Indígena' },
    price: { amount: '1.180 €', per: 'por persona', notes: 'hab. doble' },
    highlights: ['Cabo de la Vela y Punta Gallinas', 'Comunidades Wayuu', 'Flamencos en Camarones', 'Desierto de la Guajira'],
    itinerary: [],
    hotels: [],
    includes: ['Traslados en 4x4', 'Alojamiento en rancherías', 'Pensión completa', 'Guía local Wayuu'],
    excludes: ['Vuelos', 'Gastos personales', 'Seguro', 'Propinas'],
  },
  {
    slug: 'misterios-indigenas',
    i18nKey: 'misterios',
    heroImg: '/img/viaje-norte-hero.jpg',
    facts: { duration: '12 días', type: 'FIT', difficulty: 'Alta', group: '4–10 pax', theme: 'Cultural, Aventura' },
    price: { amount: '2.950 €', per: 'por persona', notes: 'hab. doble · sin vuelos int.' },
    highlights: ['Ciudad Perdida: trekking ancestral', 'Sierra Nevada y pueblos Kogui', 'Tierradentro: tumbas hipogeas', 'San Agustín: estatuaria megalítica'],
    itinerary: [],
    hotels: [],
    includes: ['Vuelos nacionales', 'Traslados', 'Alojamiento', 'Comidas según programa', 'Guías especializados', 'Permisos indígenas'],
    excludes: ['Vuelos internacionales', 'Gastos personales', 'Seguro', 'Propinas'],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}

export function getAllTripSlugs(): string[] {
  return trips.map((t) => t.slug);
}
