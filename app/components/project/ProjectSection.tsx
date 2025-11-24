"use client";

import Container from "../Container";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div id="projects" className="w-full h-auto px-4 sm:px-2 py-12 2xl:py-16">
      <Container>
        <div className="flex flex-col gap-12 md:gap-20 2xl:gap-24">
          {/* Heading */}
          <div className="flex flex-col 2xl:flex-row gap-3 md:gap-6 2xl:gap-8 items-start 2xl:items-center">
            {/* Left side */}
            <div className="flex-1 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary">
              Projects
            </div>

            {/* Right side */}
            <div className="flex-1">
              <div className="text-pretty text-xs md:text-sm font-light 2xl:font-normal">
                My mission is to create impactful, user-centered solutions that
                bring value through scalable, maintainable software by dynamic
                web applications and data-driven insights.
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <ProjectCard
            key={"project1"}
            title="EasyDining"
            year="2025"
            description="A full-stack restaurant system that simplify restaurant workflow through  QR-based ordering and a integrated POS management dashboard.(Demo login: admin / 123456)"
            link="https://dashboard.easydining.site"
            github_link="https://github.com/vinhphuphan/EasyDining"
            background_class="bg-project1"
          />

        </div>
      </Container>
    </div>
  );
};

export default ProjectSection;
