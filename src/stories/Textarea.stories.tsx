import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Textarea } from "../components/Atoms/Textarea";

const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "이름",
  },
};
