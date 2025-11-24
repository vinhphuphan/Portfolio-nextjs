"use client";

import Image from "next/image";
import Container from "../Container";
import Logo from "../Logo";
import StarIcon from "../../../public/images/star.svg";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Button } from "../button";
import { useState } from "react";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(false);

  // Listen to scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest > 20);
  });

  return (
    <div className="w-full py-5 sm:py-6 md:py-8 transition fixed z-20">
      <Container>
        <motion.div
          className={`flex justify-between items-center px-1 sm:px-3 2xl:px-4 py-1 sm:py-2 2xl:py-3 transition-all duration-300 rounded-full ${
            scroll
              ? "bg-white bg-opacity-90 backdrop-blur-lg"
              : "bg-transparent"
          }`}
          // Animate border properties
          style={{
            boxSizing: "border-box", // Ensures consistent sizing
            borderWidth: scroll ? "2px" : "0px",
            borderColor: scroll ? "rgba(158, 163, 186, 0.1)" : "transparent",
            borderStyle: "solid",
          }}
        >
          {/* Left side - Logo and Name */}
          <div
            className={`flex items-center gap-2 transition-all duration-300}`}
          >
            <div
              className={`${
                scroll
                  ? "rotate-[75deg] translate-x-[40%] sm:translate-x-[20%] md:translate-x-[30%]"
                  : ""
              } h-4 md:h-7 w-4 md:w-7 transition-all duration-300`}
            >
              <Logo height={26} width={26} />
            </div>
            <div
              className={`${
                scroll
                  ? "hidden transition"
                  : "hidden xl:block text-xl text-primary font-semibold"
              }`}
            >
              Vinh Phu
            </div>
          </div>

          {/* Right side */}
          <div
            className={`${
              scroll ? "translate-x-[-0.2rem] md:translate-x-[-0.5rem]" : ""
            } flex items-center gap-3 md:gap-4 transition-all duration-300`}
          >
            {/* Open to work sign */}
            <div className="flex gap-[6px] md:gap-2 justify-center items-center">
              <span className="relative flex h-[4px] md:h-2 w-[4px] md:w-2 pb-[5px] md:pb-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[4px] md:h-2 w-[4px] md:w-2 bg-sky-500"></span>
              </span>
              <div className="text-[10px] md:text-xs text-primary font-normal">
                Open for work
              </div>
            </div>
            {/* Contact Button */}
            <Button
              className="rounded-full px-2 md:px-5 py-1 md:py-3 flex gap-1 hover:bg-opacity-70 transition"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Image
                height={14}
                width={14}
                alt="star icon"
                src={StarIcon}
                className="w-3 md:w-4 h-3 md:h-4"
              />
              <div className="font-medium md:font-semibold text-[10px] md:text-xs">
                Contact Me
              </div>
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default NavBar;
