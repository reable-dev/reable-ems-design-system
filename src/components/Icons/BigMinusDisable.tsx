import React, { SVGProps } from 'react';

export default function BigMinusDisableSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="15.5" fill="#F8F8F8" stroke="#D5D5D5" />
      <path d="M14.3149 15.0681H18.3949V16.0881H14.3149V15.0681Z" fill="#909090" />
    </svg>
  );
}
