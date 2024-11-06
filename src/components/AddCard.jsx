import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreCartList } from '../Utils';
import { toast } from 'react-toastify';
import Modal from './Modal';

const AddCard = () => {
      const [cardList, setCardList] = useState([])
      const [showModal, setShowModal] = useState(false);
      const products = useLoaderData()
      console.log(products)
      useEffect(() => {
            const storeCardList = getStoreCartList();
            const storeCardListInt = storeCardList.map(id => parseInt(id))
            const cardAddList = products.filter(product => storeCardListInt.includes(product.product_id))

            setCardList(cardAddList)
      }, [products])
      const totalPrice = cardList.reduce((total, product) => total + product.price, 0);
      const handleSortByPrice = () => { const sortedList = [...cardList].sort((a, b) => b.price - a.price); setCardList(sortedList); };
      const handlePurchase = () => {
            setCardList([]);
            localStorage.removeItem('cart-list');
            toast.success('you successfully purchase product')
            setShowModal(true)
      };
      const handleCloseModal = () => {
            setShowModal(false);
      };
      return (
            <div>
                  <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Cart</p>

                        <div className='flex justify-around space-x-24'>
                              <div>
                                    <p className='text-xl font-bold space-x-2'>
                                          Total cost: {totalPrice}
                                    </p>
                              </div>
                              <button onClick={handleSortByPrice} className='btn btn-square w-48 bg-banner text-white'>Sort by Price</button>
                              <button onClick={handlePurchase} className='btn btn-square w-48 bg-banner text-white'>Purchase</button>
                        </div>
                  </div>
                  <div>
                        {cardList.map(product => (<div className='flex space-x-6 p-10' key={product.product_id}>
                              <img className='h-16' src={product.product_image} alt={product.product_title} />
                              <div className='space-y-4'>
                                    <p>{product.product_title}</p>
                                    <p>{product.description}</p>
                                    <p>price {product.price}</p>
                              </div>
                        </div>))}
                  </div>
                  <Modal show={showModal} onClose={handleCloseModal} >
                        <p className='text-red' >Thank you for your purchase!</p> 
                        <button  onClick={handleCloseModal} className='btn btn-primary text-red bg-white'>Close</button>
                  </Modal>
            </div>
      );
};

export default AddCard;