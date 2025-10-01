import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/Atoms';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  args: { count: 1, max: 999, showZero: false },
  argTypes: {
    count: { control: 'number' },
    max: { control: 'number' },
    showZero: { control: 'boolean' },
  },
  parameters: { layout: 'centered' },
};
export default meta;

type S = StoryObj<typeof Badge>;

export const ShowZero: S = { args: { count: 0, showZero: true } };
