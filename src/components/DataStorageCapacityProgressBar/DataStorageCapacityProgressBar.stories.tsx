import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import DataStorageCapacityProgressBar from './DataStorageCapacityProgressBar';

/**
 * 자료보관함 사용량 Progress Bar
 */
const meta: Meta<typeof DataStorageCapacityProgressBar> = {
  title: 'common/DataStorageCapacityProgressBar',
  component: DataStorageCapacityProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 10,
    max: 80,
    // 필요시 추가
    disabled: false,
  },
};

export default meta;

export const Default = (args: any) => {
  return (
    <Container>
      <DataStorageCapacityProgressBar {...args} />
    </Container>
  );
};

type Story = StoryObj<typeof DataStorageCapacityProgressBar>;

const Container = styled.div`
  width: 400px;
  height: 200px;
`;
