import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { TextInput } from "../components/Atoms/TextInput";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력하세요",
  },
};
