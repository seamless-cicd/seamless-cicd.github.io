import React from 'react';
import Layout from '@theme/Layout';
import HeaderLine from '../components/HeaderLine';

export default function Presentation() {
  return (
    <Layout title="Presentation" description="Presentation">
      <div className="mx-auto w-full max-w-4xl px-8 py-8 text-center sm:py-24">
        <h1 className="mb-8 text-[32px] sm:text-5xl">Presentation</h1>
        <div className="mb-10 mt-5">
          <HeaderLine center={true} />
        </div>
        <p className="mx-auto mb-0 mt-4 max-w-prose text-lg sm:mt-8 sm:text-2xl">
          Live presentation of the Seamless case study.
        </p>
      </div>
    </Layout>
  );
}
