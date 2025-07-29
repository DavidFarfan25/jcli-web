import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseMe from './components/WhyChooseMe';
import Levels from './components/Levels';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseMe />
        <Levels />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;