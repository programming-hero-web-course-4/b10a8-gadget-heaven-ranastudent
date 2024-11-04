import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import { CgArrowTopLeft } from 'react-icons/cg';

const GadgetCard = () => {
  const data = useLoaderData();
  // console.log(data)
  const {category} = useParams();
  const [gadget, setGadget] = useState([]);
  
  useEffect(() => {
    if (category) {
      const filterByCategories = data.filter(gadget => gadget.category === category);
      // setGadget(filterByCategories);
      if (category === "All Products") {
        setGadget(data)
      }
      
      else{
        setGadget(filterByCategories);
      }
    }
    
     else {
      setGadget(data.slice(0, 8));
      // console.log(gadget)
    }
  }, [category, data]);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {/* {gadget.map(gadget => (
        <Card key={gadget.product_id} card={gadget} />
      ))
      } */}
      {
        gadget.length > 0 ? (
          gadget.map(gadget => (
            <Card key={gadget.product_id} card={gadget} />
          ))
        ) : (
          <div className='flex justify-center items-center w-full' > <p className='text-xl font-bold'>Products Not available</p> </div>
        )
      }
    </div>
  );
};

export default GadgetCard;