import React from 'react';
import * as S from './index.styles';

export interface DataStorageCapacityProgressBarProps {
  width?: string | number;
  height?: string | number;

  disabled?: boolean;
  value?: number;
  max?: number;
}

export default function DataStorageCapacityProgressBar({
  width = '200',
  height = '4',
  disabled = false,
  value = 0,
  max = 80,
}: DataStorageCapacityProgressBarProps) {
  const calPercent = (value / max) * 100;

  return (
    <S.Container>
      <S.StorageNumberWrapper>
        <div className="current-storage">{value} GB</div>
        <div className="slash">/</div>
        <div className="max-storage">{max} GB</div>
      </S.StorageNumberWrapper>
      <S.Outer width={width} height={height}>
        <S.Inner>
          <S.Progress value={calPercent}></S.Progress>
        </S.Inner>
      </S.Outer>
    </S.Container>
  );
}
