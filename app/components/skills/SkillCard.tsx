"use client";

import { IconType } from "react-icons";

interface SkillCardProps {
  heading: string;
  description: string;
  icon: IconType;
  selected?: boolean;
  dont?: boolean;
  seoIcon? : boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({
  heading,
  description,
  icon: Icon,
  selected,
  dont,
  seoIcon
}) => {
  return (
    <div
      className={`${
        selected ? "bg-white rounded-xl shadow-customShadow" : "bg-transparent"
      } p-4 md:px-6 md:py-4 text-primary flex flex-col gap-3 md:gap-4 animate-slideToLeft transition duration-500`}
    >
      {/* Icon */}
      <div
        className={`${
          dont ? "text-[#ee4444]" : selected ? "text-blue-500" : ""
        } ${seoIcon ? "text-2xl" : "text-xl sm:text-2xl"} md:text-3xl 2xl:text-4xl`}
      >
        <Icon />
      </div>

      {/* Heading */}
      <div className="text-sm md:text-lg font-semibold">{heading}</div>

      {/* Description */}
      <div className="text-xs md:text-base font-normal text-left">
        {description}
      </div>
    </div>
  );
};

export default SkillCard;
