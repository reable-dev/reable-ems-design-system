import { styled } from 'styled-components';

export const Container = styled.div<{ width?: string | number }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : `${width}`)};

  position: absolute;
  top: 0;
  left: 0;
`;

export const Inner = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.gray50};
`;

export const Progress = styled.div<{ value?: number }>`
  width: ${({ value }) => `${value}%`};
  height: 4px;

  background-color: ${({ theme }) => theme.color.blue500};
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;
