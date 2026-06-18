import { useEffect, useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Evidence from './components/Evidence';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  // Scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Nav scroll effect
  const handleScroll = useCallback(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    // Set scroll-y CSS variable on document root for parallax scrolling
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set --scroll-y
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Global mouse tracker for glow effects
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Set CSS variables for mouse position on the document root
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Header />
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}>
        <Hero />
        <Services />
        <About />
        <Evidence />
        <Products />
        <Contact />
      </main>
      <Footer />

      {/* Botón provisional para cambiar al diseño viejo */}
      <a
        href="/index-viejo.html"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          backgroundColor: '#ff4b4b',
          color: '#fff',
          padding: '10px 15px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Ver Sitio A
      </a>
    </>
  );
}

export default App;
