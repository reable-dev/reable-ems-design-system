import React, { ChangeEvent } from 'react';
import * as S from './index.styles';
import theme from '../../styles/theme.styles';

import CheckBoxFilledSVG from '../Icons/CheckBoxFilled';
import CheckBoxSVG from '../Icons/CheckBox';

export interface TableCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  props?: any;
  disabled?: boolean;
}

export default function TableCheckbox({
  id,
  checked,
  onChange,
  disabled,
  ...props
}: TableCheckboxProps) {
  return (
    <S.Container>
      <input
        className="checkbox-input"
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        style={{ display: 'none' }}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={id}>
        {disabled ? (
          <CheckBoxSVG
            width={20}
            height={20}
            color={theme.color.gray400}
            style={{ pointerEvents: 'none' }}
          />
        ) : (
          <>
            {checked ? (
              // 체크됨
              <CheckBoxFilledSVG width={20} height={20} $filled color={theme.color.primary500} />
            ) : (
              // 체크 안 됨
              <CheckBoxSVG width={20} height={20} color={theme.color.gray600} />
            )}
          </>
        )}
      </label>
    </S.Container>
  );
}
