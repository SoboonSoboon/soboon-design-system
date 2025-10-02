import { memo, useState } from 'react';

interface cardContentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface cardProps extends cardContentProps {
  width?: string;
  height?: string;
}

interface cardImageProps {
  className?: string;
  src: string;
  alt: string;
}

export const LikeButton = memo(
  ({ liked = false, onChange }: { liked?: boolean; onChange?: (liked: boolean) => void }) => {
    const [isLiked, setIsLiked] = useState(liked);

    const handleLike = () => {
      const next = !isLiked;
      setIsLiked(next);
      onChange?.(next);
    };

    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-4 right-4 cursor-pointer"
        onClick={handleLike}
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          fill={isLiked ? '#FF4805' : '#4e4e4e'}
          stroke={isLiked ? '#FF4805' : '#4e4e4e'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export const Card = ({ className, children, width = '306px', height = '376px' }: cardProps) => {
  return (
    <div className={`${className} select-none`} style={{ width: `${width}`, height: `${height}` }}>
      {children}
    </div>
  );
};

// todo: 이미지 로드 실패 시 대체 이미지 표시 기능 추가
export const CardImage = ({ className, src, alt }: cardImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} mb-5 h-[200px] w-full rounded-lg object-cover`}
      loading="lazy"
      decoding="async"
    />
  );
};

export const CardTitle = ({ className, children }: cardContentProps) => {
  return <h3 className={`${className} mb-3 text-2xl text-[#1a1a1a]`}>{children}</h3>;
};

export const CardSubtitle = ({ className, children }: cardContentProps) => {
  return <p className={`${className} text-[#1a1a1a]`}>{children}</p>;
};

export const CardContent = ({ className, children }: cardContentProps) => {
  return <div className={`${className} relative text-left`}>{children}</div>;
};

export const CardFooter = ({ className, children }: cardContentProps) => {
  return <div className={className}>{children}</div>;
};

export const Line = ({ className }: cardContentProps) => {
  return <div className={`${className} my-5 h-[1px] w-full bg-gray-200`}></div>;
};

interface mainCardProps {
  classname?: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

// todo: 구조 파괴시 경고 메시지 발생
export const MainCard = ({ classname, image, alt, title, subtitle }: mainCardProps) => {
  return (
    <>
      <Card className={classname}>
        <CardContent>
          <LikeButton />
          <CardImage src={image} alt={alt} />
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardContent>
        <Line />
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
