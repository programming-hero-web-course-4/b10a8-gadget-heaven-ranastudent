
import React from 'react';

const Card = ({ card }) => {
  const { product_id, product_title, product_image, price } = card || {};

  return (
    <div className='p-10 border-spacing-2'>
      <img className='h-32 flex flex-col flex-grow' src={product_image} alt={product_title} />
      <h2>{product_title}</h2>
      <p>price: {price}</p>
      <button className='btn btn-square text-banner border-banner w-2/3 text-center'>View Details</button>
    </div>
  );
};

export default Card;