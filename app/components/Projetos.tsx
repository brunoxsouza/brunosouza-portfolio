'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import goBarber from '../assets/GoBarberScreens.png';
import nlwImpulse from '../assets/nlw-impulse.png';
import { SiReact, SiTypescript, SiNodedotjs } from 'react-icons/si';
import { IconType } from 'react-icons';
import { Timeline } from '../contexts/Timeline';


export default function Projetos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  type Project = {
    title: string;
    description: string;
    technologies: Technology[];
    link: string;
    image: string | StaticImageData;
  };

  type Technology = {
    name: string;
    icon: IconType | string | null;
  };

  const projects: Project[] = [
    {
      title: "Semana OmniStack 11",
      description: "Código produzido durante a Semana OmniStack 11.0 - Projeto Full Stack completo com React, Node.js e MongoDB.",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs }
      ],
      link: "https://github.com/brunoxsouza/semana-omnistack11",
      image: "https://raw.githubusercontent.com/brunoxsouza/semana-omnistack11/master/github/bethehero.png"
    },
    {
      title: "GoBarber Web",
      description: "Projeto web do GoBarber - Sistema de agendamento de barbearia com autenticação e painel de controle.",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs }
      ],
      link: "https://github.com/brunoxsouza/go-barber-web",
      image: goBarber
    },
    {
      title: "App GoBarber",
      description: "Aplicação mobile GoBarber - Cliente mobile para agendamento com React Native e integração backend.",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs }
      ],
      link: "https://github.com/brunoxsouza/app-go-barber",
      image: goBarber
    },
    {
      title: "GoRestaurant Web",
      description: "Desafio 10 - CRUD no ReactJS. Sistema completo de gerenciamento de restaurante com operações create, read, update e delete.",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs }
      ],
      link: "https://github.com/brunoxsouza/desafio-gorestaurant-web",
      image: "https://raw.githubusercontent.com/brunoxsouza/desafio-gorestaurant-mobile/master/Desafio11React-Native.gif"
    },
    {
      title: "NLW Return Impulse",
      description: "Projeto da semana Next Level Week - Sistema de feedback com servidor e interface web responsiva.",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs }
      ],
      link: "https://github.com/brunoxsouza/nlw-return-impulse-web",
      image: nlwImpulse
    }
  ];

  return (
      <>
        <section id="projetos" className="relative pt-0 py-20 bg-white dark:bg-black px-4">
        <Timeline />
        <div id="trabalho" className="h-px scroll-mt-32" />
            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto pl-0 md:pl-24"
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <section className="pt-0 py-20 bg-white dark:bg-black px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                        Features em destaque 
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12">
                        Breve descrição de features durante minha jornada profissional
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
                                        priority={index < 2} />
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
                                            <div
                                                key={i}
                                                className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                                            >
                                                {tech.icon && (typeof tech.icon === 'string' ? tech.icon : <tech.icon className="w-4 h-4" />)}
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
                <section id="estudos" className="pt-25 py-20 bg-white dark:bg-black px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                        Projetos de Estudos
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
                                        priority={index < 2} />
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
                                            <div
                                                key={i}
                                                className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                                            >
                                                {tech.icon && (typeof tech.icon === 'string' ? tech.icon : <tech.icon className="w-4 h-4" />)}
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
                <section id="faculdade" className="pt-25 py-20 bg-white dark:bg-black px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                        Projeto final da Faculdade (TCC)
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
                                        priority={index < 2} />
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
                                            <div
                                                key={i}
                                                className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                                            >
                                                {tech.icon && (typeof tech.icon === 'string' ? tech.icon : <tech.icon className="w-4 h-4" />)}
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </motion.div>
        </section>
      </>
  );
}
