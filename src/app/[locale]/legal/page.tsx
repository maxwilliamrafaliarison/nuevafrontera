import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Aviso Legal | Nueva Frontera Colombia',
};

export default function LegalPage() {
  return (
    <>
      <section className="page-hero" style={{ height: '35vh', minHeight: '250px' }}>
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/cta-bg.jpg')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <Breadcrumbs current="Legal" />
            <h1>Aviso Legal</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2>Aviso Legal</h2>
          <div className="divider divider--left"></div>
          <p>
            En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la
            Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se informa que el titular
            de este sitio web es Nueva Frontera Colombia S.A.S., con domicilio en CL 127 N° 60, Torre 3, Apt. 504,
            Bogotá 11-001, Colombia.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Política de Privacidad</h3>
          <p>
            Los datos personales que nos facilite a través de los formularios de este sitio web serán
            tratados por Nueva Frontera Colombia S.A.S. con la finalidad de gestionar sus consultas y
            solicitudes de información sobre nuestros servicios turísticos.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante
            los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a
            terceros salvo en los casos en que exista una obligación legal.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Política de Cookies</h3>
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia del usuario,
            realizar análisis de navegación y mostrar contenido personalizado. Al continuar navegando,
            acepta nuestra política de cookies.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Contacto</h3>
          <p>
            Para cualquier consulta relativa a estas políticas, puede contactarnos en:{' '}
            <a href="mailto:booking@nueva-frontera.com">booking@nueva-frontera.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
