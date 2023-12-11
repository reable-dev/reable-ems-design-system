import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

export interface ModalPortalProps {
  children: React.ReactNode;
  open?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export default function ModalPortal({ children, open }: ModalPortalProps) {
  const [mounted, setMounted] = useState(false);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined') return <></>;

  return mounted && open ? (
    ReactDom.createPortal(
      <div onClick={stopPropagation}>{children}</div>,
      document.getElementById('modal-root') as HTMLElement
    )
  ) : (
    <></>
  );
}
