import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useLang } from '../context/LanguageContext';

const servicesData = {
  en: [
    {
      title: 'One Color',
      description: 'Simple yet sophisticated single-color gel for a polished look',
      price: '¥6,000',
      duration: '60 min',
      image: '/pexels-monica-loov-2149792449-30794447.jpg',
      details: 'A premium single-color gel application that emphasizes the natural beauty of your hands. Includes meticulous dry care and shaping for a flawless, long-lasting finish.',
      benefits: ['Nail shaping & filing', 'Cuticle treatment', 'Hand massage', 'Polish of your choice']
    },
    {
      title: 'Gel Extensions',
      description: 'Long-lasting, natural-looking extensions for elegant nails',
      price: '¥12,000',
      duration: '90 min',
      image: '/de-aura-4aEkXAhkAVQ-unsplash.jpg',
      details: 'Premium gel extensions that look natural and last up to 3 weeks. Custom shaped and sized to your preference with a flawless finish.',
      benefits: ['Custom length & shape', 'Natural appearance', 'Lasts 2-3 weeks', 'Strengthens natural nails']
    },
    {
      title: 'Magnet Gel',
      description: 'Luxurious magnetic gel with a mesmerising three-dimensional finish',
      price: '¥7,000',
      duration: '60 min',
      image: '/caroline-badran-OIEU0eopPT4-unsplash.jpg',
      details: 'Our signature magnet gel creates a stunning 3D effect that catches the light beautifully. Long-lasting and deeply elegant.',
      benefits: ['3D magnetic effect', 'High-gloss finish', 'Lasts 2-3 weeks', 'Available in multiple shades']
    },
    {
      title: 'Nail Art',
      description: 'Custom designs tailored to your unique style and personality',
      price: '¥8,000+',
      duration: '60+ min',
      image: '/IMG_1253.jpg',
      details: 'Express your creativity with custom nail art designs. From minimalist accents to intricate patterns, our artists bring your vision to life.',
      benefits: ['Custom designs', 'Hand-painted details', 'Embellishments available', 'Seasonal collections']
    },
    {
      title: 'French Nail',
      description: 'A classic and elegant look with clean white tips',
      price: '¥8,000',
      duration: '75 min',
      image: '/nail images1.jpg',
      details: 'Our signature French manicure features a natural base with crisp, hand-painted white tips for a timeless, sophisticated aesthetic.',
      benefits: ['Timeless style', 'Hand-painted precision', 'Clean & elegant', 'Natural appearance']
    },
    {
      title: 'Removal',
      description: 'Professional and safe removal of gel nails',
      price: '¥3,000',
      duration: '30 min',
      image: '/pexels-aloevera-20805375.jpg',
      details: 'We use gentle techniques to remove your existing nail enhancements without damaging your natural nails, finishing with a nourishing oil treatment.',
      benefits: ['Nail health focused', 'Safe techniques', 'Includes nail shaping', 'Moisturizing treatment']
    },
    {
      title: 'Foot Gel',
      description: 'Long-lasting and vibrant gel color for your toes',
      price: '¥7,500',
      duration: '60 min',
      image: '/pexels-brandon-richardson-99820571-9468564.jpg',
      details: 'Perfect for any season, our foot gel service includes cuticle care and a high-gloss gel finish that stays perfect for weeks.',
      benefits: ['Long-lasting color', 'Includes cuticle care', 'Chip-resistant', 'Quick-dry finish']
    }
  ],
  jp: [
    {
      title: 'One Color',
      description: '',
      price: '¥6,000',
      duration: '60分',
      image: '/pexels-monica-loov-2149792449-30794447.jpg',
      details: '＊200色以上のカラーから１色お選び頂けます\n＊カラー調合可能です、１色追加につき＋500円になります\n＊甘皮ケア込みです',
      benefits: ['ネイルファイリング', '甘皮トリートメント', 'ハンドマッサージ', 'カラー選択']
    },
    {
      title: 'Gel Extensions',
      description: '',
      price: '¥12,000',
      duration: '90分',
      image: '/de-aura-4aEkXAhkAVQ-unsplash.jpg',
      details: '＊10本長さだしのコースです\n＊シンプルなデザインの中からお選び頂けます',
      benefits: ['オーダーメイドの長さ・形', '自然な仕上がり', '2〜3週間持続', '爪を補強']
    },
    {
      title: 'Magnet Gel',
      description: '',
      price: '¥7,000',
      duration: '60分',
      image: '/caroline-badran-OIEU0eopPT4-unsplash.jpg',
      details: '＊100色以上のカラーから１色お選び頂けます\n＊カラー調合可能です、１色追加につき＋500円になります\n＊甘皮ケア込みです',
      benefits: ['3Dマグネット効果', 'ハイグロス仕上げ', '2〜3週間持続', '豊富なカラー展開']
    },
    {
      title: 'Nail Art',
      description: '',
      price: '¥8,000〜',
      duration: '60分〜',
      image: '/IMG_1253.jpg',
      details: '＊デザインお持ち込み可能です\n＊ネイリストにデザインお任せ可能です\n＊大きなパーツは追加で別途料金をいただいております',
      benefits: ['カスタムデザイン', 'ハンドペイント', 'ストーン・パーツ対応', '季節限定デザイン']
    },
    {
      title: 'French Nail',
      description: '',
      price: '¥8,000',
      duration: '75分',
      image: '/nail images1.jpg',
      details: '＊100色以上のカラーから2色までお選び頂けます\n＊カラー追加は１色＋500円になります\n＊甘皮ケア込みです',
      benefits: ['タイムレスな魅力', 'ハンドペイントの精密さ', '清潔感のある仕上がり', '上品な美しさ']
    },
    {
      title: 'Removal',
      description: '',
      price: '¥3,000',
      duration: '30分',
      image: '/pexels-aloevera-20805375.jpg',
      details: '＊自爪を傷つけない、プロに取る丁寧なジェルオフのみのコースになります\n＊スカルプオフは＋1000になります\n＊甘皮ケア込みです',
      benefits: ['自爪の健康を重視', '安全なオフ技術', '爪の形を整える', '保湿ケア付き']
    },
    {
      title: 'Foot Gel',
      description: '',
      price: '¥7,500',
      duration: '60分',
      image: '/pexels-brandon-richardson-99820571-9468564.jpg',
      details: '＊200色以上のカラーから１色お選び頂けます\n＊カラー調合可能です、１色追加につき＋500円になります\n＊甘皮ケア込みです',
      benefits: ['鮮やかな発色', '甘皮ケア込み', '剥がれにくい', 'すぐ靴が履ける']
    }
  ],
};

