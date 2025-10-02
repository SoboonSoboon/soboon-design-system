import { forwardRef } from 'react';

interface CheckboxProps {
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, required = false, disabled = false, className, id, name }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        required={required}
        disabled={disabled}
        className={`${className}`}
        id={id}
        name={name}
      />
    );
  },
);
