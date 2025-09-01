import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Wheels Up',
    image: '/assets/wheels-up.png',
    description: 'Aircraft loading planner',
    path: '/wheelsup',
  },
  {
    title: 'Inventory Tracker',
    image: '/assets/inventory-tracker.png',
    description: 'Track and manage office supplies',
    path: '/inventory-tracker',
  },
  {
    title: 'Budget Balanced',
    image: '/assets/budget-balanced.png',
    description: 'Personal budgeting app',
    path: '/budget-balanced',
  },
  {
    title: 'Marriage Managed',
    image: '/assets/marriage-managed.png',
    description: 'Wedding planning assistant',
    path: '/marriage-managed',
  },
  {
    title: 'US Business Directory',
    image: '/assets/business-directory.png',
    description: 'Private directory for sourcing',
    path: '/business-directory',
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + projects.length) % projects.length);
  const next = () => setIndex((index + 1) % projects.length);

  return (
    <div className="carousel">
      <button className="carousel-button btn prev" aria-label="Previous project" onClick={prev}>
        &#10094;
      </button>
      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project) => (
            <div className="carousel-slide" key={project.title}>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.path}>
                <button type="button">Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button btn next" aria-label="Next project" onClick={next}>
        &#10095;
      </button>
    </div>
  );
}
