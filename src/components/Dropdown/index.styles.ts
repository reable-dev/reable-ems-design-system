import { css, styled } from 'styled-components';
import { StrNumType, DropdownWidthSize, DropdownHeightSize, SearchEnabled } from './Dropdown';
import { FONT_STYLES, SCROLL_BAR, TRANSITION, USER_SELECT_NONE } from '../../styles/common.styles';
import theme from '../../styles/theme.styles';

const getWidth = (widthSize: DropdownWidthSize, width: StrNumType) => {
  const sizeWidthMap: { [key in DropdownWidthSize]: string } = {
    auto: 'auto',
    xl: '269px',
    lg: '240px',
    md: '166px',
    sm: '128px',
    xs: '95px',
  };

  if (width !== null && width !== undefined) {
    // 숫자인 경우 px을 붙여 반환
    if (typeof width === 'number') {
      return `${width}px`;
    }
    // 문자열인 경우 그대로 반환
    return width;
  }

  return sizeWidthMap[widthSize] || 'auto';
};

const getHeight = (heightSize: DropdownHeightSize, height: StrNumType | undefined): string => {
  if (height !== null && height !== undefined) {
    // 숫자인 경우 px을 붙여 반환
    if (typeof height === 'number') {
      return `${height}px`;
    }
    // 문자열인 경우 그대로 반환
    return height;
  }

  // heightSize에 따라 높이 설정
  if (heightSize === 'slim') {
    return '32px';
  }
  return '40px';
};

const getDisabledStyles = () => css`
  background-color: ${theme.color.gray200};
  color: ${theme.color.gray500};
  border: 1px solid ${theme.color.gray400};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div<{
  $widthSize?: DropdownWidthSize;
  width?: StrNumType;
  disabled?: boolean;
  $isOpen?: boolean;
  $error?: boolean;
  $isExistValue?: StrNumType;
  placeholder?: string;
}>`
  position: relative;
  width: ${({ $widthSize, width }) => getWidth($widthSize!, width!)};
  ${getDisabledStyles()}

  // border 적용 우선순위: open > error
  border: 1px solid
    ${({ theme, $isOpen, $error, $isExistValue, disabled, placeholder }) =>
    disabled
      ? theme.color.gray400
      : $isOpen
      ? theme.color.primary500
      : $error
      ? theme.color.fail
      : $isExistValue === '선택' || $isExistValue === placeholder // 선택된 값이 없을 때
      ? theme.color.gray400
      : theme.color.gray600};

  border-radius: 8px;
  color: ${({ theme }) => theme.color.gray500};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray100 : theme.color.gray50};

  &:hover {
    border: 1px solid
      ${({ theme, $isOpen, $error, disabled }) =>
        disabled
          ? theme.color.gray400
          : $isOpen
          ? theme.color.primary500
          : $error
          ? theme.color.fail
          : theme.color.gray600};
  }
  pointer-events: ${({ disabled }) => disabled && 'none'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const DropdownLabel = styled.div<{
  $heightSize?: DropdownHeightSize;
  height?: StrNumType;
  $error?: boolean;
  $isOpen?: boolean;
  disabled?: boolean;
  $disabledCheck?: boolean;

  $isExistValue?: StrNumType;
  placeholder?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ $heightSize, height }) => getHeight($heightSize!, height)};
  padding: ${({ $heightSize }) => ($heightSize === 'slim' ? '6px 12px' : '10px 12px')};

  border-radius: 8px;
  ${FONT_STYLES.BODY2}

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray100 : theme.color.gray50};

  color: ${({ theme, $error, $isOpen, $isExistValue, $disabledCheck, disabled, placeholder }) =>
    $disabledCheck
      ? theme.color.gray800
      : // 비활성화
      disabled
      ? theme.color.gray500
      : // dropdown open
      $isOpen
      ? theme.color.primary500
      : // error
      $error
      ? theme.color.fail
      : // isExistValue 값이 있을 때
      $isExistValue === '선택' || $isExistValue === placeholder
      ? theme.color.gray500
      : theme.color.gray800};

  &:hover {
    color: ${({ theme, $error, $isOpen, disabled }) =>
      disabled
        ? theme.color.gray500
        : $isOpen
        ? theme.color.primary500
        : $error
        ? theme.color.fail
        : theme.color.gray800};
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${USER_SELECT_NONE}
`;

export const DropdownList = styled.ul<{
  $shouldOpenUp?: boolean;
  $top: string;
  listHeight?: string;
}>`
  position: absolute;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  top: 100%;
  width: 100%;
  top: ${({ $top, $shouldOpenUp }) =>
    $shouldOpenUp ? 'auto' : `calc(${$top} + ${$shouldOpenUp ? '-4px' : '4px'})`};
  bottom: ${({ $shouldOpenUp }) => ($shouldOpenUp ? '120%' : 'auto')};

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray50};

  ${USER_SELECT_NONE}
