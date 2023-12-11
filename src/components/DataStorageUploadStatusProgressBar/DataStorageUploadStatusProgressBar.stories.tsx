import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import DataStorageUploadStatusProgressBar from './DataStorageUploadStatusProgressBar';

/**
 * 자료보관함 업로드 상태 프로그레스 바
 */
const meta: Meta<typeof DataStorageUploadStatusProgressBar> = {
  title: 'common/DataStorageUploadStatusProgressBar',
  component: DataStorageUploadStatusProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 10,
    max: 100,
  },
};

export default meta;

export const Default = (args: any) => {
  return (
    <Container>
      <DataStorageUploadStatusProgressBar {...args} />
    </Container>
  );
};

type Story = StoryObj<typeof DataStorageUploadStatusProgressBar>;

const Container = styled.div`
  width: 1000px;
  height: 200px;
`;
