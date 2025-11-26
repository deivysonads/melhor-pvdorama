import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Button from './components/Button';
import Accordion from './components/Accordion';
import PromoModal from './components/PromoModal';
import { Check } from 'lucide-react';
import { 
  IconCheck, 
  IconZap, 
  IconPlay, 
  IconMonitor, 
  IconShield
} from './components/Icons';
import { FaqItem } from './types';

const App: React.FC = () => {
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  
  const featuresList = [
    {
      icon: <IconPlay className="w-8 h-8 text-white" />,
      title: "+ de 3500 minisséries e doramas",
      desc: "Catálogo completo com milhares de títulos dos melhores apps"
    },
    {
      icon: <IconCheck className="w-8 h-8 text-white" />,
      title: "Conteúdo Premium",
      desc: "Séries do My Drama, Reelshort, Dramashort, Shortdrama, Dramaware, Dramabox, Dorama e muito mais.",
      isList: true
    },
    {
      icon: <IconMonitor className="w-8 h-8 text-white" />,
      title: "Multi-dispositivo",
      desc: "Assista em celular, TV, tablet ou computador"
    },
    {
      icon: <IconZap className="w-8 h-8 text-white" />,
      title: "Sem Limitações",
      desc: "Sem anúncios, sem travamentos, qualidade top"
    }
  ];

  const contentProviders = [
    "Séries do My Drama",
    "Títulos do Reelshort",
    "Doramas do Dramashort",
    "Episódios do Shortdrama",
    "Conteúdo do Dramaware",
    "Séries do Dramabox",
    "Doramas do Dorama",
    "Minisséries Premium"
  ];

  const testimonials = [
    "https://zap1.123entrou.com/images/testimonial-4.jpeg",
    "https://zap1.123entrou.com/images/testimonial-5.jpeg",
    "https://zap1.123entrou.com/images/testimonial-2.jpeg"
  ];

  const faqItems: FaqItem[] = [
    {
      question: "Como faço pra assinar?",
      answer: "Basta escolher o plano ideal para você (Básico ou VIP) e clicar no botão 'Quero Meu Acesso'. Você será direcionado para uma página de pagamento segura."
    },
    {
      question: "É mesmo vitalício?",
      answer: "Sim! O plano VIP oferece acesso vitalício. Você paga uma única vez e tem acesso para sempre, sem mensalidades."
    },
    {
      question: "Tem todas as séries dos apps mesmo?",
      answer: "Sim, reunimos os catálogos dos principais aplicativos de doramas e minisséries em um só lugar, com atualizações constantes."
    },
    {
      question: "Posso assistir em qualquer dispositivo?",
      answer: "Com certeza! Nossa plataforma é compatível com celulares (Android e iOS), tablets, computadores e Smart TVs."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos uma garantia incondicional de 7 dias. Se você não gostar por qualquer motivo, devolvemos 100% do seu dinheiro sem burocracia."
    }
  ];

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const MarqueeText = () => (
    <>
      <span className="mx-4 font-black uppercase tracking-widest text-sm md:text-base">⚠️ ( SUPER BLACK FRIDAY ) ACABA HOJE!</span>
      <span className="mx-4 font-black uppercase tracking-widest text-sm md:text-base">⚠️ ( SUPER BLACK FRIDAY ) ACABA HOJE!</span>
      <span className="mx-4 font-black uppercase tracking-widest text-sm md:text-base">⚠️ ( SUPER BLACK FRIDAY ) ACABA HOJE!</span>
      <span className="mx-4 font-black uppercase tracking-widest text-sm md:text-base">⚠️ ( SUPER BLACK FRIDAY ) ACABA HOJE!</span>
      <span className="mx-4 font-black uppercase tracking-widest text-sm md:text-base">⚠️ ( SUPER BLACK FRIDAY ) ACABA HOJE!</span>
      <span className="mx-4 font-black uppercase tracking-widest text-sm md:text-base">⚠️ ( SUPER BLACK FRIDAY ) ACABA HOJE!</span>
    </>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      
      {/* Top Banner Marquee */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-[#ff2c9e] to-red-600 text-white overflow-hidden py-2.5 shadow-lg border-b border-white/10">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          <div className="flex w-full justify-around">
            <MarqueeText />
          </div>
          <div className="flex w-full justify-around">
            <MarqueeText />
          </div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-pink/20 to-transparent opacity-30 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 md:pt-32 md:pb-24 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-pink-200 drop-shadow-sm">
          Liberado agora: <br/>
          <span className="text-brand-pink">Assinatura VIP</span> para Fãs de <br/>
          Minisséries e Doramas!
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Tenha acesso a todos os episódios dos melhores apps por apenas <strong className="text-white bg-red-600 px-2 py-0.5 rounded text-base align-middle ml-1">R$ 1</strong>
        </p>

        <div className="mb-10">
          <VideoPlayer />
        </div>

        <div className="flex justify-center animate-bounce-slow">
          <Button onClick={scrollToPricing} className="min-w-[280px] shadow-[0_0_40px_rgba(255,44,158,0.5)]">
            Quero Meu Acesso ↓
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-pink">O Que Você Vai Receber</h2>
            <p className="text-gray-400 text-lg">Acesso completo a todo conteúdo premium, sem limites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresList.map((feature, idx) => (
              <div key={idx} className={`p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-brand-pink/30 transition-all duration-300 ${feature.isList ? 'md:row-span-2' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.desc}</p>
                
                {feature.isList && (
                  <ul className="space-y-3">
                    {contentProviders.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm md:text-base">
                        <span className="w-5 h-5 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mr-3 text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              O Que Dizem Nossos <br/>
              <span className="text-brand-pink">Assinantes VIP</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {testimonials.map((src, i) => (
              <div key={i} className="relative group w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform hover:-translate-y-2">
                <img 
                  src={src} 
                  alt={`Depoimento ${i+1}`} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-[#050505] relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Basic Plan */}
            <div className="bg-[#121212] rounded-3xl p-8 border border-white/10 flex flex-col h-full relative group hover:border-white/20 transition-all">
              <div className="mb-6">
                <h3 className="text-gray-400 font-bold tracking-wider text-sm uppercase mb-2">Plano Básico</h3>
                <div className="flex items-baseline gap-3">
                  <div className="flex items-baseline text-gray-500 line-through decoration-red-500/50 text-xl">
                    <span>R$ 10,00</span>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-white">R$ 1</span>
                  <span className="text-2xl text-gray-500 font-bold">,00</span>
                </div>
                <p className="text-red-400 font-semibold text-sm mt-2 flex items-center gap-2">
                  <IconZap className="w-4 h-4 fill-current" />
                  OFERTA BLACK FRIDAY
                </p>
                <p className="text-gray-500 text-sm mt-1">(Pagamento único)</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Acesso a mais de 3500 minisséries e doramas",
                  "Todos os episódios liberados dos melhores apps",
                  "Acesso imediato"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <IconCheck className="w-5 h-5 text-gray-500 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="secondary" 
                fullWidth 
                className="hover:bg-brand-pink hover:border-brand-pink hover:text-white transition-colors"
                onClick={() => setIsPromoModalOpen(true)}
              >
                Quero o Plano Básico
              </Button>
            </div>

            {/* VIP Plan */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-brand-pink flex flex-col h-full relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(255,44,158,0.15)]">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-pink to-brand-purple text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                MAIS POPULAR 🔥
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-brand-pink font-bold tracking-wider text-sm uppercase mb-2">Plano VIP</h3>
                <div className="flex items-baseline">
                  <span className="text-6xl font-extrabold text-white">R$ 27</span>
                  <span className="text-3xl text-brand-pink font-bold">,00</span>
                </div>
                <p className="text-pink-200/60 text-sm mt-2 font-medium">Acesso VIP Vitalício</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Acesso a mais de 3500 minisséries e doramas",
                  "Todos os episódios liberados dos melhores apps",
                  "Acesso imediato multi-dispositivo",
                  "Acesso VIP Vitalício",
                  "Lançamentos diários automáticos",
                  "Suporte VIP prioritário 24/7"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-pink flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="primary" 
                fullWidth
                href="https://pay.lowify.com.br/checkout?product_id=MSLeQo"
                className="animate-pulse-slow"
              >
                Quero Garantir Meu Acesso VIP
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4 bg-gradient-to-t from-black via-[#0f0f0f] to-[#050505]">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/5 rounded-3xl p-10 backdrop-blur-md">
          <div className="w-20 h-20 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <IconShield className="w-10 h-10 text-brand-pink" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-brand-pink">Garantia de 7 Dias</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Se você não ficar 100% satisfeito com o acesso, devolvemos seu dinheiro integralmente em até 7 dias após a compra.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Check className="w-6 h-6"/>, text: "Sem burocracia" },
              { icon: <Check className="w-6 h-6"/>, text: "Devolução imediata" },
              { icon: <Check className="w-6 h-6"/>, text: "Sem perguntas" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-black/40 rounded-xl">
                <div className="w-10 h-10 rounded-full border-2 border-brand-pink flex items-center justify-center text-brand-pink mb-3">
                  {item.icon}
                </div>
                <span className="text-gray-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-brand-pink">Perguntas Frequentes</h2>
        <div className="space-y-2 bg-white/5 p-6 rounded-3xl border border-white/5">
          {faqItems.map((item, i) => (
            <Accordion key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm bg-black border-t border-white/5">
        <p>© 2025 Hub Filmes. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center gap-4 opacity-50">
          <span>Termos de Uso</span>
          <span>Privacidade</span>
        </div>
      </footer>
      
      {/* Popups */}
      <PromoModal isOpen={isPromoModalOpen} onClose={() => setIsPromoModalOpen(false)} />
      
    </div>
  );
};

export default App;