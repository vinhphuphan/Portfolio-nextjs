"use client";

import Container from "./Container";
import SocialIcon from "./SocialIcon";
import { ImFacebook2 } from "react-icons/im";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaAnglesUp } from "react-icons/fa6";
import { useCallback } from "react";

const Footer = () => {
  const isBrowser = useCallback(() => typeof window !== "undefined", []);

  const scrollToTop = useCallback(() => {
    if (!isBrowser) return;
    window.scrollTo({ top : 0, behavior : 'smooth' })
  }, [isBrowser])

  return (
    <div className="w-full h-auto bg-secondary py-10">
      <Container>
        {/*  Footer */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex-col">
            {/* Back to top button */}
            <div onClick={scrollToTop} className="flex flex-col justify-center items-center gap-2 text-white py-4 text-lg md:text-xl mb-2 hover:scale-105 hover:brightness-125 transition duration-300 cursor-pointer">
                <FaAnglesUp />
                <div className="text-sm md:text-lg font-normal">Back To Top</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-start gap-2 md:gap-3">
              <SocialIcon
                href="https://www.facebook.com/VinhPhu.DS/"
                icon={ImFacebook2}
                darkTheme
              />
              <SocialIcon
                href="https://github.com/vinhphuphan/"
                icon={AiFillGithub}
                darkTheme
              />
              <SocialIcon
                href="https://www.linkedin.com/in/vinhphu97/"
                icon={AiFillLinkedin}
                darkTheme
              />
              <SocialIcon
                href="https://wa.me/0406114184"
                icon={AiOutlineWhatsApp}
                darkTheme
              />
              <SocialIcon
                href="mailto:phanvinhphu1@gmail.com"
                icon={MdOutlineMail}
                darkTheme
              />
            </div>
          </div>
          <div className="text-xs md:text-sm lg:text-base py-4 text-white">
            Copyright© 2024 Vinh Phu. All Rights Reserved.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
