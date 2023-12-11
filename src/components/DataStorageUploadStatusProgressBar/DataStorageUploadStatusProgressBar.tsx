import React from 'react';
import * as S from './index.styles';

export interface DataStorageUploadStatusProgressBarProps {
  width?: string | number;
  height?: string | number;

  disabled?: boolean;
  value?: number;
  max?: number;
}

/**
 * 자료보관함 업로드 상태 progress bar
 */
export default function DataStorageUploadStatusProgressBar({
  width = '100%',
  height,

  disabled = false,
  value = 0,
  max = 100,
}: DataStorageUploadStatusProgressBarProps) {
  const calPercent = (value / max) * 100;

  return (
    <S.Container width={width}>
      <S.Inner>
        <S.Progress value={calPercent}></S.Progress>
      </S.Inner>
    </S.Container>
  );
}
