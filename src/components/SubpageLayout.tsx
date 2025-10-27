import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import background from '/assets/subpage-background.png';
import Footer from './Footer';

interface SubpageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function SubpageLayout({ title, children }: SubpageLayoutProps) {
  const wrapperStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    gap: '1.25rem',
    textAlign: 'center',
    color: '#ffffff',
    textShadow: '0 2px 6px rgba(0,0,0,0.4)',
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(0,0,0,0.4)',
    borderRadius: '16px',
    padding: '1.5rem',
    maxWidth: '900px',
    width: '100%',
    backdropFilter: 'blur(3px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
  };

  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: 0 }}>{title}</h1>
        <div style={cardStyle}>{children}</div>
        <Link to="/" style={{ color: 'white', textDecoration: 'underline', marginTop: '0.75rem' }}>
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
