export default function ProfileImg({ profile = "" }: { profile: string }) {
  return (
    <img 
      src={profile} 
      alt="profileImage" 
      className="w-full h-full object-cover"
    />
  );
}