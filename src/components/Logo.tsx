import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
        <span className="text-white font-bold text-xl">R</span>
      </div>
      <span className="ml-2 text-light font-medium">Ritav</span>
    </div>
  );
};

export default Logo;
