import React, { SVGProps } from 'react';
import { styled } from 'styled-components';
import { ROTATE_ANIMATION } from '../../styles/common.styles';

export default function LoadingSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <RotatingSVG
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M18.9091 17.8325C17.4317 19.175 15.4073 20 13.1626 20C8.65685 20 5 16.64 5 12.5C5 8.36 8.65685 5 13.1626 5C15.391 5 17.4072 5.8175 18.8846 7.1525"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </RotatingSVG>
  );
}

const RotatingSVG = styled.svg`
  animation: ${ROTATE_ANIMATION} 0.7s linear infinite;
`;
