import theme from '../../styles/theme.styles';
import styled, { css } from 'styled-components';
import { RadioSelectProps } from './RadioSelect';

export const RadialContainer = styled.div<Pick<RadioSelectProps, 'size'>>`
  display: inline-block;

  & {
    --defaultColor: ${theme.color.gray600};
    --hoverColor: ${theme.color.gray500};
    --clickedColor: ${theme.color.primary500};
    --disabledColor: ${theme.color.gray400};
  }

  input[type='checkbox'] {
    // 초기 디자인 리셋
    -webkit-appearance: none;
    appearance: none;
    margin: 0;

    // 크기
    width: 24px;
    height: 24px;
    border: 3px solid var(--defaultColor);
    border-radius: 100%;

    // 중앙정렬
    display: grid;
    place-content: center;

    // 트랜지션
    transition: all 0.1s ease-in-out;

    // 체크 라운드
    &::before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 100%;
      transform: scale(0);
      transform-origin: center center;
      transition: inherit;
    }

    // case
    // hover 할 경우
    &:hover {
      border-color: var(--hoverColor);
    }

    // input 체크상태일 경우
    &:checked {
      border-color: var(--clickedColor);

      &::before {
        transform: scale(1);
        background-color: var(--clickedColor);
      }
    }

    // input 비활성화일 경우
    &:disabled {
      cursor: not-allowed;
      border-color: var(--disabledColor);

      &:before {
        transform: scale(0);
      }
    }
  }

  ${({ size }) =>
    size === 'sm' &&
    css`
      input[type='checkbox'] {
        width: 14px;
        height: 14px;
        border-width: 2px;

        &:before {
          width: 7px;
          height: 7px;
        }
      }
    `};
`;
