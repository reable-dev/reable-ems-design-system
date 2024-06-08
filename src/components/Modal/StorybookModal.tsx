import React from 'react';

import styled from 'styled-components';
import { FONT_STYLES } from '../../styles/common.styles';
import Button from '../Button';

interface StorybookModalProps {
  onClose?: VoidFunction;
  onCloseConfirm?: VoidFunction;
}

export default function StorybookModal({ onClose, onCloseConfirm }: StorybookModalProps) {
  return (
    <PopupContainer width={400} height={400}>
      StorybookModal
      <ButtonWrapper>
        <Button variants="outline" onClick={onCloseConfirm}>
          취소
        </Button>
        <Button onClick={onClose}>확인</Button>
      </ButtonWrapper>
    </PopupContainer>
  );
}

export const PopupContainer = styled.div<{ width?: string | number; height?: string | number }>`
  z-index: ${({ theme }) => theme.zIndex.modal};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: ${({ width = '360px' }) => (typeof width === 'number' ? `${width}px` : `${width}`)};
  min-height: ${({ height = '210px' }) =>
    typeof height === 'number' ? `${height}px` : `${height}`};

  padding: 26px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.color.gray50};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    margin-bottom: 16px;
  }

  & h2 {
    ${FONT_STYLES.EMP2_BODY1}
  }

  & span {
    margin-top: 8px;
    color: ${({ theme }) => theme.color.gray500};
    text-align: center;
    ${FONT_STYLES.EMP2_CAPTION}
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BackdropContainer = styled.div<{ $secondModal?: boolean }>`
  z-index: ${({ theme }) => theme.zIndex.backdrop};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $secondModal }) =>
    $secondModal ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)'};
`;

export const PortalContainer = styled.div`
  position: fixed;

  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);
`;
