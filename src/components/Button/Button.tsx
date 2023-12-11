import React from 'react';

import * as S from './index.styles';

import LoadingSVG from '../Icons/Loading';

export type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'link' | 'warning';
export type ButtonSize = 'lg' | 'md' | 'sm';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  variants?: ButtonVariants;
  size?: keyof typeof S.BUTTON_PADDING_SIZE;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  link?: string;
}

export default function Button({
  type = 'button',
  children,
  variants = 'primary',
  size = 'lg',
  loading = false,
  icon,
  onClick,
  rightIcon,
  disabled = false,
  link,
}: ButtonProps) {
  const renderLinkTypeButton = () => {
    if (variants === 'link') {
      if (disabled) {
        return <S.TextWrapper $variants={variants}>{children}</S.TextWrapper>;
      } else {
        return (
          <S.TextWrapper $variants={variants} size={size}>
            {/* <Link href={link ? link : `www.naver.com`}>{children}</Link> */}
            {children}
          </S.TextWrapper>
        );
      }
    }

    return <S.TextWrapper size={size}>{children}</S.TextWrapper>;
  };
  /**
   * type이 link인 것을 제외한 경우의 버튼입니다.
   *
   * type: 'primary' | 'secondary' | 'outline' | 'warning';
   */
  return (
    <S.Container
      type={type}
      $variants={variants}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <LoadingSVG /> : icon}
      {renderLinkTypeButton()}
      {rightIcon && <S.RightIconWrapper>{rightIcon}</S.RightIconWrapper>}
    </S.Container>
  );
}
