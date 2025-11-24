'use client'

import Link from "next/link"
import { IconType } from "react-icons";

interface SocialIconProps {
    href : string;
    icon: IconType;
    darkTheme? : boolean;
}

const SocialIcon:React.FC<SocialIconProps> = ({
    href,
    icon:Icon ,
    darkTheme
}) => {
  return (
    <Link 
    href={href}
    className={`${darkTheme ? "text-white text-2xl" : "text-primary shadow-xl p-3 rounded-full"} text-xl md:text-2xl lg:text-3xl hover:scale-110 transition duration-300`}
    target="_blank" rel="noopener noreferrer"
    >
        <Icon />
    </Link>
  )
}

export default SocialIcon;
