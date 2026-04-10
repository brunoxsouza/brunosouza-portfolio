'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGit, SiDocker, SiGithub, SiVercel } from 'react-icons/si';

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "JavaScript", icon: SiJavascript }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "REST API", icon: null }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: SiDocker },
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "VS Code", icon: null }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Comunicação", icon: "💬 " },
        { name: "Resolução de Problemas", icon: "🧠 " },
        { name: "Trabalho em Equipe", icon: "🤝 " }
      ]
    }
  ];

  return (
    <section id="stack" className="pt-25 py-20 bg-white dark:bg-black px-4">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Stack & Competências
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12">
          Tecnologias e habilidades que utilizo para entregar resultados de qualidade
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                  >
                    {skill.icon && (typeof skill.icon === 'string' ? skill.icon : <skill.icon className="w-4 h-4" />)}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-zinc-50 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <h3 className="text-xl font-bold text-black dark:text-white mb-4">
            Sempre em Aprendizado
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Estou constantemente explorando novas tecnologias e metodologias. Atualmente estudando: AI/ML, Web3, e arquiteturas de sistemas distribuídos.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
