import React, { SVGProps, useState } from 'react';

export default function BigMinusSVG(props: SVGProps<SVGSVGElement>) {
  const [isHover, setIsHover] = useState(false);
  const onMouseHover = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };
  return (
    <svg
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseOut}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...props}
    >
      {isHover ? (
        <>
          <circle cx="16" cy="16" r="15.5" fill="#EAF2FE" stroke="#D5D5D5" />
          <path d="M14.3149 15.0681H18.3949V16.0881H14.3149V15.0681Z" fill="#222222" />
        </>
      ) : (
        <>
          <circle cx="16" cy="16" r="15.5" fill="white" stroke="#D5D5D5" />
          <path d="M14.3149 15.0681H18.3949V16.0881H14.3149V15.0681Z" fill="#222222" />
        </>
      )}
    </svg>
  );
}
