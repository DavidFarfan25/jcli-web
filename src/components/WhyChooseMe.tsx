import React from 'react';
import { Heart, Target, Clock, Award, Users2, Lightbulb } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Enfoque Personal",
      description: "Cada estudiante es único. Adapto mi metodología a tu ritmo y estilo de aprendizaje para que alcances tus metas."
    },
    {
      icon: Target,
      title: "Resultados Comprobados",
      description: "Más de 200 estudiantes han logrado sus objetivos conmigo. Mi método ha sido probado y perfeccionado durante años."
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Entiendo que tienes una vida ocupada. Por eso ofrezco horarios que se adaptan a tu agenda y necesidades."
    },
    {
      icon: Award,
      title: "Magister Certificado",
      description: "Como Magister con más de 10 años de experiencia, traigo conocimiento académico y práctica real al aula."
    },
    {
      icon: Users2,
      title: "Ambiente Familiar",
      description: "Creo un espacio cálido y acogedor donde te sientes cómodo para practicar y cometer errores sin miedo."
    },
    {
      icon: Lightbulb,
      title: "Metodología Innovadora",
      description: "Combino técnicas tradicionales con herramientas modernas para hacer el aprendizaje más efectivo y divertido."
    }
  ];

  return (
    <section id="por-que-elegirme" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por Qué Deberías 
            <span className="text-green-600"> Elegirme?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No soy solo otro profesor de inglés. Soy tu compañero en este viaje hacia la fluidez, 
            comprometido con tu éxito personal y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="mb-6">
                  <IconComponent className="h-12 w-12 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              "Mi compromiso es tu éxito"
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              He dedicado mi carrera a hacer que el aprendizaje del inglés sea accesible, 
              efectivo y, sobre todo, una experiencia positiva que transforme tu vida.
            </p>
            <div className="text-lg font-semibold">
              - Magister Julio César Ruiz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;