import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-black">
      <main className="w-full max-w-3xl px-6 sm:px-8 lg:px-0">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
