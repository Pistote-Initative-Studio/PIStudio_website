import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import background from '/assets/subpage-background.jpg';

interface SubpageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function SubpageLayout({ title, children }: SubpageLayoutProps) {
  const style: React.CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    padding: '1rem',
  };

  return (
    <div style={style}>
      <h1>{title}</h1>
      <div style={{ maxWidth: '600px' }}>{children}</div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
