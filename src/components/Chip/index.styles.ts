import { styled } from 'styled-components';
import { FONT_STYLES, SCROLL_BAR } from '../../styles/common.styles';

export const ChipListContainer = styled.div<{ $isBorder?: boolean; $isScrollable?: boolean }>`
  width: 100%;
  height: 100%;
  overflow-y: ${({ $isScrollable }) => ($isScrollable ? 'scroll' : 'auto')};

  ${SCROLL_BAR}

  align-content: flex-start;

  padding: 12px 24px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 24px;

  border: ${({ theme, $isBorder }) => ($isBorder ? `1px solid ${theme.color.gray600}` : 'none')};
  border-radius: 10px;
`;

export const ChipListWrapper = styled.div`
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray50};

  &:hover {
    background-color: ${({ theme }) => theme.color.blueGray100};
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${FONT_STYLES.BODY2};
  word-break: break-all;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
