import { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Navigation() {
  const { lang, toggleLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif tracking-wider font-semibold text-lg hover:text-primary transition-colors">AURA NAILS TOKYO</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-1 border border-border rounded-full text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
          >
            {lang === 'en' ? 'JP' : 'EN'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLang}
            className="px-2 py-1 border border-border rounded-full text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
          >
            {lang === 'en' ? 'JP' : 'EN'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-x-0 top-[60px] bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 md:hidden overflow-hidden ${
          isOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-primary transition-colors py-1"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-primary transition-colors py-1"
          >
            Services
          </a>
          <a 
            href="#gallery" 
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-primary transition-colors py-1"
          >
            Gallery
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-primary transition-colors py-1"
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-primary transition-colors py-1"
          >
            Contact
          </a>
          <div className="flex items-center gap-4 pt-2 border-t border-border/50">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}