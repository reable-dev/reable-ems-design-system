import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import Search from './Search';

/**
 * Search
 */
const meta: Meta<typeof Search> = {
  title: 'common/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

export const Default = (args: any) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Container>
      <Search {...args} value={searchValue} onChange={handleSearchValue} />
    </Container>
  );
};

type Story = StoryObj<typeof Search>;

const Container = styled.div`
  width: 400px;
  height: 200px;
`;
