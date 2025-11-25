"use client";

import Link from "next/link";
import { Button } from "../button";
import SocialIcon from "../SocialIcon";
import { AiFillGithub } from "react-icons/ai";

interface ProjectCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  year: string;
  link: string;
  github_link: string;
  background_class: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  children,
  year,
  link,
  github_link,
  background_class,
}) => {
  return (
    <div className="relative group cursor-pointer flex flex-col 2xl:flex-row gap-8 2xl:gap-20">
      {/* left side */}
      <div className="relative flex flex-1 items-center">
        <div className="flex flex-col gap-1 md:gap-2 text-left">
          {/* year */}
          <div className="text-start text-xs sm:text-sm font-base text-primary">
            {year}
          </div>
          {/* Project title */}
          <div className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-normal text-primary">{title}</div>
          {/* Description */}
          {children ? (
            <div className="text-[10px] md:text-sm font-normal 2xl:font-base text-primary">
              {children}
            </div>
          ) : (
            <div className="text-[10px] md:text-sm font-normal 2xl:font-base text-primary">
              {description}
            </div>
          )}
        </div>
      </div>

      {/* Right side */}
      <Link href={link} target="_blank" rel="noopener noreferrer" className="">
        <div
          className={`w-full 2xl:w-[29.5rem] h-[15rem] sm:h-[20rem] md:h-[25rem] 2xl:h-[33rem] flex-1 rounded-xl overflow-hidden ${background_class} cursor-pointer shadow-customShadow`}
        ></div>
      </Link>

      {/* Link button */}
      <div className="absolute bottom-0 left-0 hidden 2xl:flex gap-4 items-center transition-transform transform translate-x-[20%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-700">
        <div className="flex gap-4 items-center">
          {/* View site button */}
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button className="bg-neutral-200 hover:bg-[#fafbfc] rounded-lg py-6 px-8 transition">
              <div className="font-semibold text-base text-neutral-600">
                View site
              </div>
            </Button>
          </Link>

          {/* Github button */}
          <SocialIcon href={github_link} icon={AiFillGithub} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
