import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#ff2c9e] to-[#c42180] text-white shadow-[0_4px_20px_rgba(255,44,158,0.4)] hover:shadow-[0_6px_25px_rgba(255,44,158,0.6)]",
    secondary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;