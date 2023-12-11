import React from 'react';
import { SVGCustomProps } from './types';

export default function MinusRoundSVG({ $filled, ...rest }: SVGCustomProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...rest}
    >
      {$filled ? (
        <path
          d="M12.1799 1C6.10993 1 1.17993 5.93 1.17993 12C1.17993 18.07 6.10993 23 12.1799 23C18.2499 23 23.1799 18.07 23.1799 12C23.1799 5.93 18.2499 1 12.1799 1ZM7.17993 12C7.17993 11.45 7.62993 11 8.17993 11H16.1799C16.7299 11 17.1799 11.45 17.1799 12C17.1799 12.55 16.7299 13 16.1799 13H8.17993C7.62993 13 7.17993 12.55 7.17993 12Z"
          fill={rest.color || '#222222'}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12C1 5.93 5.93 1 12 1C18.07 1 23 5.93 23 12C23 18.07 18.07 23 12 23C5.93 23 1 18.07 1 12ZM3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C7.04 3 3 7.04 3 12ZM7 12C7 11.45 7.45 11 8 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13H8C7.45 13 7 12.55 7 12Z"
          fill={rest.color || '#222222'}
        />
      )}
    </svg>
  );
}
