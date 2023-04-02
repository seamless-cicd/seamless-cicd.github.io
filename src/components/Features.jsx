import React from 'react';
import Container from './Container';

export default function Features() {
  return (
    <Container className="mt-10 flex flex-col items-center sm:mt-16">
      <h2 className="mb-0 font-display text-2xl font-semibold tracking-tight text-stone-700 sm:text-3xl">
        Seamless Features
      </h2>
      <div className="mt-2 flex flex-col items-center sm:mt-8">
        <div className="relative">
          <div className="absolute top-2 left-3 sm:top-4 sm:left-5">
            <h3 className="m-0 font-display text-base font-semibold text-white sm:text-xl">
              State Machine Workflow
            </h3>
            <p className="max-w-prose font-display text-xs font-medium text-white sm:max-w-xs sm:text-sm sm:text-indigo-200">
              Pipeline execution flow is orchestrated using AWS Step Functions
            </p>
          </div>
          <img
            src="/img/landing-page/state-machine-card.png"
            className="block w-full max-w-[1000px] rounded-3xl shadow-xl"
          />
        </div>
        <div className="mt-12 grid w-full max-w-[1000px] grid-cols-1 gap-x-12 sm:grid-cols-3">
          <div className="relative">
            <div className="absolute top-2 left-3 sm:top-4 sm:left-5">
              <h3 className="m-0 font-display text-base font-semibold text-stone-800 sm:text-xl">
                Rollbacks
              </h3>
              <p className="font-display text-xs font-medium text-stone-600 sm:max-w-xs sm:text-sm sm:text-stone-600">
                Revert to tagged images in the registry
              </p>
            </div>
            <img
              src="/img/landing-page/rollbacks-card.png"
              className="block w-full rounded-3xl border-2 border-solid border-[#0091E2] shadow-xl"
            />
          </div>
          <div className="relative">
            <div className="absolute top-2 left-3 sm:top-4 sm:left-5">
              <h3 className="m-0 font-display text-base font-semibold text-white sm:text-xl">
                Reusable Pipeline
              </h3>
              <p className="font-display text-xs font-medium text-white sm:max-w-xs sm:text-sm sm:text-indigo-200">
                Link multiple services to a shared pipeline
              </p>
            </div>
            <img
              src="/img/landing-page/reusable-pipeline-card.png"
              className="block w-full rounded-3xl shadow-xl"
            />
          </div>
          <div className="relative rounded-3xl">
            <div className="absolute top-2 left-3 sm:top-4 sm:left-5">
              <h3 className="m-0 font-display text-base font-semibold text-slate-800 sm:text-xl">
                Pipeline Monitoring
              </h3>
              <p className="font-display text-xs font-medium text-slate-600 sm:max-w-xs sm:text-sm">
                WebSockets streaming from log cache
              </p>
            </div>
            <img
              src="/img/landing-page/pipeline-monitoring-card.png"
              className="block w-full rounded-3xl border-2 border-solid border-slate-300 shadow-xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
