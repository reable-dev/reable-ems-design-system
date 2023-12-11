import React from 'react';
import { SVGCustomProps } from './types';

export default function EditSVG({ $filled, ...rest }: SVGCustomProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...rest}
    >
      {$filled ? (
        <>
          <path
            d="M20.1324 20H12.1324C11.5824 20 11.1324 20.45 11.1324 21C11.1324 21.55 11.5824 22 12.1324 22H20.1324C20.6824 22 21.1324 21.55 21.1324 21C21.1324 20.45 20.6824 20 20.1324 20Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M20.6624 8.24C21.9824 6.93 21.9824 4.78 20.6624 3.47L20.1824 2.99C18.8724 1.67 16.7224 1.67 15.4124 2.99L2.76244 15.64C2.61244 15.79 2.52241 15.97 2.48241 16.18L1.67242 20.83C1.61242 21.15 1.72245 21.48 1.95245 21.71C2.14245 21.9 2.39241 22 2.66241 22C2.72241 22 2.77245 22 2.83245 21.99L7.48241 21.18C7.68241 21.14 7.87245 21.05 8.02245 20.9L20.6824 8.24H20.6624ZM18.6924 7.39L16.2725 4.97L16.8324 4.41001C17.3624 3.87001 18.2425 3.87001 18.7725 4.41001L19.2524 4.89C19.7924 5.43 19.7924 6.3 19.2524 6.83L18.6924 7.39Z"
            fill={rest.color || '#222222'}
          />
        </>
      ) : (
        <>
          <path
            d="M20.9924 19.9849H12.9924C12.4424 19.9849 11.9924 20.4349 11.9924 20.9849C11.9924 21.5349 12.4424 21.9849 12.9924 21.9849H20.9924C21.5424 21.9849 21.9924 21.5349 21.9924 20.9849C21.9924 20.4349 21.5424 19.9849 20.9924 19.9849Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M21.5124 8.22493C22.8324 6.91493 22.8324 4.76494 21.5124 3.45493L21.0324 2.97493C19.7224 1.66493 17.5724 1.66493 16.2624 2.97493L3.60238 15.6249C3.45238 15.7749 3.36238 15.9549 3.32238 16.1649L2.51238 20.8149C2.45238 21.1349 2.56238 21.4649 2.79238 21.6949C2.98238 21.8849 3.23241 21.9849 3.50241 21.9849C3.5624 21.9849 3.61239 21.9849 3.67239 21.9749L8.32238 21.1649C8.52238 21.1249 8.71239 21.0349 8.86239 20.8849L21.5224 8.22493H21.5124ZM19.6124 4.38494L20.0924 4.86493C20.6324 5.40493 20.6324 6.27493 20.0924 6.80493L19.5324 7.36493L17.1124 4.94493L17.6724 4.38494C18.2124 3.84494 19.0824 3.84494 19.6124 4.38494ZM7.66241 19.2349L4.72241 19.7449L5.23239 16.8049L15.6924 6.35494L18.1124 8.77493L7.6524 19.2349H7.66241Z"
            fill={rest.color || '#222222'}
          />
        </>
      )}
    </svg>
  );
}