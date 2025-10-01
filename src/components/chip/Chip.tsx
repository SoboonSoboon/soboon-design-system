import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ChipProps {
  children: ReactNode;
  size?: 'sm' | 'lg';
  isActive: boolean;
  onClick: () => void;
}
export const Chip = ({ children, size = 'lg', isActive, onClick }: ChipProps) => {
  return (
    <div
      role="button"
      onClick={() => {
        if (!isActive) onClick();
      }}
      className={cn(
        'select-none rounded-full font-medium transition-colors min-w-12  items-center justify-center h-9 inline-flex',
        size === 'lg' ? ' px-4 text-sm' : ' px-3 text-xs',
        isActive ? 'bg-gray-900 text-white pointer-events-none' : 'bg-gray-50 text-black cursor-pointer'
      )}
    >
      {children}
    </div>
  );
};
