import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const text = {
  en: {
    address: ['2-14-7 Minami-Aoyama', 'Minato-ku, Tokyo 107-0062'],
    access: '7-minute walk from Omotesando Station Exit B5',
    phone: '+81 3-1234-5678',
    email: 'info@auranails.tokyo',
    hours: ['Mon-Fri 10:00 - 20:00', 'Sat & Sun 10:00 - 20:00'],
    closed: '',
  },
  jp: {
    address: ['〒107-0062', '東京都港区南青山2-14-7'],
    access: '表参道駅B5出口より徒歩7分',
    phone: '+81 3-1234-5678',
    email: 'info@auranails.tokyo',
    hours: ['Mon-Fri 10:00 - 20:00', 'Sat & Sun 10:00 - 20:00'],
    closed: '',
  },
};

export default function Contact() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section id="contact" className="py-24 px-6 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl text-center mb-16 tracking-wide">Visit Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 lg:pl-32">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Location</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2-14-7+Minami-Aoyama+Minato+City+Tokyo+107-0062+Japan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors block leading-relaxed"
                >
                  {t.address[0]}<br />{t.address[1]}
                </a>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-medium">
                  {t.access}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Phone</h3>
                <a
                  href={`tel:${t.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors block"
                >
                  {t.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Email</h3>
                <p className="text-muted-foreground">{t.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  {t.hours[0]}<br />
                  {t.hours[1]}
                  {t.closed && (
                    <>
                      <br />
                      <span className="text-xs italic">{t.closed}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="h-[350px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-dark-brown shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=2-14-7+Minami-Aoyama+Minato+City+Tokyo+107-0062+Japan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-1000"
              ></iframe>
            </div>
            <div className="text-center space-y-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2-14-7+Minami-Aoyama+Minato+City+Tokyo+107-0062+Japan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-sm rounded-full border-2 border-dark-brown text-dark-brown font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#F5E6A3' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EDD97A')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F5E6A3')}
              >
                {lang === 'en' ? 'Get Directions →' : 'ルート検索 →'}
              </a>
              <p className="text-sm text-muted-foreground font-medium">
                {t.access}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
