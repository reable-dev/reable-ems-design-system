import { FONT_STYLES } from '../../styles/common.styles';
import { css, styled } from 'styled-components';

export const Container = styled.div``;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &:svg {
    ${FONT_STYLES.BODY2}
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.blueGray200};
  }
`;

export const PaginationLeftArrowWrapper = styled.div`
  margin-right: 4px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  & svg {
    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.blueGray200};
    }
  }
`;
export const PaginationRightArrowWrapper = styled.div`
  margin-left: 4px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  & svg {
    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.blueGray200};
    }
  }
`;

export const PageButton = styled.button<{ $isCurrentPage?: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  user-select: none;

  ${FONT_STYLES.BODY2}
  color: ${({ theme }) => theme.color.gray500};

  &:hover {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.blueGray200};
  }

  ${({ $isCurrentPage, theme }) =>
    $isCurrentPage &&
    css`
      color: ${theme.color.primary500};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.blueGray200};
    `}
`;
