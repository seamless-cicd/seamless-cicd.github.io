import React from 'react';
import Link from '@docusaurus/Link';
import Container from './Container';

const IndigoStroke =
  require('@site/static/img/landing-page/indigo-stroke.svg').default;
export default function Hero() {
  return (
    <Container className="flex flex-col items-center pt-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-24">
      <h1 className="m-0 font-display text-xl font-semibold tracking-tight text-stone-800 sm:text-3xl md:text-4xl lg:text-5xl">
        Automate your deployment process
      </h1>
      <h1 className="m-0 font-display text-xl font-semibold tracking-tight text-stone-800 sm:text-3xl md:mt-2 md:text-4xl lg:mt-5 lg:text-[56px]">
        <span>from</span>
        <span className="relative whitespace-nowrap pl-1 pr-2 sm:pl-3 sm:pr-6 lg:pl-4">
          <IndigoStroke
            aria-hidden="true"
            className="absolute top-[65%] left-0 h-[0.7em] w-full"
            preserveAspectRatio="none"
          ></IndigoStroke>
          <span className="relative text-indigo-700">
            push<span className="text-stone-800"> to </span>
            <span>Prod</span>
          </span>
        </span>
      </h1>
      <h2 className="m-0 mt-8 font-display text-sm font-medium sm:mt-12 sm:text-lg md:text-xl lg:mt-20">
        Seamless is an open-source, self-hosted
      </h2>
      <h2 className="m-0 font-display text-sm font-medium sm:text-lg md:text-xl">
        <span className="text-indigo-700">CI/CD pipeline</span> for
        containerized microservices
      </h2>
      <div className="mt-6">
        <Link to="/case-study">
          <button className="group flex cursor-pointer items-center gap-x-1 rounded-full border-none bg-indigo-800 px-5 py-2.5 font-display text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 active:bg-indigo-900">
            Read Case Study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </Container>
  );
}
