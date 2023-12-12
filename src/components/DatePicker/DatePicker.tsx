import React, { forwardRef, useState } from 'react';
import * as S from './index.styles';
import theme from '../../styles/theme.styles';

import { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';

import WarningSVG from '../Icons/Warning';
import CalendarSVG from '../Icons/Calendar';
import CloseRoundSVG from '../Icons/CloseRound';

export interface IDatePicker {
  width?: string | number;
  height?: string | number;
  onChange?: DatePickerProps['onChange'];
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  name?: string;
  value?: string | dayjs.Dayjs | null;
  defaultValue?: any;
  format?: string;
  pickerPeriod?: 'date' | 'week' | 'month' | 'year';
}

const DatePicker = forwardRef(
  (
    {
      width = '100%',
      height = '100%',
      onChange,
      disabled = false,
      error = false,
      errorMessage = '필수 입력사항입니다.',
      name,
      value,
      defaultValue,
      format,
      pickerPeriod = 'date',
    }: IDatePicker,
    ref: React.Ref<any>
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const borderColor = disabled
      ? theme.color.gray400
      : error
      ? theme.color.fail
      : isFocused
      ? theme.color.primary500
      : value
      ? theme.color.gray600
      : theme.color.gray400;

    return (
      <S.Container>
        <S.StyledDatePicker
          ref={ref}
          locale={locale}
          picker={pickerPeriod}
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
          }}
          name={name}
          value={value ? dayjs(value) : null}
          onChange={onChange}
          defaultValue={defaultValue}
          format={format}
          disabled={disabled}
          placement={'bottomRight'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          allowClear={{
            clearIcon: <CloseRoundSVG width={14} height={14} fill={theme.color.gray600} />,
          }}
          //TODO disabled일 때 color 추가해야함
          suffixIcon={<CalendarSVG width={14} height={14} color={theme.color.gray800} />}
          placeholder="날짜 선택"
        />
        {disabled ? null : error ? (
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

DatePicker.displayName = 'DatePicker';

export default DatePicker;
