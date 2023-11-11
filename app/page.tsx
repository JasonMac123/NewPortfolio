import About from "@/components/About";
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
    </main>
  );
}
