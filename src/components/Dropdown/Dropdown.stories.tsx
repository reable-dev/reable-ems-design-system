import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import Dropdown from './Dropdown';

/**
 * Dropdown
 */
const meta: Meta<typeof Dropdown> = {
  title: 'common/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

/** 실 구분 options */
const roomTypeOptions = [
  { value: '0000', label: '주거공간' },
  { value: '0001', label: '소규모 사무실' },
  { value: '0002', label: '대규모 사무실' },
  { value: '0003', label: '회의실 및 세미나실' },
  { value: '0004', label: '강당' },
  { value: '0005', label: '구내식당' },
  { value: '0006', label: '화장실' },
  { value: '0007', label: '그 외 체류공간' },
  { value: '0008', label: '부속공간' },
  { value: '0009', label: '창고/설비/문서실' },
  { value: '0010', label: '전산실' },
  { value: '0011', label: '주방 및 조리실' },
  { value: '0012', label: '병실' },
  { value: '0013', label: '객실' },
  { value: '0014', label: '교실' },
  { value: '0015', label: '강의실' },
  { value: '0016', label: '매장' },
  { value: '0017', label: '전시실' },
  { value: '0018', label: '열람실' },
  { value: '0019', label: '체육시설' },
];

export const Default = (args: any) => {
  return (
    <Container>
      <Dropdown {...args} options={roomTypeOptions} />
    </Container>
  );
};

/**
 * * 비제어형
 * * useState, onChange 사용 시
 */
export const DropdownState = (args: any) => {
  const [value, setValue] = useState('');

  const handleDropdownChange = (value: any) => {
    console.log('dropdown value>>', value);

    setValue(value);
  };

  return (
    <Container>
      <Dropdown {...args} value={value} onChange={handleDropdownChange} options={roomTypeOptions} />
    </Container>
  );
};

type Story = StoryObj<typeof Dropdown>;

const Container = styled.div`
  width: 400px;
  height: 200px;
`;
