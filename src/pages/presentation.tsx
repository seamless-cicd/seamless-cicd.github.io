import React from 'react';
import Layout from '@theme/Layout';
import HeaderLine from '../components/HeaderLine';

export default function Presentation() {
  return (
    <Layout
      title="Presentation"
      description="Live Presentation of the Seamless CI/CD Project"
    >
      <div className="mx-auto w-full max-w-4xl px-8 py-8 text-center sm:py-24">
        <h1 className="mb-8 text-[32px] sm:text-5xl">
          Seamless Live Presentation
        </h1>
        <div className="mb-10 mt-5">
          <HeaderLine center={true} />
        </div>
        <iframe
          width="650"
          height="400"
          src="https://www.youtube.com/embed/L-WuIpvBv38"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Layout>
  );
}
