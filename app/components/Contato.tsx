import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import Image from 'next/image';


export default function Contato() {
  const socialLinks = [
    { name: "LinkedIn", icon: linkedinLogo, link: "https://linkedin.com" },
    { name: "GitHub", icon: githubLogo, link: "https://github.com" },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-zinc-100 to-white dark:from-black dark:to-zinc-900 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Vamos Colaborar?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Tenho interesse em oportunidades onde posso contribuir e aprender. Sinta-se livre para me contatar!
          </p>
        </div>

        <form className="bg-white dark:bg-zinc-900 rounded-lg p-8 mb-12 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-lg">
          <div className="mb-6">
            <label className="block text-black dark:text-white font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white rounded-lg border border-zinc-200 dark:border-zinc-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder-zinc-400 dark:placeholder-zinc-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black dark:text-white font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="seu.email@exemplo.com"
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white rounded-lg border border-zinc-200 dark:border-zinc-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder-zinc-400 dark:placeholder-zinc-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black dark:text-white font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              placeholder="Sua mensagem aqui..."
              rows={5}
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white rounded-lg border border-zinc-200 dark:border-zinc-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none placeholder-zinc-400 dark:placeholder-zinc-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Ou conecte-se comigo através das redes:</p>
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
      </div>
    </section>
  );
}
