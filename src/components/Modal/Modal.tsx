import React from 'react';

import Backdrop from '../Modal/Backdrop';
import ModalPortal from '../Modal/ModalPortal';

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  backdropClosable?: boolean;
  children: React.ReactNode;
  secondModal?: boolean;

  //
  modalId?: string;
}

export default function Modal({
  isOpen = true,
  onClose,
  backdropClosable = false,
  children,
  secondModal = false,
  //
  modalId,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Backdrop onClose={onClose} backdropClosable={backdropClosable} secondModal={secondModal}>
      <ModalPortal open={isOpen}>{modalId && children}</ModalPortal>
    </Backdrop>
  );
}
