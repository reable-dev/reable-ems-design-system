import { styled } from 'styled-components';

export const SliderContainer = styled.div<{ width?: number | string }>`
  position: relative;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  padding: 16px 0;
`;

export const SliderRail = styled.div<{ disabled?: boolean }>`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.gray200};
  position: absolute;
  top: calc(50% - 2px);

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
`;
export const SliderFillTrack = styled.div<{ fill?: string; disabled?: boolean }>`
  position: absolute;
  width: ${({ fill }) => (fill ? fill : '0%')};
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray500 : theme.color.blue500};
  top: calc(50% - 2px);
`;

export const Slider = styled.input<{ disabled?: boolean }>`
  position: absolute;
  top: calc(50% - 6px);
  width: 100%;
  height: 12px;

  appearance: none;
  background: transparent;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};

  &:active {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }

  &:focus {
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px; /* Thumb의 너비 */
    height: 16px; /* Thumb의 높이 */
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color.gray500 : theme.color.blue500}; /* Thumb의 배경색 */
    cursor: pointer;
    border-radius: 50%;

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }

  /* Firefox */
  &::-moz-range-thumb {
    width: 16px; /* Thumb의 너비 */
    height: 16px; /* Thumb의 높이 */
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color.gray500 : theme.color.blue500}; /* Thumb의 배경색 */
    cursor: pointer;
    border-radius: 50%;

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }

  /* Focus 상태일 때의 스타일 */
  &:focus::-webkit-slider-thumb {
    box-shadow: ${({ theme, disabled }) =>
      disabled ? theme.color.gray500 : '0 0 0 8px rgba(171, 205, 239, 0.5)'};

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }

  &:focus::-moz-range-thumb {
    box-shadow: ${({ theme, disabled }) =>
      disabled ? theme.color.gray500 : '0 0 0 8px rgba(171, 205, 239, 0.5)'};

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }

  /* Active 상태일 때의 스타일 (드래그 중일 때) */
  &:active::-webkit-slider-thumb {
    box-shadow: ${({ theme, disabled }) =>
      disabled ? theme.color.gray500 : '0 0 0 8px rgba(171, 205, 239, 0.5)'};

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }

  &:active::-moz-range-thumb {
    box-shadow: ${({ theme, disabled }) =>
      disabled ? theme.color.gray500 : '0 0 0 8px rgba(171, 205, 239, 0.5)'};

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'grabbing')};
  }
`;
