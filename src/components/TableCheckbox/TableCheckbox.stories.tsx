import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import TableCheckbox from './TableCheckbox';

/**
 * Checkbox
 */
const meta: Meta<typeof TableCheckbox> = {
  title: 'common/TableCheckbox',
  component: TableCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

export const Default = (args: any) => {
  const [checkedItems, setCheckedItems] = useState(new Map<string, boolean>());

  console.log('checkedItems>>', checkedItems);

  const handleItemCheckbox = (id: string) => {
    setCheckedItems((prev) => {
      const newCheckedItems = new Map(prev);
      if (newCheckedItems.get(id)) {
        newCheckedItems.delete(id);
      } else {
        newCheckedItems.set(id, true);
      }

      return newCheckedItems;
    });
  };

  const checkboxMap = [
    { id: 'first-checkbox', span: '첫번째' },
    { id: 'second-checkbox', span: '두번째' },
    { id: 'third-checkbox', span: '세번째' },
  ];

  return (
    <Container>
      {checkboxMap.map((item) => {
        const { id, span } = item;
        return (
          <div key={id}>
            <span>{span}</span>
            <TableCheckbox
              {...args}
              id={`storybook-checkbox-${id}`}
              checked={checkedItems.get(id) || false}
              onChange={() => handleItemCheckbox(id)}
            />
          </div>
        );
      })}
    </Container>
  );
};

type Story = StoryObj<typeof TableCheckbox>;

const Container = styled.div`
  width: 400px;
  height: 200px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  & .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
