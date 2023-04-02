import React from 'react';
import Container from './Container';

export default function Animation() {
  return (
    <Container className="mt-10 flex flex-col items-center sm:mt-16">
      <h2 className="mb-0 font-display text-2xl font-semibold tracking-tight text-stone-700 sm:text-3xl">
        Pipeline Flow
      </h2>
      <div className="mt-10 flex h-[400px] w-full items-center justify-center rounded-3xl bg-neutral-200">
        {' '}
        <p className="font-display font-semibold text-indigo-700">
          Placeholder: Pipeline Animation
        </p>
      </div>
    </Container>
  );
}
