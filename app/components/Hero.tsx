'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black dark:text-white">
          Desenvolvedor Full Stack
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
          Transformo ideias em soluções digitais impactantes. Especializando-me em construir experiências web modernas e escaláveis.
        </p>
      </motion.div>
    </section>
  );
}
