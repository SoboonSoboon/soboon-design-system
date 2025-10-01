export default function Logo({
  color = 'black',
  width = 60,
  height = 60,
}: {
  color?: 'black' | 'white';
  width?: number;
  height?: number;
}) {
  const logoSrc = color === 'black' ? '/sbsb-logo-black.svg' : '/sbsb-logo-white.svg';

  return (
    <div>
      <img src={logoSrc} alt="Logo" width={width} height={height} />
    </div>
  );
}
