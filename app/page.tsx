import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import MyStack from "./components/mystack/MyStack";
import ProjectSection from "./components/project/ProjectSection";
import Skills from "./components/skills/Skills";
import ToasterProvider from "./components/ToastProvider";

export default function Home() {
  return (
   <div className="pt-36 md:pt-44">
    <ToasterProvider />
    <HeroSection />
    <Skills />
    <ProjectSection />
    <MyStack />
    <Contact />
   </div>
  );
}
