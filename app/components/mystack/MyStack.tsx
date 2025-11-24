"use client";

import Container from "../Container";
import { IconType } from "react-icons";
import {
  SiDotnet, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiVercel, SiGithubactions, SiDocker
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { Button } from "../button";

const colors = {
  csharp: "#9B4F97",
  dotnet: "#512BD4",
  efcore: "#6D38C3",
  sql: "#0078D4",
  react: "#61DAFB",
  next: "#FFFFFF",
  ts: "#3178C6",
  tailwind: "#38BDF8",
  redux: "#764ABC",
  azure: "#0078D4",
  vercel: "#FFFFFF",
  actions: "#2088FF",
  docker: "#2496ED",
};

const Badge = ({ icon: Icon, label, color }: { icon: IconType; label: string; color: string }) => (
  <Button className="flex items-center gap-2 px-3 py-2 bg-[#141414] border border-[#2a2a2a] rounded-lg transition">
    <Icon size={16} style={{ color }} />
    <span className="text-xs md:text-sm text-neutral-300">{label}</span>
  </Button>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide">{title}</h3>
    <div className="flex flex-wrap gap-3">{children}</div>
  </div>
);

const MyStack = () => {
  return (
    <div id="stacks" className="w-full py-16 px-4 sm:px-0">
      <Container>

        {/* Heading */}
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-primary">Tech Stack</h2>
        </div>

        <div className="flex flex-col gap-10">

          {/* Backend */}
          <Section title="Backend">
            <Badge icon={TbBrandCSharp} label="C#" color={colors.csharp} />
            <Badge icon={SiDotnet} label=".NET Core" color={colors.dotnet} />
            <Badge icon={SiDotnet} label="Entity Framework Core" color={colors.efcore} />
            <Badge icon={VscAzure} label="SQL Server" color={colors.sql} />
          </Section>

          {/* Frontend */}
          <Section title="Frontend">
            <Badge icon={SiReact} label="React" color={colors.react} />
            <Badge icon={SiNextdotjs} label="Next.js" color={colors.next} />
            <Badge icon={SiTypescript} label="TypeScript" color={colors.ts} />
            <Badge icon={SiTailwindcss} label="TailwindCSS" color={colors.tailwind} />
            <Badge icon={SiRedux} label="Redux Toolkit Query" color={colors.redux} />
          </Section>

          {/* Cloud & DevOps */}
          <Section title="Cloud & DevOps">
            <Badge icon={VscAzure} label="Azure App Service" color={colors.azure} />
            <Badge icon={SiVercel} label="Vercel" color={colors.vercel} />
            <Badge icon={SiGithubactions} label="GitHub Actions" color={colors.actions} />
            <Badge icon={SiDocker} label="Docker" color={colors.docker} />
          </Section>

        </div>
      </Container>
    </div>
  );
};

export default MyStack;
