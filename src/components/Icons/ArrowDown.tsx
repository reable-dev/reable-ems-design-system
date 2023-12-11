import React, { SVGProps } from 'react';

/**
 * 화살표를 나타내는 SVG 컴포넌트입니다.
 * default는 아래벙향 화살표 입니다.
 * @param {SVGProps<SVGSVGElement>} props - SVG 컴포넌트에 전달되는 속성들입니다.
 * @param {number} [props.rotate=0] - 화살표의 회전 각도 (기본값: 0)
 * @returns {React.JSX.Element} 화살표 SVG 요소
 */
export default function ArrowDownSVG(props: SVGProps<SVGSVGElement>) {
  const rotation = props.rotate ? `rotate(${props.rotate}, 8, 8)` : '';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.99952 11C8.19054 11 8.3524 10.9289 8.50346 10.769L12.8099 6.17023C12.938 6.0413 13 5.88076 13 5.69025C13 5.30496 12.7136 5 12.3477 5C12.1632 5 12.0014 5.08189 11.8738 5.21235L7.99846 9.35981L4.12517 5.21235C3.99662 5.08083 3.83111 5 3.65228 5C3.28536 5 3 5.30496 3 5.69026C3 5.88182 3.06202 6.0413 3.1855 6.17023L7.49554 10.769C7.64195 10.9278 7.80745 10.9989 7.99952 11Z"
        fill={props.color || '#B1B1B1'}
        transform={rotation}
      />
    </svg>
  );
}
