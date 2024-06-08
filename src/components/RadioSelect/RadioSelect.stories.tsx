import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import theme from '../../styles/theme.styles';

import RadioSelect from './RadioSelect';

const meta: Meta<typeof RadioSelect> = {
  title: 'common/RadioSelect',
  component: RadioSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: 'radio-select',
    checked: false,
    disabled: false,
    size: 'sm',
  },
  argTypes: {
    id: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
  },
};

export default meta;

export const Default = (args: any) => {
  const [checked, setChecked] = useState(args.checked);

  const handleNotifier = (checked: boolean) => {
    setChecked(checked);
  };

  return <RadioSelect {...args} checked={checked} notifier={handleNotifier} />;
};

export const Disabled = (args: any) => <RadioSelect {...args} disabled={true} />;

type Story = StoryObj<typeof RadioSelect>;
