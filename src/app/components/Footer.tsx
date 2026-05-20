import { Instagram, Facebook } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const text = {
  en: {
    tagline: 'Bespoke nail artistry in the heart of Minami-Aoyama, Tokyo.',
    book: 'Book Now',
    nav: 'Navigation',
    follow: 'Follow Us',
    copyright: '© 2026 Aura Nails Tokyo. All rights reserved.',
  },
  jp: {
    tagline: '南青山の中心で、あなただけのネイルアートを。',
    book: 'ご予約はこちら',
    nav: 'Navigation',
    follow: 'Follow Us',
    copyright: '© 2026 Aura Nails Tokyo. All rights reserved.',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <footer className="bg-card border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl tracking-[0.3em] uppercase mb-4">AURA NAILS TOKYO</div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              {t.tagline}
            </p>
            <a
              href="https://beauty.hotpepper.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-full font-medium text-dark-brown transition-all hover:scale-105 inline-block text-center border-2 border-dark-brown ${lang === 'jp' ? 'text-xs' : 'text-sm'}`}
              style={{ backgroundColor: '#F5E6A3' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EDD97A')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F5E6A3')}
            >
              {t.book}
            </a>
          </div>

          {/* Vertical Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{t.nav}</h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-sm hover:text-primary transition-colors">Gallery</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{t.follow}</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground tracking-wide">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
