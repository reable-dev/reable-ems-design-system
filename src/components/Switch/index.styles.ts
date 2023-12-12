import { styled } from 'styled-components';
import { SwitchProps } from './Switch';

export const Container = styled.button<SwitchProps>`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
  border-radius: 100px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s;
  user-select: none;

  background-color: ${({ theme, checked, disabled }) =>
    disabled ? theme.color.gray300 : checked ? theme.color.primary500 : theme.color.gray300};
`;

export const SwitchHandle = styled.div<{ checked?: boolean; disabled: boolean }>`
  position: absolute;
  top: 2px;
  inset-inline-start: ${({ checked, disabled }) => {
    switch (true) {
      case disabled:
        return '2px';
      case checked:
        return '24px';
      default:
        return '2px';
    }
  }};
  width: 18px;
  height: 18px;
  transition: all 0.2s ease-in-out;

  &::before {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    bottom: 0;
    inset-inline-start: 0;
    background-color: ${({ theme }) => theme.color.gray50};
    border-radius: 9px;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    transition: all 0.2s ease-in-out;
    content: '';
  }
`;

export const SwitchInner = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 100px;
  height: 100%;
  padding-inline-start: 24px;
  padding-inline-end: 9px;
  transition: padding-inline-start 0.2s ease-in-out, padding-inline-end 0.2s ease-in-out;
`;
export const SwitchInnerChecked = styled.span`
  display: block;
  color: #fff;
  font-size: 12px;
  transition: margin-inline-start 0.2s ease-in-out, margin-inline-end 0.2s ease-in-out;
  pointer-events: none;

  margin-inline-start: calc(-100% + 22px - 48px);
  margin-inline-end: calc(100% - 22px + 48px);
`;
export const SwitchInnerUnChecked = styled.span`
  margin-top: -22px;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;
