import { useCallback, useEffect, useMemo } from 'react';
import { cn } from '../../../utils/cn';

type ModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';

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
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleEscape]);

  //배경 클릭 처리 함수
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent) => {
      if (!closeOnBackdropClick) return;
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose],
  ); // 의존성 배열 추가

  const getPositionClass = useMemo(() => {
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
  }, [position]);

  return (
    <div
      className={cn(
        'fixed inset-0 flex',
        getPositionClass,
        showBackdrop ? 'bg-black/50' : 'bg-transparent',
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={cn('rounded-lg border border-gray-200 bg-white p-6 shadow-lg', {
          'w-80 max-w-sm': size === 'sm',
          'w-96 max-w-md': size === 'md',
          'w-[32rem] max-w-lg': size === 'lg',
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};
