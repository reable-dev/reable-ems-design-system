import { useContext, useEffect } from 'react';

import { ModalContext } from './ModalContext';

const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === null || modalContext === undefined) {
    throw new Error('useModalContext는 Modal Provider 안에서 사용해야 합니다.');
  }

  useEffect(() => {
    return () => modalContext.closeAllModals();
  }, []);

  return modalContext;
};

export default useModalContext;
