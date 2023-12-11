import { styled } from 'styled-components';

export const PopupContainer = styled.div<{ $secondModal?: boolean }>`
  z-index: ${({ theme, $secondModal }) =>
    $secondModal ? theme.zIndex.secondModal : theme.zIndex.modal};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 360px;
  min-height: 210px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  & span {
    margin-top: 8px;
    color: ${({ theme }) => theme.color.gray500};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BackdropContainer = styled.div<{ $secondModal?: boolean }>`
  z-index: ${({ theme, $secondModal }) =>
    $secondModal ? theme.zIndex.secondBackDrop : theme.zIndex.modal};
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
