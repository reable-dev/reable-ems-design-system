import { FONT_STYLES } from '../../styles/common.styles';
import { styled } from 'styled-components';

import { DatePicker } from 'antd';

export const Container = styled.div``;

export const StyledDatePicker = styled(DatePicker)<{
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  $value?: string | number;
  error?: boolean;
}>`
  /* width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)}; */

  & input {
    font-weight: 400;
  }
  & ant-picker-input {
    font-weight: 400;
  }

  // placeholder color 수정
  .ant-picker-input > input::placeholder {
    ${FONT_STYLES.BODY2}
    color: ${({ theme }) => theme.color.gray500};
  }
`;

export const ErrorWrapper = styled.div`
  ${FONT_STYLES.CAPTION}

  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.color.fail};
`;
