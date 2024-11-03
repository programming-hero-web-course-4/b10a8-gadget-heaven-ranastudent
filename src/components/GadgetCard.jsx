import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const GadgetCard = () => {
  const data = useLoaderData();
  const {category} = useParams();
  const [gadget, setGadget] = useState([]);

  useEffect(() => {
    if (category) {
      const filterByCategories = data.filter(gadget => gadget.category === category);
      setGadget(filterByCategories);
    } else {
      setGadget(data);
    }
  }, [category, data]);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {gadget.map(gadget => (
        <Card key={gadget.product_id} card={gadget} />
      ))}
    </div>
  );
};

export default GadgetCard;