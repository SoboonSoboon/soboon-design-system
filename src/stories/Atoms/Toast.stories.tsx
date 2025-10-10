import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, useToast } from '../../components/Atoms/Toast';

const meta = {
  title: 'Atoms/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## 설정 방법

\`\`\`tsx
import { ToastProvider } from '@soboon/design-system';

function App() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
\`\`\`

## 사용법

\`\`\`tsx
import { useToast } from '@soboon/design-system';

function App() {
  const { success, error, warning, info } = useToast();

  return (
    <div>
      <button onClick={() => success('성공!', '작업이 완료되었습니다.')}>
        성공 토스트
      </button>
      <button onClick={() => error('오류!', '다시 시도해주세요.')}>
        에러 토스트
      </button>
    </div>
  );
}
\`\`\`
				`,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>;

export default meta;

type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <div>
        <button
          onClick={() => toast('성공!', '작업이 완료되었습니다.')}
          className="cursor-pointer rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          기본 토스트
        </button>
      </div>
    );
  },
};

export const Success: Story = {
  render: () => {
    const { success } = useToast();

    return (
      <div>
        <button
          onClick={() => success('성공!', '작업이 완료되었습니다.')}
          className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          성공 토스트
        </button>
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const { error } = useToast();

    return (
      <div>
        <button
          onClick={() => error('오류!', '작업이 실패했습니다.')}
          className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          오류 토스트
        </button>
      </div>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const { warning } = useToast();

    return (
      <div>
        <button
          onClick={() => warning('경고!', '작업이 실패했습니다.')}
          className="cursor-pointer rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
        >
          경고 토스트
        </button>
      </div>
    );
  },
};

export const Info: Story = {
  render: () => {
    const { info } = useToast();

    return (
      <div>
        <button
          onClick={() => info('정보!', '작업이 실패했습니다.')}
          className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          정보 토스트
        </button>
      </div>
    );
  },
};
