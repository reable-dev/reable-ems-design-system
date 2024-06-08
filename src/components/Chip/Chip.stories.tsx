import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import theme from '../../styles/theme.styles';

import Chip from './Chip';
import ChipList, { OptionType } from './ChipList';

const meta: Meta<typeof Chip> = {
  title: 'common/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

export const Default = (args: any) => {
  return (
    <ChipContainer>
      <Chip prefixTitle="design system" {...args} />
    </ChipContainer>
  );
};

export const ChipListStory = (args: any) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType<string>[]>([
    { category: 'Category1', label: 'Option 1', value: '1' },
    { category: 'Category2', label: 'Option 2', value: '2' },
    { category: 'Category3', label: 'Option 3', value: '3' },
  ]);

  const handleDelete = (option: OptionType<string>) => {
    setSelectedOptions(selectedOptions.filter((item) => item.value !== option.value));
  };

  return <ChipList selectedOptions={selectedOptions} onDelete={handleDelete} {...args} />;
};

type Story = StoryObj<typeof Chip>;

const ChipContainer = styled.div`
  border: 1px solid ${theme.color.gray200};
  border-radius: 8px;
  padding: 4px 8px;
`;
