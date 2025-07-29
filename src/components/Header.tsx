import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">JC Language Institute</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('por-que-elegirme')} className="text-gray-700 hover:text-green-600 transition-colors">
              ¿Por qué elegirme?
            </button>
            <button onClick={() => scrollToSection('niveles')} className="text-gray-700 hover:text-green-600 transition-colors">
              Niveles
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-green-600 transition-colors">
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-green-600 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('por-que-elegirme')} className="text-left text-gray-700 hover:text-green-600 transition-colors">
                ¿Por qué elegirme?
              </button>
              <button onClick={() => scrollToSection('niveles')} className="text-left text-gray-700 hover:text-green-600 transition-colors">
                Niveles
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-700 hover:text-green-600 transition-colors">
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;