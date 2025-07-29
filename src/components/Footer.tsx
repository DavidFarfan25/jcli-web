import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">JC Language Institute</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu compañero en el journey hacia la fluidez en inglés. Con más de 10 años de experiencia, 
              te ayudo a alcanzar tus metas con un enfoque personalizado y efectivo.
            </p>
            <div className="text-lg font-semibold text-green-400">
              Magister Julio César Ruiz
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">jclanguage123@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+51 936 823 652</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Perú</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div className="text-gray-300">
                  <div>Lun - Vie: 8:00 AM - 8:00 PM</div>
                  <div>Sáb: 8:00 AM - 2:00 PM</div>
                  <div>Dom: Previa cita</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JC Language Institute. Hecho con ❤️ para transformar vidas a través del inglés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;