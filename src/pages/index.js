import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Screenshot from '../components/Screenshot';
import Features from '../components/Features';

export default function Home() {
  return (
    <div className="font-display">
      <Navbar />
      <Hero />
      <Screenshot />
      <Features />
    </div>
  );
}
