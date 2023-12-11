import React, { SVGProps } from 'react';

const TempLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="4" transform="matrix(-1 0 0 1 20 0)" fill="#5E38F9" />
      <g filter="url(#filter0_b_131_911)">
        <circle cx="5" cy="5" r="5" transform="matrix(-1 0 0 1 15 5)" fill="#2AE840" />
      </g>
      <defs>
        <filter
          id="filter0_b_131_911"
          x="3.87701"
          y="3.87701"
          width="12.246"
          height="12.246"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.561497" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_131_911" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_131_911"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default TempLogo;
