import React, { useState } from 'react';
import theme from '../../styles/theme.styles';

import { SVGCustomProps } from './types';

export default function CloseRoundSVG({ $filled, disabled, ...rest }: SVGCustomProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fillColor = disabled
    ? theme.color.gray400
    : isHovered
    ? theme.color.gray500
    : rest.color || theme.color.gray600;

  const iconPath = $filled ? (
    <path
      d="M12.1799 1C6.10993 1 1.17993 5.93 1.17993 12C1.17993 18.07 6.10993 23 12.1799 23C18.2499 23 23.1799 18.07 23.1799 12C23.1799 5.93 18.2499 1 12.1799 1ZM16.89 15.29C17.28 15.68 17.28 16.31 16.89 16.7C16.69 16.9 16.4399 16.99 16.1799 16.99C15.9199 16.99 15.6699 16.89 15.4699 16.7L12.1799 13.41L8.88995 16.7C8.68995 16.9 8.43993 16.99 8.17993 16.99C7.91993 16.99 7.66991 16.89 7.46991 16.7C7.07991 16.31 7.07991 15.68 7.46991 15.29L10.7599 12L7.46991 8.71C7.07991 8.32 7.07991 7.69 7.46991 7.3C7.85991 6.91 8.48994 6.91 8.87994 7.3L12.1699 10.59L15.4599 7.3C15.8499 6.91 16.4799 6.91 16.8699 7.3C17.2599 7.69 17.2599 8.32 16.8699 8.71L13.5799 12L16.8699 15.29H16.89Z"
      fill={fillColor}
    />
  ) : (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.93 5.93 1 12 1C18.07 1 23 5.93 23 12C23 18.07 18.07 23 12 23C5.93 23 1 18.07 1 12ZM3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C7.04 3 3 7.04 3 12ZM15.3 7.29006C15.69 6.90006 16.32 6.90006 16.71 7.29006H16.73C17.12 7.68006 17.12 8.31006 16.73 8.70006L13.44 11.9901L16.73 15.2801C17.12 15.6701 17.12 16.3001 16.73 16.6901C16.53 16.8801 16.28 16.9801 16.02 16.9801C15.76 16.9801 15.51 16.8901 15.31 16.6901L12.02 13.4001L8.72995 16.6901C8.52995 16.8801 8.27996 16.9801 8.01996 16.9801C7.75996 16.9801 7.50996 16.8901 7.30996 16.6901C6.91996 16.3001 6.91996 15.6701 7.30996 15.2801L10.6 11.9901L7.30996 8.70006C6.91996 8.31006 6.91996 7.68006 7.30996 7.29006C7.69996 6.90006 8.32996 6.90006 8.71996 7.29006L12.01 10.5801L15.3 7.29006Z"
      fill={fillColor}
    />
  );

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      // fill="none"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {iconPath}
    </svg>
  );
}
