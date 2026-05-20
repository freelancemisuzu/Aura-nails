import { useLang } from '../context/LanguageContext';

const text = {
  en: {
    para1: 'Aura Nails Tokyo is a sanctuary for those seeking premium nail care in a minimalist and tranquil environment. Our passion is to provide bespoke nail artistry that reflects your unique aura.',
    para2: [
      'We strive to make every visit a truly relaxing experience.',
      'Whether for work or daily life, we meticulously craft nails that make you shine in our private, peaceful studio.',
      'Experience a special moment of self-care and refinement.',
      'Reservations are accepted online and by phone.',
      'Please feel free to contact us.'
    ],
    years: 'Years Experience',
    clients: 'Happy Clients',
  },
  jp: {
    para1: 'Aura Nails Tokyoは、上質なネイルケアを求める方々のための特別な空間です。ミニマルで落ち着いた環境の中、あなただけのネイルアートをご提案します。',
    para2: [
      'すべてのご来店が、くつろぎの体験になるよう心がけています。',
      'お仕事や家事、どんなシーンでもあなたを輝かせるネイルを、プライベートな落ち着いた空間で丁寧に仕上げます。',
      '自分を整える、特別なひとときをお過ごしください。',
      '予約はオンラインとお電話から承っております。',
      'お気軽にお問い合わせください。'
    ],
    years: '年の経験',
    clients: '満足のお客様',
  },
};

export default function About() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section id="about" className="py-24 px-6 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl mb-6 tracking-wide">About Aura Nails</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.para1}</p>
            <div className="text-muted-foreground mb-8 leading-relaxed space-y-2">
              {t.para2.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              <a
                href="https://beauty.hotpepper.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-brown font-medium hover:underline tracking-wide cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{lang === 'jp' ? '→ オンラインで予約' : '→ Book Online'}</span>
              </a>
              <a
                href="tel:+81312345678"
                className="text-dark-brown font-medium hover:underline tracking-wide cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{lang === 'jp' ? '→ 電話で予約' : '→ Call to Book'}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden h-56 md:h-96 border border-border shadow-lg">
              <img 
                src="/gayane-khachatryan-aMnH1OgFmwM-unsplash.jpg" 
                alt="Nail Art Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-3xl overflow-hidden h-56 md:h-96 border border-border shadow-lg">
              <img 
                src="/danny-greenberg-LtbH3-yD5ms-unsplash.jpg" 
                alt="Salon Atmosphere" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
