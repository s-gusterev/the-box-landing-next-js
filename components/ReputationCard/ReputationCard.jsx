import React from 'react';

import Image from 'next/image';

const ReputationCard = ({ image, title, paragraph }) => {
  return (
    <div className='reputation-card'>
      <Image
        className='reputation-card__img'
        src={image}
        alt={title}
        width={40}
        height={40}
      />
      <h3 className='reputation-card__title'>{title}</h3>
      <p className='reputation-card__paragraph'>{paragraph}</p>
    </div>
  );
};

export default ReputationCard;
