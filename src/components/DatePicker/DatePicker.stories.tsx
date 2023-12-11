import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import DatePicker from './DatePicker';

/**
 * DatePicker
 */
const meta: Meta<typeof DatePicker> = {
  title: 'common/DatePicker',
  component: DatePicker,
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
      <DatePicker {...args} />
    </Container>
  );
};

/**
 * * 비제어형
 * * useState, onChange 사용 시
 */
export const DatePickerState = (args: any) => {
  const [date, setDate] = useState('');

  const handleDateChange = (value: any) => {
    console.log('date value>>', value);

    setDate(value);
  };

  return (
    <Container>
      <DatePicker {...args} value={date} onChange={handleDateChange} />
    </Container>
  );
};

type Story = StoryObj<typeof DatePicker>;

const Container = styled.div`
  width: 400px;
  height: 200px;
`;
