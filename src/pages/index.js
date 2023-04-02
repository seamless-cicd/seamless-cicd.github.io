import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Screenshot from '../components/Screenshot';
import Animation from '../components/Animation';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-display">
      <Navbar />
      <Hero />
      <Screenshot />
      <Animation />
      <Features />
      <Footer />
    </div>
  );
}
