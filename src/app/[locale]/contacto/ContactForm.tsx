'use client';

import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');

  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="nombre">{t('form.name')}</label>
        <input type="text" id="nombre" name="nombre" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t('form.email')}</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">{t('form.phone')}</label>
        <input type="tel" id="telefono" name="telefono" />
      </div>
      <div className="form-group">
        <label htmlFor="asunto">{t('form.subject')}</label>
        <select id="asunto" name="asunto">
          <option value="viaje">Viaje a medida</option>
          <option value="mice">MICE / Incentivo</option>
          <option value="luxury">Luxury Travel</option>
          <option value="medida">Viaje a medida</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">{t('form.message')}</label>
        <textarea id="mensaje" name="mensaje" rows={5} required />
      </div>
      <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
        <input type="checkbox" id="privacidad" name="privacidad" required style={{ marginTop: '0.25rem' }} />
        <label htmlFor="privacidad" style={{ fontSize: '0.85rem' }}>
          {t('form.agree')}
        </label>
      </div>
      <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
        {t('form.submit')}
      </button>
    </form>
  );
}
