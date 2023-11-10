import About from "@/components/About";
import Profile from "@/components/Profile";
import ProjectList from "@/components/Project/ProjectList";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Profile />
      <About />
      <ProjectList />
    </main>
  );
}
