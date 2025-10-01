import { DateSortToggle } from '../../components/Atoms';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Atoms/DateFilter',
  component: DateSortToggle,
  parameters: {
    layout: 'centered',
  },
  args: {
    className: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateSortToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
const [dateFilter, setDateFilter] = useState<"desc" | "asc">("desc");

	return (
		<DateFilter
			value={dateFilter}
			onChange={(value) => setDateFilter(value)}
		/>
	)`,
      },
    },
  },
};
