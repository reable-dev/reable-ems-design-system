import React, { forwardRef, useEffect, useRef, useState } from 'react';

import * as S from './index.styles';
import theme from '../../styles/theme.styles';

import DropDownArrowSVG from '../Icons/DropDownArrow';
import WarningSVG from '../Icons/Warning';

import useScrollPosition from '../hooks/useScrollPosition';
import useOnClickOutside from '../hooks/useOnClickOutside';
import Search from '../Search';

import CheckBoxFilledSVG from '../Icons/CheckBoxFilled';
import CheckBoxSVG from '../Icons/CheckBox';
import { getListHeightSize } from '../utils';

export type StrNumType = string | number | null;
export type DropdownWidthSize = 'auto' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type DropdownHeightSize = 'default' | 'slim';
export type SearchEnabled = 'default' | 'search';

export type OptionType = {
  value?: StrNumType;
  label?: string;
};

export interface DropdownMultiSelectProps {
  options: OptionType[];
  defaultValue?: StrNumType;
  value?: OptionType | string | number;
  externalValues?: StrNumType[];

  name?: string;
  onChange?: (values: StrNumType[], value: StrNumType) => void;

  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  /**
   * @disabledCheck
   * * 사용 하는 곳: 데이터 수집점 상세
   * * 컴포넌트 이름: PointEditModal
   * * disabled 상태이지만, Dropdown Label 글씨는 color.gray800
   * */
  disabledCheck?: boolean;

  width?: StrNumType;
  height?: StrNumType;

  widthSize?: DropdownWidthSize;
  heightSize?: DropdownHeightSize;
  listHeightSize?: number;

  searchEnabled?: SearchEnabled;
  optionCheckEnabled?: boolean;
}

