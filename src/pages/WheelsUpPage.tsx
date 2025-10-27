import { useState } from 'react';
import SubpageLayout from '../components/SubpageLayout';

const images = [
  '/assets/main-graphic.png',
  '/assets/wheels-up-1.jpg',
  '/assets/wheels-up-2.jpg',
  '/assets/wheels-up-3.jpg',
  '/assets/wheels-up-4.jpg',
  '/assets/wheels-up-5.jpg',
  '/assets/wheels-up-6.jpg',
];

export default function WheelsUpPage() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <SubpageLayout title="Wheels Up — Aircraft Loading Planner">
      {/* Image carousel */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 16 }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 400ms ease',
            transform: `translateX(-${index * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Wheels Up screenshot ${i + 1}`}
              style={{ width: `${100 / images.length}%`, objectFit: 'cover', aspectRatio: '16/8' }}
              loading="lazy"
            />
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          style={navBtnStyle('left')}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          style={navBtnStyle('right')}
        >
          ›
        </button>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: '999px',
                border: 'none',
                background: i === index ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <section style={{ textAlign: 'left', marginTop: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Fast, clear aircraft load planning for ramp crews</h2>
        <p>
          Wheels Up is a purpose-built planner for air cargo ground teams. Drag and drop ULDs across
          Ball Deck, Train, Plane, and Storage views; mark Dangerous Goods (DG) with automatic
          red-and-white safety borders; and keep your whole shift in sync with state that persists
          between sessions.
        </p>
        <ul>
          <li>Drag-and-drop ULDs across Ball Deck, Trains, Plane, and Storage</li>
          <li>DG checkbox with confirmation prompts and checkered border styling</li>
          <li>Configurable planes, tugs, trains, and dolly counts</li>
          <li>Plane page with labeled slots (1L/1R … 9L/9R + A10)</li>
          <li>Inbound/Outbound and Main/Lower deck toggles</li>
          <li>Automatic daily reset of operational data; settings persist</li>
        </ul>
        <p>Built for rampers who need reliable cargo coordination and fast turnarounds.</p>
      </section>
    </SubpageLayout>
  );
}

/** Styles **/
function navBtnStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side]: 8,
    background: 'rgba(0,0,0,0.45)',
    color: 'white',
    border: 'none',
    width: 36,
    height: 36,
    borderRadius: '999px',
    cursor: 'pointer',
    fontSize: 22,
    lineHeight: '36px',
    textAlign: 'center',
  } as React.CSSProperties;
}
