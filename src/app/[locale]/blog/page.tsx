import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Nueva Frontera Colombia',
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero" style={{ height: '35vh', minHeight: '250px' }}>
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/hero-colombia.jpg')" }}
        />
        <div className="page-hero__content">
          <h1>Blog</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Próximamente</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>Próximamente</h2>
          <div className="divider"></div>
          <p>
            Estamos preparando contenido increíble sobre Colombia, sus destinos, su cultura y
            consejos de viaje. Vuelve pronto para descubrir nuestras historias.
          </p>
          <a href="/" className="btn btn--primary" style={{ marginTop: '2rem' }}>
            Volver al inicio
          </a>
        </div>
      </section>
    </>
  );
}
