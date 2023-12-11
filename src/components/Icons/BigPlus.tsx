import React, { SVGProps, useState } from 'react';

export default function BigPlusSVG(props: SVGProps<SVGSVGElement>) {
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
          <path
            d="M16.0361 16.0519H13.6001V15.0439H16.0361V12.4519H17.0921V15.0439H19.5281V16.0519H17.0921V18.6439H16.0361V16.0519Z"
            fill="#222222"
          />
        </>
      ) : (
        <>
          <circle cx="16" cy="16" r="15.5" fill="white" stroke="#D5D5D5" />
          <path
            d="M16.0361 16.0519H13.6001V15.0439H16.0361V12.4519H17.0921V15.0439H19.5281V16.0519H17.0921V18.6439H16.0361V16.0519Z"
            fill="#222222"
          />
        </>
      )}
    </svg>
  );
}
