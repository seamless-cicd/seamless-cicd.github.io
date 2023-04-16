import React from 'react';
import Link from '@docusaurus/Link';
import Container from './Container';

export default function Hero() {
  return (
    <Container className="flex flex-col items-center py-12 text-center sm:py-16 lg:py-20">
      <h1 className="m-0 font-display text-3xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 sm:text-4xl lg:text-5xl">
        Seamlessly automate deployments
      </h1>
      <h1 className="m-0 font-display text-[2rem] font-semibold tracking-tight text-stone-800 dark:text-stone-100 sm:mt-1 sm:text-[2.75rem] lg:text-[3.5rem]">
        <span>from</span>
        <span className="relative whitespace-nowrap pl-1 pr-2 sm:pl-3 sm:pr-6 lg:pl-4">
          <svg
            width="361"
            height="28"
            viewBox="0 0 361 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="absolute left-0 top-[60%] h-[0.65em] w-full fill-indigo-200 dark:fill-indigo-700"
            preserveAspectRatio="none"
          >
            <path d="M123.577 2.41887C104.338 4.1689 86.8183 4.60294 19.2478 16.0696C-3.74517 19.9715 -6.42681 26.8734 12.7609 23.168C49.5192 16.0696 62.4802 14.1369 81.9533 11.7014C107.667 8.48535 154.3 3.76421 170.065 5.14897C182.498 6.24104 181.201 7.47898 179.796 8.4252C176.552 10.6093 156.551 17.1617 151.146 24.8061C147.847 29.4706 158.604 27.9126 166.822 26.9902C186.282 24.8061 207.866 20.8936 261.421 19.8918C319.802 18.7998 348.874 23.168 352.777 23.168C357.642 23.168 364.669 20.9839 358.723 19.8918C350.131 18.3138 294.487 14.4315 246.285 16.0696C205.26 17.4638 167.143 21.0393 163.038 22.076C160.876 22.622 161.957 21.5299 164.66 19.8918C167.363 18.2537 186.388 10.0633 187.905 8.4252C192.48 3.48302 183.04 0.780715 173.85 0.234738C164.003 -0.350317 149.291 0.0799695 123.577 2.41887Z" />
          </svg>
          <span className="relative text-indigo-700 dark:text-indigo-300">
            push
            <span className="text-stone-800 dark:text-stone-100"> to </span>
            <span>Prod</span>
          </span>
        </span>
      </h1>
      <h2 className="m-0 mt-8 max-w-xs font-display text-base font-medium dark:text-stone-100 sm:mt-14 sm:max-w-lg sm:text-xl">
        <span className="font-semibold">Seamless</span> is an open-source,
        low-config {<br className="hidden sm:block" />}
        <span className="text-indigo-700 dark:text-indigo-500">
          CI/CD pipeline
        </span>{' '}
        for containerized microservices
      </h2>
      <div className="mt-6">
        <Link to="/case-study" className="hover:no-underline">
          <button className="group flex cursor-pointer items-center gap-x-1 rounded-full border-none bg-gradient-to-br from-indigo-700 from-10% via-indigo-600 via-40% to-indigo-900 to-95% px-5 py-2.5 font-display text-base font-semibold text-white shadow-md transition-colors hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 dark:shadow-indigo-600/30">
            <span>Read Case Study</span>
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
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