const pageText = {
  en: {
    subtitle: '',
    viewAll: 'View All Services',
    dialogDesc: 'Explore our complete range of nail care and beauty services',
  },
  jp: {
    subtitle: '',
    viewAll: 'すべてのサービスを見る',
    dialogDesc: 'すべてのネイルケア・ビューティーサービスをご覧ください',
  },
};

export default function Services() {
  const { lang } = useLang();
  const services = servicesData[lang];
  const t = pageText[lang];

  return (
    <section id="services" className="py-24 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-6xl text-center tracking-wide font-cormorant italic font-semibold ${t.subtitle ? 'mb-4' : 'mb-16'}`}>Our Services</h2>
        {t.subtitle && (
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
          {services.slice(0, 4).map((service, index) => (
            <a
              key={index}
              href="https://beauty.hotpepper.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2 border border-border flex flex-col h-full overflow-hidden block cursor-pointer"
            >
              {service.image && (
                <div className="h-32 md:h-48 overflow-hidden border-b border-border/50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      service.title === 'Magnet Gel' 
                        ? 'scale-150 hover:scale-[1.65]' 
                        : service.title === 'Nail Art'
                        ? 'scale-110 hover:scale-120'
                        : 'hover:scale-105'
                    }`}
                  />
                </div>
              )}
              <div className="p-4 md:p-8 flex flex-col flex-1">
                <h3 className="mb-2 font-semibold text-sm md:text-lg" style={{ color: '#835C3B' }}>{service.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed flex-1">{service.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pt-3 md:pt-4 border-t border-border/50 mt-auto">
                  <span className="font-semibold text-sm md:text-[17px]" style={{ color: '#835C3B' }}>{service.price}</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-medium">{service.duration}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="px-6 py-2.5 rounded-full transition-all hover:scale-105 font-medium text-dark-brown border-2 border-dark-brown cursor-pointer text-sm"
                style={{ backgroundColor: '#F5E6A3' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EDD97A')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F5E6A3')}
              >
                {t.viewAll}
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[85vh] bg-background flex flex-col overflow-hidden">
              <DialogHeader className="pr-10">
                <DialogTitle className="text-2xl md:text-4xl tracking-wide mb-2">All Services</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {t.dialogDesc}
                </DialogDescription>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto mt-6 pr-2">
                <div className="grid grid-cols-1 gap-6">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="https://beauty.hotpepper.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-6 border-b border-border/50 last:border-0 hover:bg-card/30 transition-colors px-4 rounded-2xl cursor-pointer group"
                    >
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="mb-1 font-semibold" style={{ color: '#835C3B' }}>{service.title}</h3>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                            <div className="text-right flex-shrink-0 ml-4">
                              <p className="font-semibold text-[17px]" style={{ color: '#835C3B' }}>{service.price}</p>
                              <p className="text-sm text-muted-foreground">{service.duration}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed whitespace-pre-line">
                            {service.details}
                          </p>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                            <span className="text-xs font-medium text-primary group-hover:underline">
                              {lang === 'en' ? 'Book on Hotpepper →' : 'ホットペッパーで予約 →'}
                            </span>
                          </div>
                        </div>

                        {service.image && (
                          <div className="w-full md:w-48 h-48 md:h-32 rounded-2xl overflow-hidden border border-border shadow-md flex-shrink-0">
                            <img 
                              src={service.image} 
                              alt={service.title} 
                              className={`w-full h-full object-cover transition-transform duration-500 ${
                                service.title === 'Magnet Gel' 
                                  ? 'scale-150 hover:scale-[1.65]' 
                                  : service.title === 'Nail Art'
                                  ? 'scale-110 hover:scale-120'
                                  : 'hover:scale-105'
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}