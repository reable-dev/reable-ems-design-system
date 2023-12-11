import { FONT_STYLES } from '../../styles/common.styles';
import { styled } from 'styled-components';

export const StorageNumberWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: end;

  & .current-storage {
    ${FONT_STYLES.EMP2_BODY2}
    color: ${({ theme }) => theme.color.blue500};
  }

  & .slash {
    ${FONT_STYLES.BODY2}
    color: ${({ theme }) => theme.color.gray500};
  }
  & .max-storage {
    ${FONT_STYLES.BODY2}
    color: ${({ theme }) => theme.color.gray500};
  }
`;

export const Container = styled.div`
  width: 128px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Outer = styled.div<{ width?: string | number; height?: string | number }>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : `${width}`)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : `${height}`)};
`;
export const Inner = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.gray300};
  border-radius: 4px;
`;

export const Progress = styled.div<{ value?: number }>`
  width: ${({ value }) => `${value}%`};
  height: 4px;

  background-color: ${({ theme }) => theme.color.blue500};
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;
