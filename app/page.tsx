'use client';

import { motion } from 'framer-motion';
import { useNavigation } from './contexts/NavigationContext';
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Stack from "./components/Stack";
import Contato from "./components/Contato";

export default function Home() {
  const { currentPage } = useNavigation();

  const pages = [
    { id: 'hero', component: <Hero key="hero" /> },
    { id: 'stack', component: <Stack key="stack" /> },
    { id: 'projetos', component: <Projetos key="projetos" /> },
    { id: 'sobre', component: <Sobre key="sobre" /> },
    { id: 'contato', component: <Contato key="contato" /> },
  ];

  return (
    <main className="bg-white dark:bg-black overflow-hidden">
      <motion.div
        className="flex h-screen"
        animate={{ x: -currentPage * 100 + 'vw' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {pages.map((page) => (
          <div key={page.id} className="w-screen flex-shrink-0 overflow-y-auto">
            {page.component}
          </div>
        ))}
      </motion.div>
    </main>
  );
}
