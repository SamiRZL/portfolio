import { NavBar } from "@/components/nav-bar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <SmoothScroll />
      <NavBar />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
