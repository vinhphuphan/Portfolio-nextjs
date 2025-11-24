"use client";

interface AvatarProps {
  height?: number;
  width?: number;
}

const Avatar: React.FC<AvatarProps> = ({ height = 12, width = 12 }) => {

  return (
    <img
      alt="User Avatar"
      height={height}
      width={width}
      className="object-cover w-full h-full"
      src="https://raw.githubusercontent.com/vinhphuphan/Portfolio-nextjs/refs/heads/main/public/images/Cutbody.jpg"
    />

  );
};

export default Avatar;
