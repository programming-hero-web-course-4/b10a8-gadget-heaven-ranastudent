import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreCartList } from '../Utils';

const AddWishList = () => {
      const [cardList, setCardList] = useState([])
      const products = useLoaderData()
      console.log(products)
      useEffect(() => {
            const storeCardList = getStoreCartList();
            const storeCardListInt = storeCardList.map(id => parseInt(id))
            const cardAddList = products.filter(product => storeCardListInt.includes(product.product_id))

            setCardList(cardAddList)
      }, [products])
      const totalPrice = cardList.reduce((total, product) => total + product.price, 0);
      return (
            <div>
                  <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Wish List</p>
                        <p className='text-xl font-bold space-x-2'>
                              Total cost: {totalPrice}
                        </p>
                  </div>
                  <div className=''>
                        {cardList.map(product => (<div className='flex space-x-20 p-10' key={product.product_id}>
                              <img className='h-16' src={product.product_image} alt={product.product_title} />
                              <div className='space-y-4'>
                                    <p>{product.product_title}</p>
                                    <p>{product.description}</p>
                                    <p>price {product.price}</p>
                              </div>
                        </div>))}
                  </div>
            </div>
      );
};

export default AddWishList;