`;

/**
 * =========================
 *  search mode
 * =========================
 */
export const SearchWrapper = styled.div<{
  $listHeight?: string;
  $searchEnabled: SearchEnabled;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $searchEnabled }) =>
    $searchEnabled === 'search'
      ? css`
          background-color: ${({ theme }) => theme.color.gray100};
          border-left: 1px solid ${({ theme }) => theme.color.gray400};
          border-right: 1px solid ${({ theme }) => theme.color.gray400};
          border-top: 1px solid ${({ theme }) => theme.color.gray400};
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
        `
      : css`
          border: none;
        `}

  overflow: hidden;
`;

export const DropdownListItemWrapper = styled.div<{
  $listHeight?: string;
  $listHeightSize?: number;
  $searchEnabled: SearchEnabled;
  $showScroll?: boolean;
}>`
  overflow-y: ${({ $showScroll }) => ($showScroll ? 'scroll' : 'hidden')};
  height: ${({ $listHeight, $listHeightSize }) => `${$listHeightSize}px` || $listHeight};

  ${({ $searchEnabled }) =>
    $searchEnabled === 'search'
      ? css`
          border-left: 1px solid ${({ theme }) => theme.color.gray400};
          border-right: 1px solid ${({ theme }) => theme.color.gray400};
          border-bottom: 1px solid ${({ theme }) => theme.color.gray400};

          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        `
      : css`
          border-bottom: none;
          border: 1px solid;
          border-radius: 8px;
          border-top-right-radius: 8px;
        `}

  // border-radius 수정
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.gray200};

    border-top-right-radius: ${({ $searchEnabled }) => ($searchEnabled === 'search' ? '0' : '8px')};
    border-bottom-right-radius: 8px;
  }
  ${SCROLL_BAR}
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  ${FONT_STYLES.BODY2}
  color: ${({ theme }) => theme.color.gray800};

  &:hover {
    background-color: ${({ theme }) => theme.color.blueGray100};
    transition: ${TRANSITION};
  }
`;

export const DropdownListItem = styled.li<{ $isSelected?: any }>`
  list-style: none;

  padding: 10px 12px;
  color: ${({ theme }) => theme.color.gray800};

  &:hover {
    background-color: ${({ theme }) => theme.color.blueGray100};
  }

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          ${FONT_STYLES.EMP2_BODY2}
          background-color: ${theme.color.blueGray100};
        `
      : css`
          ${FONT_STYLES.BODY2}
          background-color: ${theme.color.gray50};
        `}
`;

export const NoOptionList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray50};

  & > span {
    ${FONT_STYLES.BODY2}
  }
`;

export const ErrorWrapper = styled.div`
  ${FONT_STYLES.CAPTION}

  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.color.fail};
`;

export const HiddenSelect = styled.select<{ width?: StrNumType; height?: StrNumType }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
`;
