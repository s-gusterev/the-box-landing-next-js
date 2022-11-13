import React, { useState } from 'react';
import { menu } from '../../utils/constans';
import { Logo, Menu, MenuMobile, Burger } from '..';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='container header'>
      <Logo />
      <Menu menu={menu} />
      <MenuMobile menu={menu} isOpen={openMenu} />
      <Burger active={openMenu} onClick={() => setOpenMenu(!openMenu)} />
    </header>
  );
};

export default Header;
