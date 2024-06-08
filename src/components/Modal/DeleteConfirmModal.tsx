import React from 'react';
import * as S from './index.styles';
import theme from '../../styles/theme.styles';

import Warning from '../Icons/Warning';
import Button from '../Button';

interface DeleteConfirmModalProps {
  onClose: () => void;
  onDelete: () => void;
  selectedRowsLength: number;

  secondModal?: boolean;
}

export default function DeleteConfirmModal({
  onClose,
  selectedRowsLength,
  onDelete,

  secondModal = false,
}: DeleteConfirmModalProps) {
  const handleCloseModal = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <S.PopupContainer $secondModal={secondModal}>
      <S.TextWrapper>
        <Warning width={32} height={32} color={theme.color.fail} />
        <h2>{selectedRowsLength}개 항목을 삭제하시겠습니까?</h2>
        <span>삭제된 내용은 복구할 수 없습니다.</span>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <Button
          size="md"
          variants="outline"
          onClick={handleDelete}
          disabled={selectedRowsLength < 0 ? true : false}
        >
          삭제
        </Button>
        <Button size="md" onClick={handleCloseModal}>
          취소
        </Button>
      </S.ButtonWrapper>
    </S.PopupContainer>
  );
}
