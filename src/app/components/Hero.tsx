import { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';

const text = {
  en: {
    tagline: 'Elevate your essence with bespoke nail artistry',
    book: 'Book Appointment',
  },
  jp: {
    tagline: 'Nail art crafted to bring out your unique individuality',
    book: 'ご予約はこちら',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = text[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[55vh] md:h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        {...({ "webkit-playsinline": "true" } as any)}
        poster="/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-white/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40 z-10" />

      <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-6 pb-16 md:pb-32">
        <h1 className="text-5xl md:text-[90px] leading-[0.85] tracking-normal mb-6 md:mb-8 font-cormorant text-dark-brown drop-shadow-sm flex flex-col items-center justify-center italic font-semibold">
          <span>Aura</span>
          <span className="mt-1">Nails</span>
          <span className="mt-2 text-3xl md:text-[60px]">Tokyo</span>
        </h1>
        <p className="text-sm md:text-lg text-dark-brown max-w-xl mb-8 md:mb-10 drop-shadow-sm font-cormorant italic tracking-wide px-4">
          {t.tagline}
        </p>
        <a
          href="https://beauty.hotpepper.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-3 rounded-full transition-all hover:scale-105 font-medium text-dark-brown inline-block border-2 border-dark-brown ${lang === 'jp' ? 'text-xs' : 'text-sm'}`}
          style={{ backgroundColor: '#F5E6A3' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EDD97A')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F5E6A3')}
        >
          {t.book}
        </a>
      </div>
    </section>
  );
}
