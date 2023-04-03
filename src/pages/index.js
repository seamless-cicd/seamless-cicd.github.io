import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Screenshot from '../components/Screenshot';
// import Animation from '../components/Animation';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout description="Seamless CI/CD">
      <div className="font-display antialiased">
        <Hero />
        <Screenshot />
        {/* <Animation /> */}
        <Features />
        <Footer />
      </div>
    </Layout>
  );
}
