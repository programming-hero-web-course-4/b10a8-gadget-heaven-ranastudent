import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Card = ({ card }) => {
  console.log(card)
  const { product_title, product_image, price, product_id} = card || ['items'];

  return (
    <div className='p-10 border-spacing-2'>
      <img className='h-32 flex flex-col flex-grow' src={product_image} alt={product_title} />
      <h2>{product_title}</h2>
      <p>price: {price}</p>
      <Link key={card.id} to={`card/${product_id}`} ><button className='btn btn-square text-banner border-banner w-2/3 text-center'>View Details</button></Link>
    </div>
  );
};

export default Card;