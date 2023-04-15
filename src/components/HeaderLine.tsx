import React from 'react';

const HeaderLine = ({ center }: { center?: boolean }) => {
  if (center == true) {
    return (
      <div className="mx-auto h-[2px] max-w-sm bg-gradient-to-r  from-white via-indigo-700 to-white"></div>
    );
  } else {
    return (
      <div className="h-[2px] max-w-sm bg-gradient-to-r from-indigo-500 via-indigo-700 to-white"></div>
    );
  }
};

export default HeaderLine;
