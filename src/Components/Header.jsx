import React from 'react';
import Sig from '../assets/asset-signature.png';

const Header = () => {
  return (
    
    <header className="flex flex-col items-center justify-right min-h-7 text-center mt-20 ml-20">
      <img
        src={Sig}
        alt="Logo"
        className="w-auto h-24 mb-12"
      />
     <p className="text-base sm:text-lg md:text-xl font-light leading-loose text-gray-500 max-w-4xl px-4 sm:px-6 md:px-8 sm:-ml-4 pr-12">
  I’m a hands-on design leader who specializes in leading complex zero-to-one initiatives at fast-paced startups. Whether leading a small design team, overseeing an 80-person initiative, or pushing pixels myself, I do what it takes to create products that define and shape businesses.
</p>

    </header>
  );
};

export default Header;
