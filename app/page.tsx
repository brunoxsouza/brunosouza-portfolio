import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Stack from "./components/Stack";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <div className="pt-16">
        <Hero />
        <Projetos />
        <Sobre />
        <Stack />
        <Contato />
      </div>
    </main>
  );
}
