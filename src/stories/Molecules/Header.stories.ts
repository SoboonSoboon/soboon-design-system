import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Header } from '../../components/Molecules';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    // onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: '너 구리',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiJxZHaa1esOxgoZRV9XEIiGrMXF1p3mfAw&s',
    },
  },
};

export const LoggedOut: Story = {};
