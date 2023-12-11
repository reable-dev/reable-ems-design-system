import React, { SVGProps } from 'react';

export default function ArrowSVG(props: SVGProps<SVGSVGElement>) {
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
          d="M9.40997 11.9925L14.7 6.7025C15.09 6.3125 15.09 5.6825 14.7 5.2925C14.31 4.9025 13.68 4.9025 13.29 5.2925L7.28998 11.2925C7.08998 11.4925 7 11.7425 7 12.0025C7 12.2625 7.09998 12.5125 7.28998 12.7125L13.29 18.7125C13.49 18.9125 13.74 19.0025 14 19.0025C14.26 19.0025 14.51 18.9025 14.71 18.7125C15.1 18.3225 15.1 17.6925 14.71 17.3025L9.41998 12.0125L9.40997 11.9925Z"
          fill={props.color || '#222222'}
        />
      </g>
    </svg>
  );
}
