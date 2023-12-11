import React from 'react';
import * as S from './index.styles';

import Chip from './Chip';

export type OptionType<T> = {
  category?: string;
  label: string;
  value: T;
  onDelete?: (category: string, value: string) => any;
};

export interface ChipListProps<T> {
  prefixTitle?: string;
  selectedOptions: OptionType<T>[];
  onDelete?: (option: OptionType<string>) => void;
  isBorder?: boolean;
  isDisabled?: boolean;
  isScrollable?: boolean;
}

export default function ChipList<T extends string>({
  selectedOptions,
  onDelete,
  isBorder,
  isDisabled,
  isScrollable = true,
}: ChipListProps<T>) {
  const handleDelete = (option: OptionType<string>) => {
    if (isDisabled) return;

    if (onDelete) {
      onDelete(option);
    }
  };

  return (
    /**
     * className: chipList-container
     * gap 수정을 위한 className
     * 사용법: ChipList 컴포넌트를 사용하는 부모 Container에서 .chipList-container를 선택하여 사용.
     * 
     * & .chipList-container {
          gap: 8px 16px;
        }
     */

    <S.ChipListContainer
      $isScrollable={isScrollable}
      $isBorder={isBorder}
      className="chipList-container"
    >
      {selectedOptions.map((option) => (
        <S.ChipListWrapper key={option.value} className="chipList-wrapper">
          <Chip prefixTitle={option?.category} option={option} handleDelete={handleDelete} />
        </S.ChipListWrapper>
      ))}
    </S.ChipListContainer>
  );
}
