import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../components/IconButton';
import { fn } from '@storybook/test';


const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: { control: "text", description: "이미지의 alt 속성", defaultValue: "icon"},
    onClick: { control: "text", description: "이미지의 경로", defaultValue: ""},
    iconPath: { control: "text", description: "버튼 클릭 이벤트"}
  },
  args: {
    onClick: fn(),
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: "https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/ic-public-delete-dark.svg",
  },
};

