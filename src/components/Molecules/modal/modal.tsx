import { useCallback, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-400/30"
      onClick={handleBackedClick}
    >
      <div className="rounded-lg bg-white p-6" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};
