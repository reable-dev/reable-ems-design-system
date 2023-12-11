import React from 'react';
import { SVGCustomProps } from './types';

export default function CheckBoxSVG({ $filled, ...rest }: SVGCustomProps) {
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
          d="M18.1701 3.5H6.17004C4.78933 3.5 3.67004 4.61929 3.67004 6V18C3.67004 19.3807 4.78933 20.5 6.17004 20.5H18.1701C19.5508 20.5 20.6701 19.3807 20.6701 18V6C20.6701 4.61929 19.5508 3.5 18.1701 3.5Z"
          fill={rest.color || '#222222'}
        />
      ) : (
        <path
          d="M18 3.27002H6C4.35 3.27002 3 4.62002 3 6.27002V18.27C3 19.92 4.35 21.27 6 21.27H18C19.65 21.27 21 19.92 21 18.27V6.27002C21 4.62002 19.65 3.27002 18 3.27002ZM19 18.27C19 18.82 18.55 19.27 18 19.27H6C5.45 19.27 5 18.82 5 18.27V6.27002C5 5.72002 5.45 5.27002 6 5.27002H18C18.55 5.27002 19 5.72002 19 6.27002V18.27Z"
          fill={rest.color || '#222222'}
        />
      )}
    </svg>
  );
}
