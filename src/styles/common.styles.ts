import { keyframes, css } from 'styled-components';

const generateFontStyle = ({
  size,
  weight,
  lineHeight,
}: {
  size: string;
  weight: number;
  lineHeight: string;
}) => css`
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
`;
export const FONT_STYLES = {
  TITLE: generateFontStyle({ size: '24px', weight: 700, lineHeight: '150%' }),
  HEADLINE: generateFontStyle({ size: '20px', weight: 700, lineHeight: '150%' }),
  SUB_HEADLINE: generateFontStyle({ size: '18px', weight: 400, lineHeight: '131%' }),
  BODY1: generateFontStyle({ size: '16px', weight: 400, lineHeight: '150%' }),
  BODY2: generateFontStyle({ size: '14px', weight: 400, lineHeight: '146%' }),
  BODY3: generateFontStyle({ size: '13px', weight: 400, lineHeight: '150%' }),
  CAPTION: generateFontStyle({ size: '12px', weight: 400, lineHeight: '150%' }),

  EMP_BODY1: generateFontStyle({ size: '16px', weight: 500, lineHeight: '150%' }),
  EMP_BODY2: generateFontStyle({ size: '14px', weight: 500, lineHeight: '146%' }),
  EMP_BODY3: generateFontStyle({ size: '13px', weight: 500, lineHeight: '150%' }),
  EMP_SUB_HEADLINE: generateFontStyle({ size: '18px', weight: 500, lineHeight: '131%' }),

  // emphasized 1
  EMP1_TITLE: generateFontStyle({ size: '24px', weight: 700, lineHeight: '150%' }),
  EMP1_HEADLINE: generateFontStyle({ size: '20px', weight: 700, lineHeight: '150%' }),

  // emphasized 2
  EMP2_BODY1: generateFontStyle({ size: '16px', weight: 500, lineHeight: '150%' }),
  EMP2_BODY2: generateFontStyle({ size: '14px', weight: 500, lineHeight: '146%' }),
  EMP2_BODY3: generateFontStyle({ size: '13px', weight: 500, lineHeight: '150%' }),
  EMP2_SUB_HEADLINE: generateFontStyle({ size: '18px', weight: 500, lineHeight: '131%' }),
  EMP2_CAPTION: generateFontStyle({ size: '12px', weight: 500, lineHeight: '150%' }),
};

export const BORDER_RADIUS = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
};

export const truncateText = (numberOfLine: number) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${numberOfLine};

  overflow: hidden;
  text-overflow: ellipsis;
`;

const colorChange = keyframes`
  0% {
    background-color: var(--gray-1);
  }
  100% {
    background-color: var(--gray-2);
  }
`;

export const paintSkeleton = css`
  animation: ${colorChange} 1s ease-in-out infinite alternate;
`;

export const hideScrollBar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TRANSITION = 'background-color 0.2s ease-in-out';

export const SCROLL_BAR = css`
  //TODO props 전달 불가로 overflow-y: scroll 삭제
  /* overflow-y: scroll; */
  // 크로스 브라우저 호환성을 위한 스크롤바 스타일링
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.gray100};

    border-bottom-right-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: ${({ theme }) => theme.color.gray400};
    border: 4px solid ${({ theme }) => theme.color.gray100};
    border-radius: 8px;
    background-clip: padding-box;
  }
`;

export const USER_SELECT_NONE = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export const ROTATE_ANIMATION = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SPIN_ANIMATION = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.7;
  }
`;
