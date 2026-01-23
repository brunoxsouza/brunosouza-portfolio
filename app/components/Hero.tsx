export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-zinc-50 to-white dark:from-black dark:via-zinc-900 dark:to-black px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black dark:text-white">
          Desenvolvedor Full Stack
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
          Transformo ideias em soluções digitais impactantes. Especializando-me em construir experiências web modernas e escaláveis.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projetos"
            className="px-8 py-3 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-lg transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
