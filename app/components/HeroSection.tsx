"use client";

import Image from "next/image";
import Container from "./Container";
import { Button } from "./button";
import StarIcon from "../../public/images/star.svg";
import Avatar from "./Avatar";

const HeroSection = () => {
  return (
    <div className="h-auto mb-2 md:mb-10">
      <Container>
        <div className="h-full w-full flex flex-col items-center justify-center gap-4">
          {/* Avatar */}
          <div className="w-24 xl:w-36 h-24 xl:h-36 rounded-full overflow-hidden animate-appear opacity-0 [--appear-delay:100ms]">
            <Avatar />
          </div>

          {/* First column*/}
          {/* Main content container */}
          <div className=" flex flex-col gap-2 justify-center px-4 sm:px-10 md:px-20">
            {/* First line */}
            <div className="w-full flex items-center justify-between gap-1">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary animate-perspectiveRotate opacity-0 [--rotate-delay:200ms]">
                I build
              </div>
              <div className="flex-shrink-0">
                <Image
                  alt="hero-section-3"
                  height={60}
                  width={120}
                  src={"/images/hero_section_3.avif"}
                  className="rounded-lg object-cover w-12 sm:w-16 md:w-20 xl:w-28 h-6 sm:h-8 md:h-10 xl:h-14 animate-appear opacity-0 [--appear-delay:200ms]"
                />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary animate-perspectiveRotate opacity-0 [--rotate-delay:200ms]">
                software
              </div>
              <div className="flex-shrink-0">
                <Image
                  alt="hero-section-1"
                  height={60}
                  width={120}
                  src={"/images/hero_section_1.avif"}
                  className="rounded-lg object-cover w-12 sm:w-16 md:w-20 xl:w-28 h-6 sm:h-8 md:h-10 xl:h-14 animate-appear opacity-0 [--appear-delay:200ms]"
                />
              </div>
            </div>

            {/* Second line */}
            <div className="w-full flex items-center justify-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  alt="hero-section-2"
                  height={60}
                  width={120}
                  src={"/images/hero_section_2.avif"}
                  className="rounded-lg object-cover w-12 sm:w-16 md:w-20 xl:w-28 h-6 sm:h-8 md:h-10 xl:h-14 animate-appear opacity-0 [--appear-delay:300ms]"
                />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary text-right animate-perspectiveRotate opacity-0 [--rotate-delay:300ms] ">
                to solve problems.
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="flex gap-2 justify-center px-4 sm:px-28 2xl:px-72 py-4 animate-perspectiveRotate opacity-0 [--rotate-delay:500ms]">
            <div className="text-center text-primary text-xs md:text-sm flex items-center">
              My name is Vinh Phu. With a strong foundation in software
              development, I’m eager to help bring early-stage ideas to life and
              build solutions that make a real difference.
            </div>
          </div>

          {/* Third column */}
          <div className="flex flex-col gap-4 w-full justify-center items-center animate-perspectiveRotate opacity-0 [--rotate-delay:700ms]">
            <Button
              className="bg-primary rounded-lg py-3 md:py-7 pl-3 md:pl-7 pr-4 md:pr-8 flex gap-1 hover:scale-105 duration-300 transition"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Image
                height={24}
                width={24}
                alt="star icon"
                className="h-3 md:h-6 w-3 md:w-6"
                src={StarIcon}
              />
              <div className="font-semibold text-xs sm:text-sm md:text-base">Contact Me</div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
