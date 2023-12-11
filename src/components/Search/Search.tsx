import * as S from './index.styles';

import CloseRound from '../Icons/CloseRound';
import React, { forwardRef } from 'react';
import SearchSVG from '../Icons/Search';
import theme from '../../styles/theme.styles';

export interface SearchProps {
  mode?: 'default' | 'dropdown';
  heightSize?: 'default' | 'slim';
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: string | number;
  name?: string;
}

const Search = forwardRef(
  (
    {
      mode = 'default',
      heightSize = 'default',
      loading = false,
      disabled = false,
      placeholder = '검색어 입력',
      onChange,
      value,
      name,
    }: SearchProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value;

      if (onChange) return onChange(inputValue);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      if (onChange) return onChange('');
    };

    const InputFragment = (
      <>
        {/* div:first-child 입니다. */}
        <div>
          <SearchSVG width={16} height={16} />
          <input
            name={name}
            placeholder={placeholder}
            value={value || ''}
            type="text"
            onChange={handleChange}
            disabled={disabled}
          />
        </div>
        {/* div:nth-child(2) 입니다. */}
        <div>
          {disabled
            ? null
            : value && (
                <CloseRound
                  onClick={handleClear}
                  $filled={true}
                  color={theme.color.gray400}
                  width={14}
                  height={14}
                />
              )}
        </div>
      </>
    );

    return (
      <>
        {mode === 'dropdown' ? (
          <S.DropdownModeContainer onClick={(e) => e.stopPropagation()}>
            <S.Container
              mode={mode}
              $heightSize={heightSize}
              value={value}
              disabled={disabled || loading}
            >
              {InputFragment}
            </S.Container>
          </S.DropdownModeContainer>
        ) : (
          <S.Container
            mode={mode}
            $heightSize={heightSize}
            value={value}
            disabled={disabled || loading}
          >
            {InputFragment}
          </S.Container>
        )}
      </>
    );
  }
);

Search.displayName = 'Search';

export default Search;
