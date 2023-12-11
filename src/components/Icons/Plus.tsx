import React, { SVGProps } from 'react';

export default function PlusSVG(props: SVGProps<SVGSVGElement>) {
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
      <path
        d="M18 11H12.5V5C12.5 4.45 12.05 4 11.5 4C10.95 4 10.5 4.45 10.5 5V11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H10.5V19C10.5 19.55 10.95 20 11.5 20C12.05 20 12.5 19.55 12.5 19V13H18C18.55 13 19 12.55 19 12C19 11.45 18.55 11 18 11Z"
        fill={props.color || '#222222'}
      />
    </svg>
  );
}
