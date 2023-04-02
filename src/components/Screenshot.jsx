import React from 'react';

export default function Screenshot() {
  return (
    <div className="relative hidden px-8 sm:flex sm:items-center sm:justify-center">
      <div className="border-1 z-10 flex justify-center rounded-[48px] border-[0.5px] border-solid border-stone-200/60 bg-white/20 p-7 shadow backdrop-blur-none dark:shadow-lg dark:shadow-stone-400/30 lg:backdrop-blur-md">
        <img
          src="/img/landing-page/screenshot.png"
          className="z-20 w-full max-w-[1200px]"
        />
      </div>
      <div className="absolute z-0 h-[350px] w-full bg-gradient-to-br from-rose-600 via-purple-500 to-indigo-800 lg:h-[600px]"></div>
    </div>
  );
}
