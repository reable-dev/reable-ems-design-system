import { css, styled } from 'styled-components';
import { ButtonSize, ButtonVariants } from './Button';
import { FONT_STYLES } from '../../styles/common.styles';

export const BUTTON_PADDING_SIZE = {
  lg: '8px 16px',
  md: '8px 12px',
  sm: '6px 12px',
} as const;

const commonFontStyle = (size: ButtonSize | undefined) => {
  switch (size) {
    case 'lg':
      return css`
        ${FONT_STYLES.EMP2_BODY1}
      `;
    case 'md':
      return css`
        ${FONT_STYLES.EMP2_BODY2}
      `;
    case 'sm':
      return css`
        ${FONT_STYLES.EMP2_BODY3}
      `;
    default:
      return css`
        ${FONT_STYLES.EMP2_BODY1}
      `;
  }
};

export const Container = styled.button<{
  $variants?: ButtonVariants;
  size?: ButtonSize;
  disabled?: boolean;
}>`
  border-radius: 6px;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: fit-content;

  padding: ${({ size }) => (size ? BUTTON_PADDING_SIZE[size] : 0)};

  ${({ theme, $variants }) => {
    let backgroundColor,
      color,
      border,
      hoverBackgroundColor,
      hoverColor,
      disabledBackgroundColor,
      disabledColor,
      currentFontStyle;

    switch ($variants) {
      case 'primary':
        backgroundColor = theme.color.blue500;
        color = theme.color.gray50;
        hoverBackgroundColor = theme.color.blue550;
        disabledBackgroundColor = theme.color.gray300;
        disabledColor = theme.color.gray500;
        break;
      case 'secondary':
        backgroundColor = theme.color.blue100;
        color = theme.color.blue600;
        hoverBackgroundColor = theme.color.blue200;
        hoverColor = theme.color.blue600;
        disabledBackgroundColor = theme.color.gray200;
        disabledColor = theme.color.gray500;
        break;
      case 'outline':
        backgroundColor = theme.color.gray50;
        border = `1px solid ${theme.color.gray400}`;
        color = theme.color.gray800;
        hoverBackgroundColor = theme.color.backgroundColor;
        disabledBackgroundColor = theme.color.gray200;
        disabledColor = theme.color.gray500;
        break;
      case 'link':
        backgroundColor = theme.color.gray50;
        color = theme.color.infoLink;
        hoverColor = theme.color.blue600;
        disabledColor = theme.color.gray500;
        break;
      case 'warning':
        backgroundColor = theme.color.failBg;
        color = theme.color.fail;
        hoverBackgroundColor = theme.color.failHover;
        hoverColor = theme.color.fail;
        disabledBackgroundColor = theme.color.gray200;
        disabledColor = theme.color.gray500;
        break;
      default:
        backgroundColor = theme.color.blue500;
        color = theme.color.gray50;
        hoverBackgroundColor = theme.color.blue550;
        disabledBackgroundColor = theme.color.gray300;
        disabledColor = theme.color.gray500;
        break;
    }

    return css`
      ${currentFontStyle};
      background-color: ${backgroundColor};
      color: ${color};

      border: ${border};
      /* hover */
      &:hover {
        background-color: ${hoverBackgroundColor};
        color: ${hoverColor};
      }

      /* 비활성화 */
      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledColor};
        cursor: not-allowed;
      }
    `;
  }};
`;

export const TextWrapper = styled.span<{
  $variants?: string;
  size?: keyof typeof BUTTON_PADDING_SIZE;
}>`
  display: flex;
  ${({ size }) => commonFontStyle(size)}

  ${({ $variants }) =>
    $variants === 'link'
      ? css`
          text-decoration: underline;
        `
      : css``}
`;

export const LeftIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
