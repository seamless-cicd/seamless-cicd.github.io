import React from 'react';
import Container from './Container';

export default function Features() {
  return (
    <Container className="mt-4 flex flex-col items-center sm:mt-20">
      <h2 className="mb-0 inline-block bg-gradient-to-br from-rose-600 from-15% via-purple-600 via-60% to-indigo-700 to-90% bg-clip-text font-display text-2xl font-semibold tracking-tight text-transparent sm:text-4xl">
        Architected for Scale
      </h2>
      <h3 className="mt-0 max-w-xs text-center font-display text-base font-medium text-stone-800 dark:text-stone-100 sm:mt-2 sm:max-w-none sm:text-xl">
        Seamless is a cloud-native solution built on AWS
      </h3>
      <div className="mt-1 flex flex-col items-center sm:mt-4">
        {/* Main Card */}
        <div className="relative">
          <div className="absolute left-4 top-3 max-w-[250px] sm:left-5 sm:top-4">
            <h3 className="text-md m-0 font-display font-semibold text-white md:text-xl">
              State Machine Workflow
            </h3>
            <p className="font-display text-sm font-medium text-indigo-200 sm:max-w-xs sm:text-sm">
              Pipeline execution is orchestrated using AWS Step Functions
            </p>
          </div>
          <img
            src="/img/landing-page/state-machine-card.png"
            className="block min-h-[290px] w-[290px] max-w-[1000px] rounded-3xl object-cover object-right shadow-lg dark:shadow-md dark:shadow-indigo-600/30 sm:w-full"
          />
        </div>
        {/* Cards */}
        <div className="mt-0 grid w-full max-w-[1000px] grid-cols-1 gap-x-6 sm:grid-cols-3 lg:mt-6 lg:gap-x-12">
          <div className="relative mt-6 max-w-[290px]">
            <div className="absolute left-4 top-3 max-w-[210px] sm:left-5 sm:top-4">
              <h3 className="text-md m-0 font-display font-semibold text-stone-800 md:text-xl">
                Rollbacks
              </h3>
              <p className="font-display text-sm font-medium text-stone-600 sm:max-w-xs sm:text-sm sm:text-stone-600">
                Revert to tagged images in the registry
              </p>
            </div>
            <img
              src="/img/landing-page/rollbacks-card.png"
              className="block w-full rounded-3xl border-2 border-solid border-[#0091E2] shadow-lg dark:shadow-md dark:shadow-sky-400/30"
            />
          </div>
          <div className="relative mt-6 max-w-[290px]">
            <div className="absolute left-4 top-3 max-w-[210px] sm:left-5 sm:top-4">
              <h3 className="text-md m-0 font-display font-semibold text-white md:text-xl">
                Reusable Pipeline
              </h3>
              <p className="font-display text-sm font-medium text-indigo-200 sm:max-w-xs sm:text-sm">
                Link multiple services to a shared pipeline
              </p>
            </div>
            <img
              src="/img/landing-page/reusable-pipeline-card.png"
              className="block w-full rounded-3xl shadow-lg dark:shadow-md dark:shadow-indigo-600/30"
            />
          </div>
          <div className="relative mt-6 max-w-[290px]">
            <div className="absolute left-4 top-3 max-w-[210px] sm:left-5 sm:top-4">
              <h3 className="text-md m-0 font-display font-semibold text-slate-800 md:text-xl">
                Pipeline Monitoring
              </h3>
              <p className="font-display text-sm font-medium text-slate-600 sm:text-sm">
                WebSockets streaming from log cache
              </p>
            </div>
            <img
              src="/img/landing-page/pipeline-monitoring-card.png"
              className="block w-full rounded-3xl border-2 border-solid border-slate-300 shadow-lg dark:shadow-md dark:shadow-stone-400/30"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
