import React from 'react';
import type { BtnProps } from '@/types';

interface OutlineBtnProps extends BtnProps {
  href?: string;
  onClick?: () => void;
}

export const OutlineBtn = ({ text, href, onClick, className }: OutlineBtnProps) => {
  const baseClasses = `block w-full md:w-auto text-center border border-primary-pink rounded px-4 py-1.5 text-primary-pink font-semibold text-xs md:text-sm 2xl:text-md
                       hover:bg-primary-pink hover:text-white transition-colors duration-200
                       ${className || ''}`;

  if (href) {
    const isTelOrMail = href.startsWith('tel:') || href.startsWith('mailto:');

    if (isTelOrMail) {
      // Plain <a> for tel/mail links
      return (
        <a href={href} className={baseClasses}>
          {text}
        </a>
      );
    }

    // All other links open in new tab
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {text}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {text}
    </button>
  );
};
