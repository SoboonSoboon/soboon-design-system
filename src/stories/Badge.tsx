import * as React from 'react';
export interface BadgeProps extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> {
  count?: number;
  showZero?: boolean;
  max?: number;
}
function formatCount(value: number, max: number): string {
  return value > max ? `${max}+` : String(value);
}
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ count, showZero = false, max = 999, className, ...rest }, ref) => {
    if (count === undefined || !Number.isFinite(count)) return null;
    if (!showZero && count === 0) return null;
    const text = formatCount(count, max);

    const base =
      'inline-flex items-center justify-center h-4 min-w-5 px-[7px] rounded-full bg-gray-900  text-xs font-semibold text-white'; // 디자인 수정예정
    return (
      <span
        ref={ref}
        role="status"
        aria-label={`알림 ${text}`}
        className={className ? `${base} ${className}` : base}
        {...rest}
      >
        {text}
      </span>
    );
  }
);
