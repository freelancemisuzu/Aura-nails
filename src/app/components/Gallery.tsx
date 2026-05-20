import { Instagram } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  '/gallery-pexels-8.jpg',
  '/gallery-pexels-1.jpg',
  '/gallery-pexels-7.jpg',
  '/gallery-pexels-2.jpg',
  '/gallery-pexels-9.jpg',
  '/gallery-pexels-3.jpg',
  '/gallery-pexels-6.jpg',
  '/gallery-pexels-4.jpg',
  '/gallery-pexels-5.jpg',
];

const text = {
  en: 'Follow us on Instagram',
  jp: 'Follow us on Instagram',
};

export default function Gallery() {
  const { lang } = useLang();
  
  return (
    <section id="gallery" className="py-24 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl text-center mb-16 tracking-wide font-cormorant italic font-semibold">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl overflow-hidden hover:scale-105 transition-transform"
            >
              <ImageWithFallback
                src={image}
                alt={`Nail art ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 hover:text-primary transition-all group text-center"
          >
            <span className="text-2xl tracking-[0.2em] uppercase font-light text-muted-foreground group-hover:text-primary transition-colors">
              {text[lang]}
            </span>
            <div className="w-16 h-16 rounded-full bg-secondary/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <Instagram className="w-8 h-8" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
