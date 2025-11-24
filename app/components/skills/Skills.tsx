"use client";

import Container from "../Container";
import { Button } from "../button";
import { useState } from "react";
import SkillCard from "./SkillCard";
import { PiNotePencilFill } from "react-icons/pi";
import { BsArrowsFullscreen } from "react-icons/bs";
import {
  IoCloseCircleOutline,
  IoCodeSlash,
  IoCopyOutline,
  IoSearchCircle,
  IoWarningOutline,
} from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { GoEyeClosed } from "react-icons/go";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { FiCalendar } from "react-icons/fi";

const Skills = () => {
  const [doButton, SetDoButton] = useState(true);

  return (
    <div className="w-full h-auto pt-20 pb-12 md:pb-20">
      <Container>
        <div className="flex flex-col gap-6 md:gap-8 2xl:gap-14">
          {/* The sliding button only appear from xl screen size to below */}
          <div className="flex items-center justify-center w-full h-auto">
            <div
              className={`flex 2xl:hidden items-center p-1 w-12 sm:w-16 h-7 sm:h-8 ${
                doButton ? "bg-blue-500" : "bg-neutral-200"
              } rounded-full overflow-hidden cursor-pointer relative`}
              onClick={() => SetDoButton((prev) => !prev)}
            >
              {/* The sliding circle */}
              <div
                className={`absolute left-0 w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full shadow-md transition-transform duration-500 ease-in-out ${
                  doButton ? "translate-x-[0.5rem]" : "translate-x-full"
                }`}
              ></div>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-row justify-center xl:justify-between items-center xl:items-end">
            {/* Left side */}
            <div className="flex flex-row 2xl:flex-col gap-[6px] sm:gap-2 2xl:gap-1">
              <div className="text-left text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl font-medium text-primary">
                What I
              </div>

              <div className="flex flex-row items-center text-left text-3xl 2xl:text-6xl font-medium text-primary gap-0 md:gap-2 transition-all duration-500">
                {/* Do and Dont */}
                <div
                  className={`relative w-7 sm:w-9 xl:w-16 h-7 sm:h-9 xl:h-16 ${
                    doButton ? "mr-0 2xl:mr-2" : "mr-6 sm:mr-10 2xl:mr-24"
                  } transition-all duration-500`}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      doButton ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-[#0086fc] text-lg sm:text-xl md:text-3xl xl:text-6xl">
                      do
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      doButton ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="text-[#ee4444] text-lg sm:text-xl md:text-3xl xl:text-6xl">
                      don't
                    </div>
                  </div>
                </div>

                {/* Sliding Button */}
                <div
                  className={`hidden 2xl:flex items-center justify-end p-1 w-20 h-12 ${
                    doButton ? "bg-blue-500" : "bg-neutral-200"
                  } rounded-full overflow-hidden relative cursor-pointer`}
                  onClick={() => SetDoButton((prev) => !prev)}
                >
                  {/* The sliding circle */}
                  <div
                    className={`w-11 h-11 bg-white rounded-full shadow-md transform transition-transform duration-500 ease-in-out ${
                      doButton ? "translate-x-0" : "translate-x-[-1.8rem]"
                    }`}
                  ></div>
                </div>

                <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl">
                  in my work
                </div>
              </div>
            </div>

            {/* Right side */}
            <Button
              className="hidden 2xl:flex bg-primary rounded-lg py-7 pl-7 pr-8 gap-1 hover:scale-105 duration-300 transition"
              onClick={() => {
                const projectSection = document.getElementById("projects");
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="font-medium text-base text-white">
                View all works
              </div>
            </Button>
          </div>

          <div className="flex flex-col xl:grid gap-4 md:gap-10 grid-cols-[repeat(3,minmax(200px,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-min max-w-[1024px] overflow-hidden p-0 relative w-full">
            {/* First Card */}
            {doButton ? (
              <SkillCard
                key="creative-expertise"
                selected
                icon={PiNotePencilFill}
                heading={"Creative Expertise"}
                description={
                  "Unique designs tailored to your brand, captivating users with innovative visuals."
                }
              />
            ) : (
              <SkillCard
                key="generic-designs"
                selected
                dont
                icon={IoCopyOutline}
                heading={"Generic Designs"}
                description={
                  "Relying on generic, uninspired templates that fail to make your brand stand out."
                }
              />
            )}

            {/* Second Card */}
            {doButton ? (
              <SkillCard
                key={"responsive-designs"}
                icon={BsArrowsFullscreen}
                heading={"Responsive Designs"}
                description={
                  "Ensuring seamless experiences across all devices, maximizing user engagement and satisfaction."
                }
              />
            ) : (
              <SkillCard
                key={"poor-team-player"}
                icon={IoCloseCircleOutline}
                heading={"Poor Team Player"}
                description={
                  "Struggling to collaborate effectively, leading to misalignment and inefficiency in teamwork."
                }
              />
            )}

            {/* Third Card */}
            {doButton ? (
              <SkillCard
                key={"seo-optimization"}
                icon={IoSearchCircle}
                heading={"SEO Optimization"}
                description={
                  "Elevating your online presence with strategies that boost search engine rankings effectively."
                }
                seoIcon
              />
            ) : (
              <SkillCard
                key={"low-visibility"}
                icon={GoEyeClosed}
                heading={"Low Visibility"}
                description={
                  "Neglecting visibility strategies, leading to low engagement and reduced online presence."
                }
              />
            )}

            {/* Fourth Card */}
            {doButton ? (
              <SkillCard
                key={"custom-solutions"}
                icon={IoCodeSlash}
                heading={"Custom Solutions"}
                description={
                  "Crafting bespoke websites that meet your specific needs, enhancing functionality and user experience."
                }
              />
            ) : (
              <SkillCard
                key="limited-adaptability"
                icon={HiOutlineFaceFrown}
                heading={"Limited Adaptability"}
                description={
                  "Resistance to learning new technologies, hindering innovation and project success."
                }
              />
            )}

            {/* Fifth Card */}
            {doButton ? (
              <SkillCard
                key="quick-turnaround"
                icon={IoMdThumbsUp}
                heading={"Quick Turnaround"}
                description={
                  "Meeting deadlines consistently, providing reliable services without compromising quality or efficiency."
                }
              />
            ) : (
              <SkillCard
                key="missed deadlines"
                icon={FiCalendar}
                heading={"Missed Deadlines"}
                description={
                  "Frequent delays due to inefficient processes, resulting in missed deadlines and budget overruns."
                }
              />
            )}

            {/* Sixth Card */}
            {doButton ? (
              <SkillCard
                key="exceptional-support"
                icon={SiTicktick}
                heading={"Exceptional Support"}
                description={
                  "Dedicated assistance during and after project completion, ensuring client satisfaction and success."
                }
              />
            ) : (
              <SkillCard
                key="inadequate-support"
                icon={IoWarningOutline}
                heading={"Inadequate Support"}
                description={
                  "Providing insufficient post-project support, cause client dissatisfaction and unresolved issues."
                }
              />
            )}
          </div>

          {/* Contact Me for small screen size */}
          <div className="flex items-center justify-center">
            <Button
              className="flex 2xl:hidden w-1/3 bg-primary rounded-lg py-3 md:py-7 pl-3 md:pl-7 pr-4 md:pr-8 gap-1 hover:scale-105 duration-300 transition"
              onClick={() => {
                const projectSection = document.getElementById("stacks");
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="font-meidum 2xl:font-semibold text-xs sm:text-sm 2xl:text-base text-white">
                View my stack
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
