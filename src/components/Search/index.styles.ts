import { FONT_STYLES } from '../../styles/common.styles';
import { styled } from 'styled-components';

import { SearchProps } from './Search';

export const Container = styled.div<{
  mode?: 'default' | 'dropdown';
  $heightSize?: string | number;
  value: string | number | undefined;
  disabled?: boolean;
}>`
  ${FONT_STYLES.BODY2}

  width: ${({ mode }) => (mode === 'dropdown' ? '100%' : '232px')};
  height: ${({ $heightSize }) => ($heightSize === 'default' ? '40px' : '32px')};
  border: 1px solid ${({ theme, value }) => (!!value ? theme.color.gray600 : theme.color.gray400)};
  border-radius: 8px;
  padding: ${({ $heightSize }) =>
    $heightSize === 'default' ? '10px 18px 10px 12px' : '6px 18px 6px 12px'};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray200 : theme.color.gray50};

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;

    & input {
      width: 100%;
      &:hover,
      &:focus {
        outline: none;
      }

      background-color: ${({ theme, disabled }) => disabled && theme.color.gray200};

      &::placeholder {
        ${({ theme, disabled }) => disabled && theme.color.gray500};
      }
    }
  }

  & > div:nth-child(2) {
    margin-left: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.primary500};
  }
`;

export const DropdownModeContainer = styled.div<SearchProps>`
  z-index: 1;
  width: 100%;
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
`;
