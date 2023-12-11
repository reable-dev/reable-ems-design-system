import React, { useEffect, useRef, useState } from 'react';

import * as S from './index.styles';
import { RuleSet } from 'styled-components';

export interface RadioSelectProps {
  id: string;
  checked?: boolean;
  notifier?: (checked: boolean) => any;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
}
export default function RadioSelect({
  id,
  checked,
  notifier,
  disabled,
  size = 'sm',
}: RadioSelectProps) {
  return (
    <S.RadialContainer size={size}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          notifier && notifier(e.target.checked);
        }}
        disabled={disabled}
      />
      <label htmlFor={id}></label>
    </S.RadialContainer>
  );
}
