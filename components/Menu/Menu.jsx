import React from 'react';
import Link from 'next/link';

const Menu = ({ menu }) => {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        {menu.map((item) => {
          return (
            <li className='menu__item' key={item.url}>
              <Link href={item.url} className='menu__link'>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
