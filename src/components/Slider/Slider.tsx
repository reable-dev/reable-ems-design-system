import React, { useState } from 'react';
import * as S from './index.styles';

export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  width?: string | number;
}

export default function Slider({
  value = 0,
  min = 0,
  max = 100,
  onChange,
  disabled,
  width = 'auto',
}: SliderProps) {
  const [currValue, setCurrValue] = useState(value);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setCurrValue(newValue);
    onChange(newValue);
  };

  const fillWidth = ((currValue - min) / (max - min)) * 100;

  return (
    <S.SliderContainer width={width}>
      <S.SliderRail disabled={disabled} />
      <S.SliderFillTrack fill={`${fillWidth}%`} disabled={disabled} />
      <S.Slider
        type="range"
        value={currValue}
        min={min}
        max={max}
        onChange={handleSliderChange}
        disabled={disabled}
        step={0.5}
      />
    </S.SliderContainer>
  );
}
