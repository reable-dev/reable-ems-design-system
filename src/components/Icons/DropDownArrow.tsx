import React, { SVGProps } from 'react';

export default function DropDownArrowSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      cursor={'pointer'}
      {...props}
    >
      <g transform={props.rotate ? `rotate(${props.rotate} 12 12)` : ''}>
        <path
          d="M11.767 15.0401C11.9157 15.1888 12.1036 15.2589 12.292 15.2601L12.287 15.2601H12.297L12.292 15.2601C12.4803 15.2589 12.6683 15.1888 12.817 15.0401L18.217 9.64011C18.427 9.4201 18.487 9.10011 18.377 8.8201C18.267 8.5401 17.987 8.36011 17.687 8.36011H6.89696C6.59696 8.36011 6.32697 8.5401 6.20696 8.8201C6.08696 9.10011 6.15696 9.4301 6.36696 9.64011L11.767 15.0401Z"
          fill={props.color || '#222222'}
        />
      </g>
    </svg>
  );
}
