import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useLang } from '../context/LanguageContext';

const faqs = {
  en: [
    {
      question: "How long does a gel manicure last?",
      answer: "Our gel manicures typically last 2-3 weeks with proper care. We use premium products that ensure long-lasting shine and durability."
    },
    {
      question: "Can I bring my own designs?",
      answer: "Yes, absolutely! We welcome reference photos and will work with you to recreate or adapt the design to suit your style and nail shape."
    },
    {
      question: "Is it okay to bring children?",
      answer: "Yes, we are a child-friendly salon. However, as there are sharp tools and chemicals in the studio, we kindly ask that children remain supervised for their safety."
    },
    {
      question: "Can I request gel nail removal only?",
      answer: "Yes, we offer removal-only services. This includes professional removal to protect your natural nails, followed by shaping and moisturizing care."
    },
    {
      question: "Can I use credit cards or electronic money?",
      answer: "Yes, we accept all major credit cards, as well as various QR code and transportation electronic money payments (Suica, Pasmo, etc.)."
    },
    {
      question: "Can you fix cracked or broken nails?",
      answer: "Yes, we offer nail repair and reinforcement services. Whether it's a small crack or a broken tip, we can restore it to look natural and strong."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to other clients. Last-minute cancellations may incur a fee."
    }
  ],
  jp: [
    {
      question: "ジェルマニキュアはどのくらい持ちますか？",
      answer: "適切なケアをすれば、通常2〜3週間ほど美しい状態が続きます。高品質な製品を使用し、長持ちするツヤと耐久性をお届けします。"
    },
    {
      question: "デザインの持ち込みは可能ですか？",
      answer: "はい、もちろんです！ご希望の画像などをお持ちいただければ、お客様のスタイルや爪の形に合わせて再現・アレンジさせていただきます。"
    },
    {
      question: "子供を連れて行っても大丈夫ですか？",
      answer: "はい、お子様連れでも大歓迎です。店内には鋭利な道具や薬剤もございますので、安全のためお子様からは目を離さないようお願いいたします。"
    },
    {
      question: "ジェルネイルの「オフのみ」もお願いできますか？",
      answer: "はい、オフのみのメニューもございます。自爪を傷めないよう丁寧にオフし、形を整えて保湿ケアまで行います。"
    },
    {
      question: "クレジットカードや電子マネーは使えますか？",
      answer: "はい、各種クレジットカードのほか、QR決済や交通系電子マネー（Suica、PASMOなど）もご利用いただけます。"
    },
    {
      question: "爪に亀裂が入ったり、1本だけ折れたりしても直せますか？",
      answer: "はい、亀裂の補修（リペア）や、折れた部分の長さ出しも可能です。1本からでもお気軽にご相談ください。"
    },
    {
      question: "キャンセルポリシーはありますか？",
      answer: "キャンセルや日時変更は、ご予約の24時間前までにご連絡ください。直前のキャンセルはキャンセル料が発生する場合がございます。"
    }
  ],
};

const pageText = {
  en: { subtitle: 'Everything you need to know about our services' },
  jp: { subtitle: 'サービスに関するよくある質問をまとめました' },
};

export default function FAQ() {
  const { lang } = useLang();
  const t = pageText[lang];

  return (
    <section id="faq" className="py-16 px-4 md:py-24 md:px-6 bg-card/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-6xl text-center mb-4 tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground text-sm md:text-base mb-8 md:mb-16 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs[lang].map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-3xl px-4 md:px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="hover:no-underline py-4 md:py-6 text-sm md:text-base">
                <span className="text-left pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 md:pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
