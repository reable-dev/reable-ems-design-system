import React, { forwardRef } from 'react';
import theme from '../../styles/theme.styles';
import * as S from './index.styles';

import CloseRound from '../Icons/CloseRound';
import Warning from '../Icons/Warning';

export type InputVariants = 'default' | 'slim';
export type InputSize = 'lg' | 'md' | 'sm' | 'xs' | 'auto';
export type InputType = 'text' | 'number';
export interface InputProps {
  variants?: InputVariants;
  size?: InputSize;
  placeholder?: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  disabled?: boolean;
  /**
   * @disabledCheck
   * * 사용 하는 곳: 데이터 수집점 상세
   * * 컴포넌트 이름: PointEditModal
   * * disabled 상태이지만, input 글씨는 color.gray800
   * */
  disabledCheck?: boolean;
  hasUnit?: string;
  error?: boolean;
  $error?: boolean;
  errorMessage?: string;
  width?: string | number;
  height?: string | number;
  name?: string;
  type?: InputType;
}

const Input = forwardRef(
  (
    {
      variants = 'default',
      size = 'auto',
      placeholder = '내용 입력',
      value,
      onChange,

      disabled = false,
      /**
       * @disabledCheck
       * disabled 상태이지만, input 글씨는 color.gray800
       * 사용 하는 곳: 데이터 수집점 상세
       * <PointEditModal />
       * */
      disabledCheck = false,
      hasUnit,
      error = false,
      errorMessage = '필수 입력사항입니다.',
      width,
      height,
      name,
      type = 'text',
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const handleClear = (
      e: React.MouseEvent<SVGSVGElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>
    ) => {
      e.stopPropagation();
      e.preventDefault();

      if (onChange) {
        const event = {
          target: {
            name: name,
            value: type === 'number' ? 0 : '',
          } as HTMLInputElement,
        };
        onChange(event as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <S.Container>
        <S.Wrapper
          $variants={variants}
          size={size}
          disabled={disabled}
          $error={error}
          width={width}
          height={height}
          $value={!!value || value === 0 ? true : false}
        >
          <S.InputWrapper $disabledCheck={disabledCheck} disabled={disabled} $error={error}>
            {type === 'text' ? (
              <input
                type={type}
                placeholder={placeholder}
                value={value ?? ''}
                onChange={handleChange}
                disabled={disabled}
                name={name}
                ref={ref}
                {...props}
              />
            ) : (
              <input
                type={type}
                placeholder={placeholder}
                value={value ?? 0}
                onChange={handleChange}
                disabled={disabled}
                name={name}
                ref={ref}
                step="any"
                min="0"
                max=""
                pattern=".*"
              />
            )}
          </S.InputWrapper>
          {/* {hasUnit && <S.Unit>{hasUnit}</S.Unit>} */}
          <S.IconWrapper>
            {!!value &&
              // disabled 되면 clear 버튼 없애기
              (disabled ? (
                <S.FillEmptyIcon />
              ) : (
                <CloseRound
                  width={14}
                  height={14}
                  onClick={handleClear}
                  color={
                    disabled ? theme.color.gray400 : error ? theme.color.fail : theme.color.gray600
                  }
                />
              ))}
          </S.IconWrapper>
        </S.Wrapper>
        {/*
         * error validation
         * disabled가 우선순위이기 때문에 disabled=true이면
         * error validation 적용 안됨 -> null
         */}
        {disabled ? null : error ? (
          <S.ErrorWrapper>
            <S.SvgWrapper>
              <Warning
                width={12}
                height={12}
                color={error ? theme.color.fail : theme.color.gray800}
              />
            </S.SvgWrapper>
            <span>{errorMessage}</span>
          </S.ErrorWrapper>
        ) : null}
      </S.Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;
