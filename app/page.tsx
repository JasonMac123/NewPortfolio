import About from "@/components/About";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Profile />
      <About />
      <Projects />
    </main>
  );
}
