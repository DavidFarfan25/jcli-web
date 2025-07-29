import React from 'react';
import { Baby, Users, BookOpen, TrendingUp, Crown } from 'lucide-react';

const Levels = () => {
  const levels = [
    {
      icon: Baby,
      name: "CHILDREN",
      age: "4-8 años",
      description: "Aprendizaje divertido a través de juegos, canciones y actividades interactivas.",
      features: ["Vocabulario básico", "Pronunciación natural", "Juegos educativos", "Canciones y rimas"],
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Users,
      name: "JUNIORS",
      age: "9-12 años",
      description: "Desarrollo de habilidades fundamentales con actividades apropiadas para su edad.",
      features: ["Gramática básica", "Conversación simple", "Lectura guiada", "Proyectos creativos"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: BookOpen,
      name: "BEGINNERS",
      age: "13+ años",
      description: "Fundamentos sólidos del inglés para adolescentes y adultos principiantes.",
      features: ["Estructura gramatical", "Vocabulario esencial", "Expresiones cotidianas", "Práctica oral"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: TrendingUp,
      name: "INTERMEDIATE",
      age: "Todos",
      description: "Perfecciona tu inglés y desarrolla confianza en conversaciones más complejas.",
      features: ["Gramática avanzada", "Conversación fluida", "Comprensión auditiva", "Escritura formal"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Crown,
      name: "ADVANCED",
      age: "Todos",
      description: "Dominio total del idioma para objetivos académicos y profesionales.",
      features: ["Inglés profesional", "Presentaciones", "Exámenes internacionales", "Escritura académica"],
      color: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="niveles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encuentra Tu 
            <span className="text-green-600"> Nivel Perfecto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada nivel está diseñado específicamente para llevarte al siguiente paso en tu journey del inglés.
            ¿No estás seguro de tu nivel? ¡Hagamos una evaluación juntos!
          </p>
        </div>

        {/* Primera fila - 3 niveles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {levels.slice(0, 3).map((level, index) => {
            const IconComponent = level.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${level.color} p-6 text-white text-center`}>
                  <IconComponent className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                  <p className="text-lg opacity-90">{level.age}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {level.description}
                  </p>
                  
                  <div className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Segunda fila - 2 niveles centrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {levels.slice(3, 5).map((level, index) => {
            const IconComponent = level.icon;
            return (
              <div 
                key={index + 3}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${level.color} p-6 text-white text-center`}>
                  <IconComponent className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                  <p className="text-lg opacity-90">{level.age}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {level.description}
                  </p>
                  
                  <div className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            ¡Evalúa Tu Nivel Gratis!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Levels;