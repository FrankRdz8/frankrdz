import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectList />
      <Contact />
    </main>
  );
}