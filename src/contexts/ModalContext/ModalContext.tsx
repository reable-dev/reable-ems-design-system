import React, { PropsWithChildren, createContext, useState } from 'react';

export interface ModalContextType {
  modals: { [modalId: string]: boolean };
  modalId: string | null;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  closeAllModals: () => void;
  onToggleModal: (modalId: string) => (action: 'open' | 'close') => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({ children }: PropsWithChildren) {
  const [modals, setModals] = useState({});
  const [modalId, setModalId] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: true });
    setModalId(modalId);
  };

  const closeModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: false });
    setModalId(null);
  };

  const closeAllModals = () => {
    setModals({});
    setModalId(null);
  };

  const onToggleModal: ModalContextType['onToggleModal'] = (modalId) => (action) => {
    action === 'open' ? openModal(modalId) : closeModal(modalId);
  };

  const modalValue = {
    modals,
    modalId,
    openModal,
    closeModal,
    closeAllModals,
    onToggleModal,
  };

  return <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>;
}
