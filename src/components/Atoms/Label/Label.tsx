export interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export const Label = ({ children, required, ...props }: LabelProps) => {
  return (
    <label className="text-[16px] text-[var(--GrayScale-Gray80)]" {...props}>
      {children}
    </label>
  );
};
