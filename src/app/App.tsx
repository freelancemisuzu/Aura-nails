import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <main 
          className="relative"
          style={{ 
            backgroundColor: '#FBFFB9',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='66' height='66' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.41' fill='%23FDD5FE' cx='45' cy='45' r='12'/%3E%3Cg fill='%23FACDFF' fill-opacity='0.41'%3E%3Ccircle cx='0' cy='90' r='12'/%3E%3Ccircle cx='90' cy='90' r='12'/%3E%3Ccircle cx='90' cy='0' r='12'/%3E%3Ccircle cx='0' cy='0' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '66px', 
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <About />
          <Services />
          <Gallery />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}