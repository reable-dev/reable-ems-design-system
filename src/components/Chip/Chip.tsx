import React from 'react';

import * as S from './index.styles';
import theme from '../../styles/theme.styles';

import CloseRound from '../Icons/CloseRound';
import { OptionType } from './ChipList';

interface ChipProps {
  prefixTitle?: string;
  option?: any;
  handleDelete?: (option: OptionType<string>) => void;
}

export default function Chip({ prefixTitle, option, handleDelete }: ChipProps) {
  return (
    <S.ChipContainer>
      <span>
        {prefixTitle && <span>{prefixTitle} &#62;</span>} {option?.label}
      </span>
      <S.IconWrapper onClick={() => handleDelete && handleDelete(option)}>
        <CloseRound width={14} height={14} color={theme.color.gray600} />
      </S.IconWrapper>
    </S.ChipContainer>
  );
}
