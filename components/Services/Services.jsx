import React from 'react';
import { SectionTitle } from '../../components';

import { services } from '../../utils/constans';

import Image from 'next/image';
const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <SectionTitle
          title='Services'
          position='center'
          className='services__title'
        />
        <ul className='services__list'>
          {services.map((card) => (
            <li
              key={card.id}
              className={`services__item ${
                card.theme === 'light'
                  ? 'services__item_theme_light'
                  : 'services__item_theme_dark'
              }`}
            >
              <a href='#' className='services__link'>
                <Image
                  src={card.image}
                  alt={card.title}
                  className='services__card-img'
                  width={40}
                  height={40}
                />
                <h3
                  className={`services__card-title ${
                    card.theme === 'light'
                      ? 'services__card-title_theme_light'
                      : 'services__card-title_theme_dark'
                  }`}
                >
                  {card.title}
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
