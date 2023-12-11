import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { styled } from 'styled-components';

import Switch from '../Switch';

export const Default = (args: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheck = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <Container>
      <Switch {...args} checked={isChecked} onToggle={onClickCheck} />
    </Container>
  );
};

const meta: Meta<typeof Switch> = {
  title: 'common/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      description: '비활성화 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      options: [true, false],
      control: {
        type: 'boolean',
      },
    },
    checked: {
      description: '체크상태 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      options: [true, false],
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const DisabledSwitch: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};

const Container = styled.div`
  width: 100%;
  height: 400px;
`;
