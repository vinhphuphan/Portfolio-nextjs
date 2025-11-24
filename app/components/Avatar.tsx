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
      src="https://raw.githubusercontent.com/vinhphuphan/vinhphuphan.github.io/refs/heads/main/src/assets/img/Cutbody.jpg"
    />

  );
};

export default Avatar;
