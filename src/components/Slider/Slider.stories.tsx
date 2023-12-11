import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'common/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 100,
    width: '275px',
  },
  argTypes: {
    // min
    min: {
      description: '최소 value값을 설정합니다.',
      control: {
        type: 'number',
      },
    },
    // max
    max: {
      description: '최대 value값을 설정합니다.',
      control: {
        type: 'number',
      },
    },
    // width
    width: {
      description: 'slider thumb의 width를 설정합니다.',
      control: {
        type: 'number',
      },
    },
    //disabled
    disabled: {
      description: '비활성화 여부를 설정합니다.',
      control: {
        type: 'boolean',
      },
    },
    //checked
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default = (args: any) => {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (value: number) => {
    if (isNaN(value)) {
      return;
    }

    setInputValue(value);
  };

  return (
    <Container>
      <Slider {...args} value={inputValue} onChange={handleChange} />
    </Container>
  );
};

export const WidthSlider = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (value: number) => {
    if (isNaN(value)) return;

    setInputValue(value);
  };

  return (
    <Container>
      <Slider width={100} value={inputValue} onChange={handleChange} />
    </Container>
  );
};

export const DisabledSlider = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (value: number) => {
    if (isNaN(value)) {
      return;
    }

    setInputValue(value);
  };

  return (
    <Container>
      <Slider disabled={true} value={inputValue} onChange={handleChange} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px auto;
`;
