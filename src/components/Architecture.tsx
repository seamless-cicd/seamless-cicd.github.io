import React from 'react';
import Container from './Container';

export default function Architecture() {
  return (
    <Container className="mt-12 flex flex-col items-center sm:mt-20">
      <h2 className="mb-0 inline-block bg-gradient-to-br from-rose-600 from-15% via-purple-600 via-60% to-indigo-700 to-90% bg-clip-text text-center font-display text-2xl font-semibold tracking-tight text-transparent sm:text-4xl">
        Powered by AWS
      </h2>
      <h3 className="mt-1 max-w-prose text-center font-display text-sm font-medium text-stone-700 dark:text-stone-100 sm:mt-4 sm:text-xl">
        Seamless is a cloud-native solution built on AWS using EC2, ECS,
        Fargate, RDS, ElastiCache, Step Functions, EFS, SNS, Lambda, and API
        Gateway
      </h3>
      <div className="mt-2 sm:mt-8">
        <img
          src="/img/landing-page/architecture-final.png"
          className="z-20 block w-full max-w-[1000px] dark:hidden"
        />
        <img
          src="/img/landing-page/architecture-final-darkmode.png"
          className="z-20 hidden w-full max-w-[1000px] dark:block"
        />
      </div>
    </Container>
  );
}
