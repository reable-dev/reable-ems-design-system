import React from 'react';
import { SVGCustomProps } from './types';

export default function ChartSVG({ $filled, ...rest }: SVGCustomProps) {
  return (
    <svg
      width="38"
      height="36"
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M2 0V34H38" stroke="#909090" strokeWidth="3" fill={rest.color || '#222'} />
      <path
        d="M7 21L18 12.5L24.5 19.5L36 8"
        stroke="#909090"
        strokeWidth="3"
        fill={rest.color || '#222'}
      />
    </svg>
  );
}
