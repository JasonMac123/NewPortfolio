import About from "@/components/About";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Profile />
      <About />
    </main>
  );
}
