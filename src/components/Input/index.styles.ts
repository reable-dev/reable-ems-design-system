import { css, styled } from 'styled-components';
import { InputSize, InputVariants } from './Input';
import { FONT_STYLES } from '../../styles/common.styles';

export const Container = styled.div``;

export const Wrapper = styled.div<{
  $variants: InputVariants;
  size: InputSize;
  disabled?: boolean;
  $error?: boolean;
  width?: string | number;
  height?: number | string;
  $value?: boolean;
}>`
  height: ${({ $variants }) => ($variants === 'slim' ? '32px' : '40px')};
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  border: 1px solid
    ${({ $value, theme, disabled, $error }) =>
      disabled
        ? theme.color.gray400
        : $error
        ? theme.color.fail
        : $value
        ? theme.color.gray600
        : theme.color.gray400};
  border-radius: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray100 : theme.color.gray50};

  &:focus-within {
    border: 1px solid ${({ theme, $error }) => ($error ? theme.color.fail : theme.color.blue500)};
  }

  ${({ size, width }) => {
    let containerWidth;

    if (width) {
      containerWidth = typeof width === 'number' ? `${width}px` : width;
    } else {
      switch (size) {
        case 'auto':
          containerWidth = 'auto';
          break;
        case 'lg':
          containerWidth = '456px';
          break;
        case 'md':
          containerWidth = '320px';
          break;
        case 'sm':
          containerWidth = '249px';
          break;
        case 'xs':
          containerWidth = '180px';
          break;

        default:
          containerWidth = 'auto';
          break;
      }
    }

    return css`
      width: ${containerWidth};
    `;
  }}
`;

export const InputWrapper = styled.div<{
  $disabledCheck?: boolean;
  disabled?: boolean;
  $error?: boolean;
}>`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;

  & input {
    ${FONT_STYLES.BODY2}

    width: 100%;
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color.gray100 : theme.color.gray50};
    color: ${({ theme, disabled, $error, $disabledCheck }) =>
      $disabledCheck
        ? theme.color.gray800
        : disabled
        ? theme.color.gray500
        : $error
        ? theme.color.fail
        : theme.color.gray800};
    &::placeholder {
      ${({ theme, disabled }) => disabled && theme.color.gray500};
    }
    &:hover,
    &:focus {
      outline: none;
    }
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const FillEmptyIcon = styled.div`
  width: 14px;
  height: 14px;
`;

export const Unit = styled.span`
  ${FONT_STYLES.BODY2}
`;

export const ErrorWrapper = styled.div`
  ${FONT_STYLES.CAPTION}

  display: flex;
  gap: 4px;
  color: ${({ theme }) => theme.color.fail};
`;
export const SvgWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  & > svg {
    margin-top: 3px;
  }
`;
