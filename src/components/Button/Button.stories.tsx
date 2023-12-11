import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import theme from '../../styles/theme.styles';

import Button from './Button';
import { BUTTON_PADDING_SIZE } from './index.styles';
import Warning from '../Icons/Warning';
import CloseRound from '../Icons/CloseRound';
import WarningSVG from '../Icons/Warning';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variants: 'primary',
    size: 'lg',
    loading: false,
    onClick: () => {
      alert('click');
    },
  },
  argTypes: {
    // children
    children: {
      control: {
        type: 'text',
      },
      description:
        '버튼 내용을 입력할 수 있습니다.<br> 원하는 컴포넌트, 텍스트 등을 넣을 수 있습니다.',
    },
    // variants
    variants: {
      description: 'type으로 버튼 모양을 변경할 수 있습니다.',
      options: {
        primary: 'primary',
        secondary: 'secondary',
        outline: 'outline',
        link: 'link',
        warning: 'warning',
        none: undefined,
      },
      control: {
        type: 'radio',
      },
    },
    // size
    size: {
      description: '버튼 size를 지정합니다.',
      options: Object.keys({ ...BUTTON_PADDING_SIZE, none: undefined }),
      control: {
        type: 'radio',
      },
    },
    // loading
    loading: {
      description: 'loading 유/무를 나타냅니다.<br>',
      control: {
        type: 'boolean',
      },
    },
    // icon
    icon: {
      description: '원하는 icon을 넣을 수 있습니다.',
      options: {
        warning: 'Warning',
        closeRound: 'CloseRound',
        none: undefined,
      },
      control: {
        type: 'radio',
      },
    },
    // rightIcon
    rightIcon: {
      description: 'icon의 위치를 오른쪽에 넣을 수 있습니다.',
      options: {
        warning: 'Warning',
        closeRound: 'CloseRound',
        none: undefined,
      },
      control: {
        type: 'radio',
      },
    },
    // style
    style: {
      description: '원하는 css style을 적용할 수 있습니다.',
    },
    // disabled
    disabled: {
      description: '활성화/비활성화를 설정합니다.',
      control: {
        type: 'boolean',
      },
    },
    // link
    link: {
      description:
        '버튼이 link 스타일로 변경됩니다. <br> 원하는 link를 지정해서 next/link href="{link}"를 사용해서 routing 합니다 <br> type이 link 일때만 적용됩니다.',
      control: {
        type: 'string',
      },
    },
    // onClick
    onClick: {
      control: false,
    },
  },
};

export default meta;

const IconMap: any = {
  Warning: <Warning width={16} height={16} color={theme.color.gray100} />,
  CloseRound: <CloseRound width={16} height={16} color={theme.color.gray100} />,
  none: undefined,
};

export const Default = (args: any) => {
  const rightIconComponent = IconMap[args.rightIcon];
  const iconComponent = IconMap[args.icon];
  return <Button {...args} rightIcon={rightIconComponent} icon={iconComponent} />;
};

type Story = StoryObj<typeof Button>;

export const Sizes = () => {
  return (
    <GridContainer>
      {/* 1번째 라인 */}
      <GridCell>구분</GridCell>
      <GridCell>primary</GridCell>
      <GridCell>secondary</GridCell>
      <GridCell>outline</GridCell>
      <GridCell>link</GridCell>
      <GridCell>warning</GridCell>
      {/* lg */}
      <GridCell>lg (hover)</GridCell>
      <Button variants="primary" size="lg">
        Button
      </Button>
      <Button variants="secondary" size="lg">
        Button
      </Button>
      <Button variants="outline" size="lg">
        Button
      </Button>
      <Button variants="link" size="lg">
        Button
      </Button>
      <Button variants="warning" size="lg">
        Button
      </Button>
      {/* md */}
      <GridCell>md (hover)</GridCell>
      <Button variants="primary" size="md">
        Button
      </Button>
      <Button variants="secondary" size="md">
        Button
      </Button>
      <Button variants="outline" size="md">
        Button
      </Button>
      <Button variants="link" size="md">
        Button
      </Button>
      <Button variants="warning" size="md">
        Button
      </Button>
      {/* sm */}
      <GridCell>sm (hover)</GridCell>
      <Button variants="primary" size="sm">
        Button
      </Button>
      <Button variants="secondary" size="sm">
        Button
      </Button>
      <Button variants="outline" size="sm">
        Button
      </Button>
      <Button variants="link" size="sm">
        Button
      </Button>
      <Button variants="warning" size="sm">
        Button
      </Button>
      {/* disabled lg */}
      <GridCell>disabled lg</GridCell>
      <Button variants="primary" size="lg" disabled>
        Button
      </Button>
      <Button variants="secondary" size="lg" disabled>
        Button
      </Button>
      <Button variants="outline" size="lg" disabled>
        Button
      </Button>
      <Button variants="link" size="lg" disabled>
        Button
      </Button>
      <Button variants="warning" size="lg" disabled>
        Button
      </Button>
      {/* disabled md */}
      <GridCell>disabled md</GridCell>
      <Button variants="primary" size="md" disabled>
        Button
      </Button>
      <Button variants="secondary" size="md" disabled>
        Button
      </Button>
      <Button variants="outline" size="md" disabled>
        Button
      </Button>
      <Button variants="link" size="md" disabled>
        Button
      </Button>
      <Button variants="warning" size="md" disabled>
        Button
      </Button>
      {/* disabled sm */}
      <GridCell>disabled sm</GridCell>
      <Button variants="primary" size="sm" disabled>
        Button
      </Button>
      <Button variants="secondary" size="sm" disabled>
        Button
      </Button>
      <Button variants="outline" size="sm" disabled>
        Button
      </Button>
      <Button variants="link" size="sm" disabled>
        Button
      </Button>
      <Button variants="warning" size="sm" disabled>
        Button
      </Button>
      {/* loading */}
      <GridCell>loading lg</GridCell>
      <Button variants="primary" size="sm" loading>
        Button
      </Button>
      <Button variants="secondary" size="sm" loading>
        Button
      </Button>
      <Button variants="outline" size="sm" loading>
        Button
      </Button>
      <Button variants="link" size="sm" loading>
        Button
      </Button>
      <Button variants="warning" size="sm" loading>
        Button
      </Button>
      {/* rightIcon*/}
      <GridCell>right icon lg</GridCell>
      <Button
        variants="primary"
        size="lg"
        rightIcon={<WarningSVG width={12} height={12} color={theme.color.warning} />}
      >
        Button
      </Button>
      <Button variants="secondary" size="lg" rightIcon={<WarningSVG />}>
        Button
      </Button>
      <Button variants="outline" size="lg" rightIcon={<WarningSVG />}>
        Button
      </Button>
      <Button variants="link" size="lg" rightIcon={<WarningSVG />}>
        Button
      </Button>
      <Button variants="warning" size="lg" rightIcon={<WarningSVG />}>
        Button
      </Button>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

const GridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border: 1px solid gray;
`;
