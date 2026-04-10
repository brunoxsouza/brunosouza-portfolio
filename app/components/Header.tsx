'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { useNavigation } from '@/app/contexts/NavigationContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { setCurrentPage } = useNavigation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldBlink, setShouldBlink] = useState(false);

  const menuItems = [
    { label: 'Início', page: 0 },
    { label: 'Stack', page: 1 },
    { label: 'Projetos', page: 2 },
    { label: 'Sobre', page: 3 },
    { label: 'Contato', page: 4 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldBlink(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page: number) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setShouldBlink(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setShouldBlink(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white">
          <button
            onClick={() => handleNavigation(0)}
            className='cursor-pointer'
          >
            Bruno de Souza Silva
          </button>
        </h1>

        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigation(item.page)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <span className="text-xl">☀️</span>
            ) : (
              <span className="text-xl">🌙</span>
            )}
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Abrir menu"
            className={`
              md:hidden p-2 rounded-lg
              bg-zinc-100 dark:bg-zinc-900
              text-black dark:text-white
              hover:bg-zinc-200 dark:hover:bg-zinc-800
              transition-colors
              ${
                shouldBlink
                  ? 'animate-pulse ring-2 dark:ring-white-800'
                  : ''
              }
            `}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3 flex flex-col">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors font-medium py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
