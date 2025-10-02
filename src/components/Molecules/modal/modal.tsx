import { useCallback, useEffect } from 'react';
import { cn } from '../../../utils/cn';

type ModalPosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  position?: ModalPosition;
}
export const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  showBackdrop = true,
  closeOnBackdropClick = true,
  position = 'center',
}: ModalProps) => {
  // useCallback: 함수 메모이제이션
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onclose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
  if (!isOpen) return null;

  //배경 클릭 처리 함수
  const handleBackedClick = (event: React.MouseEvent) => {
    if (!closeOnBackdropClick) return; // 옵션 off면 무시
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const getPositionClass = () => {
    switch (position) {
      case 'top':
        return 'items-start justify-center pt-8';
      case 'bottom':
        return 'items-end justify-center pb-8';
      case 'left':
        return 'items-center justify-start pl-8';
      case 'right':
        return 'items-center justify-end pr-8';
      case 'top-left':
        return 'items-start justify-start p-8';
      case 'top-right':
        return 'items-start justify-end p-8';
      case 'bottom-left':
        return 'items-end justify-start p-8';
      case 'bottom-right':
        return 'items-end justify-end p-8';
      case 'center':
      default:
        return 'items-center justify-center';
    }
  };
  return (
    <div
      className={cn(
        'fixed inset-0 flex',
        getPositionClass(),
        showBackdrop ? 'bg-black/50' : 'bg-transparent',
      )}
      onClick={handleBackedClick}
    >
      <div
        className={cn('rounded-lg bg-white p-6', {
          'w-sm': size === 'sm',
          'w-md': size === 'md',
          'w-lg': size === 'lg',
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};
