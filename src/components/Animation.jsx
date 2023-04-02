import React from 'react';
import Container from './Container';

export default function Animation() {
  return (
    <Container className="m-0 flex flex-col items-center sm:mt-20">
      <h2 className="from-15% via-60% to-90% mb-0 inline-block bg-gradient-to-br from-rose-600 via-purple-600 to-indigo-700 bg-clip-text font-display text-2xl font-semibold tracking-tight text-transparent sm:text-4xl">
        Pipeline Stage Execution
      </h2>
      <div className="mt-4 flex h-[400px] w-full items-center justify-center rounded-3xl border-2 border-solid border-stone-300 bg-neutral-100 sm:mt-8">
        {' '}
        <p className="font-display text-2xl font-semibold text-indigo-700">
          🚧 Placeholder: Pipeline Animation 🚧
        </p>
      </div>
    </Container>
  );
}
