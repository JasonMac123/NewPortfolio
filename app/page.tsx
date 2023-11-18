import ProjectList from "@/components/Project/ProjectList";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Profile from "@/components/Sections/Profile";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Profile />
      <About />
      <ProjectList />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
