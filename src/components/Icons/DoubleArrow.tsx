import React from 'react';
import { SVGCustomProps } from './types';

export default function DoubleArrowSVG(props: SVGCustomProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...props}
    >
      <g transform={props.rotate ? `rotate(${props.rotate} 12 12)` : ''}>
        <path
          d="M11.56 7.69493L7.26999 11.9849L7.27998 12.0049L11.57 16.2949C11.96 16.6849 11.96 17.3149 11.57 17.7049C11.37 17.8949 11.12 17.9949 10.86 17.9949C10.6 17.9949 10.35 17.9049 10.15 17.7049L5.14999 12.7049C4.95998 12.5049 4.85999 12.2549 4.85999 11.9949C4.85999 11.7349 4.94999 11.4849 5.14999 11.2849L10.15 6.28493C10.54 5.89493 11.17 5.89493 11.56 6.28493C11.95 6.67493 11.95 7.30494 11.56 7.69493Z"
          fill={props.color || '#222222'}
        />
        <path
          d="M16.29 7.69493L12 11.9849L12.01 12.0049L16.3 16.2949C16.69 16.6849 16.69 17.3149 16.3 17.7049C16.1 17.8949 15.85 17.9949 15.59 17.9949C15.33 17.9949 15.08 17.9049 14.88 17.7049L9.87997 12.7049C9.68996 12.5049 9.58997 12.2549 9.58997 11.9949C9.58997 11.7349 9.67997 11.4849 9.87997 11.2849L14.88 6.28493C15.27 5.89493 15.9 5.89493 16.29 6.28493C16.68 6.67493 16.68 7.30494 16.29 7.69493Z"
          fill={props.color || '#222222'}
        />
      </g>
    </svg>
  );
}
