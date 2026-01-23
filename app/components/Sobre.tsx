'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import unisantaLogo from '../assets/unisanta-logo.jpeg';
import corebizLogo from '../assets/corebiz.jpeg';

export default function Sobre() {
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/brunoxsouza')
      .then(res => res.json())
      .then(data => setAvatar(data.avatar_url))
      .catch(err => console.error('Erro ao buscar avatar:', err));
  }, []);

  return (
    <section id="sobre" className="py-16 md:py-20 bg-zinc-50 dark:bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-lg h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
              {avatar ? (
                <Image
                  src={avatar}
                  alt="Avatar do GitHub"
                  width={384}
                  height={384}
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="text-5xl md:text-6xl">👨‍💻</div>
              )}
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 md:p-6 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base md:text-lg font-bold text-black dark:text-white mb-4">
                Experience
              </h3>
              <div className="flex gap-3 md:gap-4 items-center">
                <span className="text-2xl md:text-3xl"><Image src={corebizLogo} alt="Corebiz Logo" width={32} height={32} className="w-8 h-8" /></span>
                <div>
                  <p className="text-sm md:text-base font-semibold text-black dark:text-white">
                    Front-End Developer
                  </p>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                    Corebiz | Feb 2021 - Present
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 md:p-6 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base md:text-lg font-bold text-black dark:text-white mb-4">
                Education
              </h3>
              <div className="flex gap-3 md:gap-4 items-start">
                <span className="text-2xl md:text-3xl mt-1"><Image src={unisantaLogo} alt="Unisanta" width={32} height={32} className="w-8 h-8" /></span>
                <div>
                  <p className="text-sm md:text-base font-semibold text-black dark:text-white">
                    Bachelor&apos;s Degree
                  </p>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                    Analysis and Systems Development
                  </p>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                    Universidade Santa Cecília | 2015 - 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white leading-tight">
              Sobre Mim
            </h2>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 md:mb-6 leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções digitais que fazem diferença. Com experiência em desenvolvimento full-stack, trabalho com as tecnologias mais modernas para construir aplicações escaláveis e intuitivas.
            </p>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed">
              Meu foco é transformar desafios complexos em produtos simples e eficientes, sempre pensando na experiência do usuário e na qualidade do código.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1 text-sm md:text-base">
                    Objetivo
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                    Criar tecnologia que impacta positivamente a vida das pessoas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">🚀</span>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1 text-sm md:text-base">
                    Paixão
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                    Inovar e aprender constantemente com novos desafios
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0">💡</span>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1 text-sm md:text-base">
                    Filosofia
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                    Simplicidade é o último grau da sofisticação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
