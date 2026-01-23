export default function Stack() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"]
    },
    {
      title: "Ferramentas",
      skills: ["Git", "Docker", "GitHub", "Vercel", "VS Code"]
    },
    {
      title: "Soft Skills",
      skills: ["Comunicação", "Resolução de Problemas", "Trabalho em Equipe"]
    }
  ];

  return (
    <section id="stack" className="py-20 bg-white dark:bg-black px-4">
      <div className="max-w-6xl mx-auto">
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
                    className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <h3 className="text-xl font-bold text-black dark:text-white mb-4">
            Sempre em Aprendizado
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Estou constantemente explorando novas tecnologias e metodologias. Atualmente estudando: AI/ML, Web3, e arquiteturas de sistemas distribuídos.
          </p>
        </div>
      </div>
    </section>
  );
}
