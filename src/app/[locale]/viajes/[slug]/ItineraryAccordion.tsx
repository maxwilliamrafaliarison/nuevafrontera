'use client';

import { useState } from 'react';
import type { TripDay } from '@/data/trips';

export default function ItineraryAccordion({
  days,
  dayLabel,
}: {
  days: TripDay[];
  dayLabel: string;
}) {
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <div className="itinerary">
      {days.map((day, i) => (
        <div key={i} className="itinerary__day" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <button
            className="itinerary__header"
            onClick={() => setOpenDay(openDay === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
            }}
          >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
              <span className="itinerary__day-label" style={{ color: 'var(--color-accent)', fontWeight: 600, minWidth: '3.5rem' }}>
                {dayLabel} {day.day}
              </span>
              <span className="itinerary__day-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem' }}>
                {day.title}
              </span>
            </div>
            <span className="itinerary__toggle" style={{ fontSize: '1.5rem', color: 'var(--color-accent)', transition: 'transform 0.3s' }}>
              {openDay === i ? '−' : '+'}
            </span>
          </button>
          {openDay === i && (
            <div className="itinerary__content" style={{ padding: '0 0 1.5rem 4.5rem' }}>
              <div className="itinerary__body">
                <p>{day.description}</p>
                {day.hotel && (
                  <div className="hotel" style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-light, #666)' }}>
                    🏨 {day.hotel}
                  </div>
                )}
                {day.meals && (
                  <div className="meals" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                    {day.meals.split(' / ').map((meal, mi) => (
                      <span key={mi} style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}>
                        {meal}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
