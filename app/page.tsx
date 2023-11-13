import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import ProjectList from "@/components/Project/ProjectList";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Profile />
      <About />
      <ProjectList />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
