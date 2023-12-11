import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import Pagination from './Pagination';

/**
 * Pagination
 */
const meta: Meta<typeof Pagination> = {
  title: 'common/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

export const Default = (args: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Pagination
        {...args}
        currentPage={currentPage}
        itemsPerPage={10}
        total={220}
        onPageChange={handlePage}
      />
    </Container>
  );
};

type Story = StoryObj<typeof Pagination>;

const Container = styled.div`
  width: 400px;
  height: 200px;
`;
