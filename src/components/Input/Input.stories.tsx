import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import Input from './Input';

/**
 * Input
 */
const meta: Meta<typeof Input> = {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
    error: false,
  },
  argTypes: {
    //disabled
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    // error
    error: {
      control: {
        type: 'boolean',
      },
    },
    // error message
    errorMessage: {
      control: 'text',
    },
    // onChange
    onChange: {
      onClick: {
        control: false,
      },
    },
    // name
    name: {
      control: false,
    },
    // width
    width: {
      control: 'number',
    },
  },
};

export default meta;

export const Default = (args: any) => {
  return (
    <Container>
      <Input {...args} />
    </Container>
  );
};

/**
 * * 비제어형
 * * useState, onChange 사용 시
 */
export const InputState = (args: any) => {
  const [value, setValue] = useState('');

  const handleDateChange = (value: any) => {
    console.log('date value>>', value);

    setValue(value);
  };

  return (
    <Container>
      <Input {...args} value={value} onChange={handleDateChange} />
    </Container>
  );
};

type Story = StoryObj<typeof Input>;

const Container = styled.div`
  width: 400px;
  height: 200px;
`;
