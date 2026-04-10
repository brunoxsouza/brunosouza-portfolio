'use client';

import { useEffect, useState } from 'react';

type TimelineSection = {
  id: string;
  label: string;
};

const sections: TimelineSection[] = [
  { id: 'trabalho', label: 'Trabalho 21 - Atual' },
  { id: 'estudos', label: 'Estudos' },
  { id: 'faculdade', label: 'Faculdade 15 - 19' },
];

const STORAGE_KEY = 'timeline-active';

export function Timeline() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setActive(stored);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActive(id);
          localStorage.setItem(STORAGE_KEY, id);
        }
      },
      {
        threshold: [0.3, 0.6],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    localStorage.setItem(STORAGE_KEY, id);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const activeIndex = sections.findIndex(s => s.id === active);

  return (
    <>
      {/* 📱 MOBILE — timeline horizontal com círculos */}
      <div className="md:hidden sticky top-16 z-40 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
        <div className="relative px-6 py-6">
          <div className="absolute left-6 right-6 top-1/2 h-px bg-zinc-300" />

          {activeIndex > 0 && (
            <div
              className="absolute left-6 top-1/2 h-px bg-black dark:bg-white transition-all"
              style={{
                width: `calc(${(activeIndex / (sections.length - 1)) * 90}% - 0px)`,
              }}
            />
          )}

          {activeIndex === 0 && (
            <div
              className="absolute left-6 top-1/2 h-px bg-black dark:bg-white transition-all"
              style={{
                width: `calc(${(1 / (sections.length - 1)) * 30}% - 0px)`,
              }}
            />
          )}

          <div className="relative flex justify-between">
            {sections.map((section, index) => {
              const isActive = index <= activeIndex;

              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className="flex flex-col items-center gap-2"
                >
                  <span
                    className={`text-xs font-medium transition-colors ${
                      active === section.id
                        ? 'text-black dark:text-white'
                        : 'text-zinc-500'
                    }`}
                  >
                    {section.label}
                  </span>

                  <span
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      isActive
                        ? 'bg-black dark:bg-white border-black dark:border-white scale-110'
                        : 'bg-white dark:bg-black border-zinc-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🖥 DESKTOP — timeline vertical */}
      <aside className="hidden md:flex sticky top-32 self-start flex-col gap-6">
        <div className="absolute left-1.5 top-0 h-full w-px bg-zinc-300 dark:bg-zinc-700" />

          {activeIndex > 0 && (
            <div
              className="absolute left-1.5 top-0 h-full w-px bg-black dark:bg-white transition-all"
              style={{
                height: `calc(${(activeIndex / (sections.length - 1)) * 90}% - 0px)`,
              }}
            />
          )}

          {activeIndex === 0 && (
            <div
              className="absolute left-1.5 top-0 h-full w-px bg-black dark:bg-white transition-all"
              style={{
                height: `calc(${(1 / (sections.length - 1)) * 30}% - 0px)`,
              }}
            />
          )}

        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="relative z-10 flex items-center gap-3 group"
          >
            <span
              className={`w-3 h-3 rounded-full transition-all ${
                active === section.id
                  ? 'bg-black dark:bg-white border-black dark:border-white scale-110'
                  : 'bg-white dark:bg-black border-zinc-400'
              }`}
            />
            <span
              className={`text-sm transition-all ${
                active === section.id
                  ? 'text-black dark:text-white font-semibold'
                  : 'text-zinc-500 cursor-pointer'
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </aside>
    </>
  );
}
