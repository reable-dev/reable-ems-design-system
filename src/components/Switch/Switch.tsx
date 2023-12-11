import React from 'react';
import * as S from './index.styles';

export interface SwitchProps {
  disabled?: boolean;
  checked?: boolean;
  onToggle?: () => void;
}

export default function Switch({ disabled = false, checked = false, onToggle }: SwitchProps) {
  const handleToggle = () => {
    if (!disabled && onToggle) {
      onToggle();
      checked = !checked;
    }
  };

  return (
    <S.Container
      type="button"
      role="switch"
      disabled={disabled}
      onClick={handleToggle}
      checked={checked}
    >
      <S.SwitchHandle checked={checked} disabled={disabled}></S.SwitchHandle>
      <S.SwitchInner>
        {checked ? (
          <S.SwitchInnerChecked></S.SwitchInnerChecked>
        ) : (
          <S.SwitchInnerUnChecked></S.SwitchInnerUnChecked>
        )}
      </S.SwitchInner>
    </S.Container>
  );
}
