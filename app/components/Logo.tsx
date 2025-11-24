"use client";

import Image from "next/image";
import Link from "next/link";
import logoIcon from "../../public/images/logo.svg"

interface LogoProps {
  height?: number;
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ height = 12, width = 12 }) => {
  
  return (
    <Link href="/" aria-label="Home">
    <Image
      alt="logo"
      height={height}
      width={width}
      className="cursor-pointer"
      priority={true}
      src={logoIcon}
      />
    </Link>
  );
};

export default Logo;
