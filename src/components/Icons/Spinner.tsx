import React from 'react';
import { styled } from 'styled-components';
import { SPIN_ANIMATION } from '../../styles/common.styles';

export default function SpinnerSVG() {
  return (
    <RotatingSVG
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20Z"
        fill="url(#paint0_angular_1331_1690)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_1331_1690"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 20) rotate(90) scale(20)"
        >
          <stop stop-color="#1874F6" />
          <stop offset="1" stop-color="#1874F6" stop-opacity="0" />
        </radialGradient>
      </defs>
    </RotatingSVG>
  );
}

const RotatingSVG = styled.svg`
  animation: ${SPIN_ANIMATION} 0.7s linear infinite;
  transform-origin: center;
`;
