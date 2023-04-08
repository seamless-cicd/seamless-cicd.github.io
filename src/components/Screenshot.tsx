import React from 'react';

export default function Screenshot() {
  return (
    <div className="relative flex items-center justify-center px-4 sm:px-6">
      <div className="border-1 z-10 flex justify-center rounded-2xl border-[0.5px] border-solid border-stone-200/60 bg-white/20 p-2 shadow backdrop-blur-md dark:shadow-lg dark:shadow-stone-400/30 sm:rounded-[32px] sm:p-5 md:rounded-[44px] md:p-7">
        <img
          src="/img/landing-page/screenshot.png"
          className="z-20 w-full max-w-[1200px]"
        />
      </div>
      <div className="absolute z-0 h-[250px] w-full -skew-y-6 transform bg-gradient-to-br from-rose-600 from-15% via-purple-500 via-50% to-indigo-800 to-90% sm:h-[350px] lg:h-[600px]"></div>
    </div>
  );
}
