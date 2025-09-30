import { useState, useRef, useEffect } from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Dropdown = ({
  options,
  placeholder = "선택하세요",
  value,
  onChange,
  disabled = false,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef} {...props}>
      <button
        type="button"
        className={`
          flex items-center justify-between w-full gap-2.5 border-2 border-transparent rounded-xl py-2.5 px-4 
          bg-[var(--GrayScale-Gray5)] text-[var(--GrayScale-Gray40)] 
          focus:outline-none
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-[var(--GrayScale-Gray10)]"
          }
          ${isOpen ? "border-[var(--OrangeScale-Orange50)]" : ""}
        `}
        onClick={handleToggle}
        disabled={disabled}
      >
        <span
          className={` ${
            selectedOption ? "text-[var(--GrayScale-Gray80)]" : placeholder
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && options.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-[var(--GrayScale-White)] border border-[var(--GrayScale-Gray20)] rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`
                w-full px-4 py-2 text-left hover:bg-[var(--GrayScale-Gray5)] 
                focus:bg-[var(--GrayScale-Gray5)] focus:outline-none
                first:rounded-t-xl last:rounded-b-xl
                ${
                  value === option.value
                    ? "bg-[var(--OrangeScale-Orange5)] text-[var(--OrangeScale-Orange50)]"
                    : "text-[var(--GrayScale-Gray80)]"
                }
              `}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
