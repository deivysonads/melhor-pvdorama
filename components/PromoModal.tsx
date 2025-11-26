import React from 'react';
import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Button from './Button';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-[#121212] border-2 border-brand-pink rounded-3xl p-6 md:p-8 max-w-md w-full shadow-[0_0_60px_rgba(255,44,158,0.3)] animate-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4 animate-bounce-slow">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
            Oferta Encerrada!
          </h2>
          <p className="text-gray-400 text-sm">
            As vagas para o plano de R$ 1,00 acabaram de esgotar.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-transparent rounded-2xl p-6 mb-6 border border-brand-pink/20">
          <p className="text-center text-gray-200 mb-4 text-sm leading-relaxed">
            Mas reservamos uma <strong>Super Oferta VIP</strong> exclusiva para você com todos os benefícios:
          </p>
          
          <div className="flex flex-col items-center justify-center mb-4 bg-black/40 rounded-lg p-3">
            <span className="text-gray-500 line-through text-sm">De R$ 27,00</span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-brand-pink font-bold">Por</span>
              <span className="text-4xl font-extrabold text-white">R$ 14,90</span>
            </div>
            <span className="text-[10px] text-brand-pink uppercase font-bold tracking-wider mt-1">Oferta Relâmpago</span>
          </div>

          <ul className="space-y-2.5">
             <li className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-pink mr-2 shrink-0" />
                Acesso VIP Vitalício (Sem mensalidades)
             </li>
             <li className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-pink mr-2 shrink-0" />
                Todos os 3500+ minisséries e doramas
             </li>
             <li className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-pink mr-2 shrink-0" />
                Assista em Celular, TV e Tablet
             </li>
          </ul>
        </div>

        <Button 
          href="https://pay.lowify.com.br/go.php?offer=9bmcxti" 
          fullWidth
          className="animate-pulse-slow shadow-xl"
        >
          QUERO APROVEITAR AGORA
        </Button>
        
        <p className="text-center text-[10px] text-gray-600 mt-4">
          Essa oferta especial expira em breve.
        </p>
      </div>
    </div>
  );
};

export default PromoModal;