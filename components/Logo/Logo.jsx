import React from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image';

const Logo = ({ className = '' }) => {
  return (
    <a href='#' className={`logo ${className}`}>
      <Image src={logo} alt='' className='logo__img' />
    </a>
  );
};

export default Logo;
