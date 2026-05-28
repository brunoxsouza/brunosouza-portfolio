'use client';

import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export default function Contato() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    { name: "LinkedIn", icon: linkedinLogo, link: "https://linkedin.com" },
    { name: "GitHub", icon: githubLogo, link: "https://github.com" },
  ];

  return (
    <section className="pt-25 py-20  px-4">
      <motion.div
        ref={ref}
        id="contato"
        className="max-w-4xl mx-auto"
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Vamos Colaborar?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Tenho interesse em oportunidades onde posso contribuir e aprender. Sinta-se livre para me contatar!
          </p>
        </div>

        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Conecte-se comigo através das redes:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-semibold rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2"
              >
                <Image src={link.icon} alt={link.name} className="w-5 h-5" />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-zinc-500 dark:text-zinc-500">
            © 2026 Bruno de Souza Silva. Todos os direitos reservados.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
