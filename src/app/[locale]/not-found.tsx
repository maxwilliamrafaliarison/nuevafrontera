import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <>
      <section className="page-hero" style={{ height: '40vh', minHeight: '280px' }}>
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/hero-colombia.jpg')" }}
        />
        <div className="page-hero__content">
          <h1>404</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Página no encontrada</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>Esta página no existe</h2>
          <div className="divider"></div>
          <p>
            Lo sentimos, la página que busca no se ha encontrado.
            Es posible que haya sido movida o que la dirección sea incorrecta.
          </p>
          <Link href="/" className="btn btn--primary" style={{ marginTop: '2rem' }}>
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
