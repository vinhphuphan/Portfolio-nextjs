"use client";

import React, { useState } from "react";
import Container from "./Container";
import { Input } from "@/app/components/input";
import { Textarea } from "./textarea";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { BsPhoneFlip } from "react-icons/bs";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter your name!");
      return;
    }

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    if (!message) {
      toast.error("Please enter your message!");
      return;
    }



    setIsLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          toast.success(
            "Message has been sent successfully!"
          );
        },
        () => {
          toast.error("Failed to send the message!");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="contact" className="w-full h-auto py-10 px-4 md:px-0 md:py-16">
      <Container>
        {/* Body */}
        <div className="flex flex-col 2xl:flex-row items-center gap-12 2xl:gap-2 min-h-full">
          {/* Contact Info */}
          <div className="flex flex-1 flex-col items-stretch min-h-full w-full">

            {/* Heading */}
            <div className="pr-0 2xl:pr-28 flex flex-col h-full flex-grow">
              <div className="flex flex-col gap-3">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary">
                  Let's Connect
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-normal text-primary mb-4 sm:mb-6 2xl:mb-24">
                  I am committed to processing the information in order to contact
                  you and talk about the work.
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-3 mt-auto">
                <div className="flex items-center justify-start gap-2 text-primary text-2xl">
                  <MdMarkEmailUnread />
                  <div className="text-[10px] sm:text-xs md:text-sm font-normal 2xl:font-medium text-primary">
                    phanvinhphu1@gmail.com
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2 text-primary text-2xl">
                  <FaRegAddressCard />
                  <div className="text-[10px] sm:text-xs md:text-sm font-normal 2xl:font-medium text-primary">
                    Brisbane, QLD 4076
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2 text-primary text-2xl">
                  <BsPhoneFlip />
                  <div className="text-[10px] sm:text-xs md:text-sm font-normal 2xl:font-medium text-primary">
                    +61 402 315 511
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full 2xl:flex-1 flex-col items-stretch 2xl:items-center">
            <div className="text-base sm:text-xl md:text-2xl font-medium block 2xl:hidden text-left mb-6 sm:mb-8 md:mb-10">Reach Out to Me</div>
            {/* Message Form */}
            <form className="flex flex-col justify-center items-center h-auto w-full gap-6 sm:gap-8 md:gap-10 mb-6">
              {/* Heading on small screen */}

              {/* First row */}
              <Input
                type="text"
                placeholder="Enter Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-primary"
                disabled={isLoading}
              />
              {/* Second row */}
              <Input
                type="email"
                placeholder="Enter Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-primary"
                disabled={isLoading}
              />
              {/* Third row */}
              <Input
                type="text"
                placeholder="Website (optional)"
                className="border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-primary"
                disabled={isLoading}
              />
              {/* Fourth row */}
              <Textarea
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-primary"
                disabled={isLoading}
              />

              <button
                type="button"
                onClick={sendEmail}
                className="bg-primary text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:brightness-125 hover:scale-105 transtition duration-300 text-xs md:text-sm xl:text-base font-medium disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
