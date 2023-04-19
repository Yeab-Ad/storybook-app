import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    btnColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    btnColor: "#34d399",
    label: "Card",
    title: "Primary",
    content:
      "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
  },
};

export const Secondary: Story = {
  args: {
    btnColor: "#3579d4",
    label: "Card",
    title: "Secondary",
    content:
      "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
  },
};

export const Large: Story = {
  args: {
    btnColor: "#d43565",
    label: "Card",
    title: "Large",
    content:
      "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
  },
};

export const Small: Story = {
  args: {
    btnColor: "#ccd435",
    label: "Card",
    title: "Small",
    content:
      "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
  },
};
