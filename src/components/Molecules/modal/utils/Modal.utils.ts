export const getPositionClass = (position: string) => {
  switch (position) {
    case 'top':
      return 'items-start justify-center pt-8';
    case 'bottom':
      return 'items-end justify-center pb-8';
    case 'left':
      return 'items-center justify-start pl-8';
    case 'right':
      return 'items-center justify-end pr-8';
    case 'center':
    default:
      return 'items-center justify-center';
  }
};

export const getSizeClass = (size: string) => {
  switch (size) {
    case 'sm':
      return 'w-80 max-w-sm';
    case 'md':
      return 'w-96 max-w-md';
    case 'lg':
      return 'w-[32rem] max-w-lg';
    default:
      return 'w-96 max-w-md';
  }
};
