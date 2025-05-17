import React from 'react';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <List className="w-5 h-5 mr-2 text-rose-600" />
        Table of Contents
      </h3>
      <nav aria-label="Table of contents">
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-gray-700 hover:text-rose-600 transition-colors text-left w-full"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TableOfContents;