const DropdownMultiSelect = forwardRef(
  (
    {
      options,
      defaultValue,
      value: externalValue,
      externalValues,

      name,
      onChange,

      error = false,
      errorMessage = '필수 입력사항입니다.',
      disabled,
      disabledCheck,

      width,
      height,

      widthSize = 'auto',
      heightSize = 'default',
      listHeightSize,

      searchEnabled = 'default',
      optionCheckEnabled = false,
    }: DropdownMultiSelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    const { scrollY } = useScrollPosition();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false); // dropdown open
    const [shouldOpenUp, setShouldOpenUp] = useState(false); // dropdown이 위 또는 아래로 열리게 하는 상태
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
    const [selectedValues, setSelectedValues] = useState<StrNumType[]>(
      defaultValue ? [defaultValue] : []
    );

    useEffect(() => {
      if (externalValues) {
        setSelectedValues(externalValues);
      }
    }, [externalValues]);

    const heightRef = useRef<string>('40px');
    const listHeight = heightSize === 'slim' ? '154px' : '180px';

    useEffect(() => {
      const container = containerRef.current;

      if (container) {
        const dropdownBottom = container.getBoundingClientRect().bottom;

        const distanceFromBottom = window.innerHeight - dropdownBottom;

        // Dropdown이 뷰포트 아래에 더 이상 보이지 않으면 위로 열도록 설정
        if (distanceFromBottom <= 200) {
          setShouldOpenUp(true);
        } else {
          setShouldOpenUp(false);
        }
      }
    }, [scrollY, containerRef, setIsOpen]);

    useEffect(() => {
      switch (heightSize) {
        case 'slim':
          heightRef.current = '32px';
          break;
        default:
          heightRef.current = '40px';
          break;
      }
    }, [heightSize]);

    useOnClickOutside(containerRef, () => {
      setSearchTerm('');
      setIsOpen(false);
    });

    /** 검색어 관리 함수 */
    const handleSearchChange = (value: string) => {
      setSearchTerm(value);
    };
    /** 검색어에 따라 options 필터링 */
    const filteredOptions =
      searchEnabled === 'search' && searchTerm
        ? options.filter((option) =>
            option?.label?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : options;

    const handleLabelClick = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionValue: StrNumType) => {
      const newSelectedValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((value) => value !== optionValue)
        : [...selectedValues, optionValue];

      setSelectedValues(newSelectedValues);
      onChange && onChange(newSelectedValues, optionValue);
    };

    const isOptionType = (value: any): value is OptionType => {
      return value && typeof value === 'object' && 'label' in value && value.label !== null;
    };

    const displayValue = externalValue !== undefined ? externalValue : internalValue;

    const displayLabel = isOptionType(externalValue)
      ? externalValue.label
      : options.find((option) => option.value === externalValue)?.label;

    const getSVGColor = () => {
      const { fail, primary500, gray600 } = theme.color;
      if (isOpen) return primary500;
      if (error) return fail;
      return gray600;
    };

    return (
      <S.Container>
        <S.Wrapper
          $widthSize={widthSize}
          width={width}
          disabled={!!disabled}
          $isOpen={isOpen}
          $error={error}
          $isExistValue={displayLabel}
          ref={containerRef}
        >
          {/* hidden */}
          <S.HiddenSelect
            name={name}
            id=""
            value={displayValue as string | undefined} // null 값이 올 수 없으므로 undefined로 형변환
            width={width}
            height={height}
            disabled={!!disabled}
          >
            {/* {options.map((option, index) => {
              const { label, value } = option;

              return (
                <option key={`${value}-${index}`} value={value!}>
                  {value}
                </option>
              );
            })} */}
          </S.HiddenSelect>

          {/* dropdown label */}
          <S.DropdownLabel
            $heightSize={heightSize}
            height={height}
            $error={error}
            $isOpen={isOpen}
            disabled={!!disabled}
            onClick={handleLabelClick}
            $isExistValue={displayLabel}
          >
            <span>{selectedValues.length > 0 ? `${selectedValues.length}개 선택됨` : '선택'}</span>
            <DropDownArrowSVG
              width={16}
              height={16}
              color={getSVGColor()}
              rotate={isOpen ? 180 : undefined}
            />
          </S.DropdownLabel>

          {/* dropdown list */}
          {isOpen && (
            <S.DropdownList $shouldOpenUp={shouldOpenUp} $top={heightRef.current}>
              <S.SearchWrapper $searchEnabled={searchEnabled}>
                {searchEnabled === 'search' && (
                  <Search
                    heightSize="slim"
                    mode="dropdown"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                )}
              </S.SearchWrapper>

              <S.DropdownListItemWrapper
                $searchEnabled={searchEnabled}
                $listHeight={listHeight}
                $listHeightSize={listHeightSize ? listHeightSize : getListHeightSize(options)}
                $showScroll={
                  listHeightSize ? listHeightSize >= 160 : getListHeightSize(options) >= 160
                }
              >
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => {
                    if (option.value === undefined) return null; // 옵션의 value가 undefined인 경우 렌더링하지 않음

                    return (
                      <S.CheckboxWrapper
                        key={String(option.value)}
                        onClick={() => handleOptionClick(option?.value!)}
                      >
                        {selectedValues.includes(option.value) ? (
                          <CheckBoxFilledSVG
                            width={14}
                            height={14}
                            $filled
                            color={theme.color.primary500}
                          />
                        ) : (
                          <CheckBoxSVG width={14} height={14} />
                        )}
                        {option.label}
                      </S.CheckboxWrapper>
                    );
                  })
                ) : (
                  // 검색 결과가 없을 경우
                  <S.NoOptionList onClick={(e) => e.stopPropagation()}>
                    <span>검색 결과가 없습니다.</span>
                  </S.NoOptionList>
                )}
              </S.DropdownListItemWrapper>
            </S.DropdownList>
          )}
        </S.Wrapper>

        {/* error message */}
        {error ? (
          <S.ErrorWrapper>
            <WarningSVG
              width={12}
              height={12}
              color={error ? theme.color.fail : theme.color.gray800}
            />
            <span>{errorMessage}</span>
          </S.ErrorWrapper>
        ) : null}
      </S.Container>
    );
  }
);

DropdownMultiSelect.displayName = 'DropdownMultiSelect';

export default DropdownMultiSelect;
