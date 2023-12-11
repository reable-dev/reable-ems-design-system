import React from 'react';
import { SVGCustomProps } from './types';

export default function TimeSVG({ $filled, ...rest }: SVGCustomProps) {
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
            d="M12.1799 2.82007C7.21993 2.82007 3.17993 6.86007 3.17993 11.8201C3.17993 16.7801 7.21993 20.8201 12.1799 20.8201C17.1399 20.8201 21.1799 16.7801 21.1799 11.8201C21.1799 6.86007 17.1399 2.82007 12.1799 2.82007ZM17.1799 13.8201H12.1799C11.6299 13.8201 11.1799 13.3701 11.1799 12.8201V6.82007C11.1799 6.27007 11.6299 5.82007 12.1799 5.82007C12.7299 5.82007 13.1799 6.27007 13.1799 6.82007V11.8201H17.1799C17.7299 11.8201 18.1799 12.2701 18.1799 12.8201C18.1799 13.3701 17.7299 13.8201 17.1799 13.8201Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M12.1799 0.820068C6.10993 0.820068 1.17993 5.75007 1.17993 11.8201C1.17993 17.8901 6.10993 22.8201 12.1799 22.8201C18.2499 22.8201 23.1799 17.8901 23.1799 11.8201C23.1799 5.75007 18.2499 0.820068 12.1799 0.820068ZM12.1799 21.8201C6.65993 21.8201 2.17993 17.3401 2.17993 11.8201C2.17993 6.30007 6.65993 1.82007 12.1799 1.82007C17.6999 1.82007 22.1799 6.30007 22.1799 11.8201C22.1799 17.3401 17.6999 21.8201 12.1799 21.8201Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M12.1899 1.82007C6.66988 1.82007 2.18988 6.30007 2.18988 11.8201C2.18988 17.3401 6.66988 21.8201 12.1899 21.8201C17.7099 21.8201 22.1899 17.3401 22.1899 11.8201C22.1899 6.30007 17.7099 1.82007 12.1899 1.82007ZM12.1899 20.8201C7.22988 20.8201 3.18988 16.7801 3.18988 11.8201C3.18988 6.86007 7.22988 2.82007 12.1899 2.82007C17.1499 2.82007 21.1899 6.86007 21.1899 11.8201C21.1899 16.7801 17.1499 20.8201 12.1899 20.8201Z"
            fill={rest.color || '#222222'}
          />
        </>
      ) : (
        <>
          <path
            d="M12 0.820068C5.93 0.820068 1 5.75007 1 11.8201C1 17.8901 5.93 22.8201 12 22.8201C18.07 22.8201 23 17.8901 23 11.8201C23 5.75007 18.07 0.820068 12 0.820068ZM12 20.8201C7.04 20.8201 3 16.7801 3 11.8201C3 6.86007 7.04 2.82007 12 2.82007C16.96 2.82007 21 6.86007 21 11.8201C21 16.7801 16.96 20.8201 12 20.8201Z"
            fill={rest.color || '#222222'}
          />
          <path
            d="M17 11.8201H13V6.82007C13 6.27007 12.55 5.82007 12 5.82007C11.45 5.82007 11 6.27007 11 6.82007V12.8201C11 13.3701 11.45 13.8201 12 13.8201H17C17.55 13.8201 18 13.3701 18 12.8201C18 12.2701 17.55 11.8201 17 11.8201Z"
            fill={rest.color || '#222222'}
          />
        </>
      )}
    </svg>
  );
}