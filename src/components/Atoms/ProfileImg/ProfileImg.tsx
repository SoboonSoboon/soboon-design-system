export function ProfileImg({ profile = '' }: { profile: string }) {
  return <img src={profile} alt="profileImage" className="h-full w-full object-cover" />;
}
