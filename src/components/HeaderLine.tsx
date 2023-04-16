import React from 'react';

const HeaderLine = ({ center }: { center?: boolean }) => {
  if (center == true) {
    return (
      <div className="mx-auto h-[2px] max-w-sm bg-gradient-to-r from-transparent via-indigo-700"></div>
    );
  } else {
    return (
      <div className="h-[2px] max-w-sm bg-gradient-to-r from-indigo-500 via-indigo-700"></div>
    );
  }
};

export default HeaderLine;
