import React, { useState } from 'react';
import { IconChevronDown } from './Icons';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-white/90">{question}</span>
        <IconChevronDown
          className={`w-5 h-5 text-brand-pink transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;