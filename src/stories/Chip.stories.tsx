import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'lg'],
    },
    isActive: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-[200px] ">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: '전체',
    size: 'lg',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    children: '냉장',
    size: 'lg',
    isActive: true,
  },
};

export const Small: Story = {
  args: {
    children: '신선',
    size: 'sm',
    isActive: false,
  },
};
