import { useState } from 'react';
import SubpageLayout from '../components/SubpageLayout';

const images = [
  'https://via.placeholder.com/800x400?text=Wheels+Up+1',
  'https://via.placeholder.com/800x400?text=Wheels+Up+2',
  'https://via.placeholder.com/800x400?text=Wheels+Up+3',
];

export default function WheelsUpPage() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <SubpageLayout title="Wheels Up">
      <div className="carousel">
        <button
          className="carousel-button btn prev"
          aria-label="Previous screenshot"
          onClick={prev}
        >
          &#10094;
        </button>
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div className="carousel-slide" key={src}>
                <img src={src} alt={`Wheels Up screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-button btn next"
          aria-label="Next screenshot"
          onClick={next}
        >
          &#10095;
        </button>
      </div>
      <button type="button">Get App</button>
      <section>
        <h2>Ramp Loading Planner for Cargo &amp; ULD Management</h2>
        <p>
          <strong>Wheels Up</strong> is a ramp loading planner built for
          <strong>ramp workers</strong>, <strong>cargo handlers</strong>, and
          <strong>logistics teams</strong>. Streamline operations with an
          intuitive interface dedicated to efficient <strong>ULD management</strong>
          and cargo planning.
        </p>
        <ul>
          <li>Drag-and-drop ULDs into aircraft positions</li>
          <li>Persistent load plans that save automatically</li>
          <li>Detailed plane view for accurate loading</li>
          <li>Manage trains, tugs, and storage locations</li>
          <li>Handle and flag Dangerous Goods for compliance</li>
        </ul>
        <p>
          Perfect for teams who need reliable cargo coordination and fast ramp
          turnaround.
        </p>
      </section>
    </SubpageLayout>
  );
}

