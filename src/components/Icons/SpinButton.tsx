import React, { SVGProps } from 'react';

export default function SpinButtonSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        d="M13.6668 7.00004C13.6668 10.6819 10.6821 13.6667 7.00016 13.6667C3.31826 13.6667 0.333496 10.6819 0.333496 7.00004C0.333496 3.31814 3.31826 0.333374 7.00016 0.333374C10.6821 0.333374 13.6668 3.31814 13.6668 7.00004ZM1.66683 7.00004C1.66683 9.94556 4.05464 12.3334 7.00016 12.3334C9.94568 12.3334 12.3335 9.94556 12.3335 7.00004C12.3335 4.05452 9.94568 1.66671 7.00016 1.66671C4.05464 1.66671 1.66683 4.05452 1.66683 7.00004Z"
        fill="url(#paint0_angular_169_420)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_169_420"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.00016 7.00004) rotate(90) scale(6.66667)"
        >
          <stop stop-color="#909090" />
          <stop offset="1" stop-color="#909090" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
