import Image, { StaticImageData } from 'next/image';
import goBarber from '../assets/GoBarberScreens.png';
import nlwImpulse from '../assets/nlw-impulse.png';

export default function Projetos() {
  type Project = {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string | StaticImageData;
  };

  const projects: Project[] = [
    {
      title: "Semana OmniStack 11",
      description: "Código produzido durante a Semana OmniStack 11.0 - Projeto Full Stack completo com React, Node.js e MongoDB.",
      technologies: ["JavaScript", "React", "Node.js"],
      link: "https://github.com/brunoxsouza/semana-omnistack11",
      image: "https://raw.githubusercontent.com/brunoxsouza/semana-omnistack11/master/github/bethehero.png"
    },
    {
      title: "GoBarber Web",
      description: "Projeto web do GoBarber - Sistema de agendamento de barbearia com autenticação e painel de controle.",
      technologies: ["TypeScript", "React", "Node.js"],
      link: "https://github.com/brunoxsouza/go-barber-web",
      image: goBarber
    },
    {
      title: "App GoBarber",
      description: "Aplicação mobile GoBarber - Cliente mobile para agendamento com React Native e integração backend.",
      technologies: ["TypeScript", "React Native", "Node.js"],
      link: "https://github.com/brunoxsouza/app-go-barber",
      image: goBarber
    },
    {
      title: "GoRestaurant Web",
      description: "Desafio 10 - CRUD no ReactJS. Sistema completo de gerenciamento de restaurante com operações create, read, update e delete.",
      technologies: ["TypeScript", "React", "API REST"],
      link: "https://github.com/brunoxsouza/desafio-gorestaurant-web",
      image: "https://raw.githubusercontent.com/brunoxsouza/desafio-gorestaurant-mobile/master/Desafio11React-Native.gif"
    },
    {
      title: "NLW Return Impulse",
      description: "Projeto da semana Next Level Week - Sistema de feedback com servidor e interface web responsiva.",
      technologies: ["TypeScript", "React", "Node.js"],
      link: "https://github.com/brunoxsouza/nlw-return-impulse-web",
      image: nlwImpulse
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white dark:bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Projetos
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12">
          Seleção dos meus projetos pessoais mais impactantes e relevantes
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group bg-white dark:bg-zinc-900 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="h-auto bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ width: '100%', height: 'auto' }}
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
