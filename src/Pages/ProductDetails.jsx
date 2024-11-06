import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { TiShoppingCart } from "react-icons/ti";
import { IoHeartSharp } from "react-icons/io5";
import { addToStoreCartList, addToStoreWishList, updateCartCount } from "../Utils";
import { useContext, useState } from "react";
import CartWishlistContext from "../Utils/CartWishlistContext";
import { CountContext } from "../App";


const ProductDetails = () => {
      const { product_id } = useParams();
      const data = useLoaderData();
      const product = data.find(item => item.product_id === parseInt(product_id));
      // const { setCartCount, setWishlistCount } = useContext(CartWishlistContext)
      // console.log(product)
      const [count, setCount] = useState(0)
      const [isWishListDisabled, setIsWishListDisabled] = useState(false);

      // const [cart, setCart] = useContext(CountContext)
      const handleCartList = (id)=>{
            addToStoreCartList(id)
            updateCartCount();
            // setCartCount(prevCount => prevCount + 1);
            // setCart(cart + 1)
      }
      const handleWishList = (id)=>{
            addToStoreWishList(id)
            setIsWishListDisabled(true)
            // setWishlistCount(prevCount => prevCount + 1);
            // setCart(cart + 1)
      }
      return (

            <div>
                  <div className=" w-full z-0 relative">
                        <Heading title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>;
                  </div>
                  <div className=" flex w-8/12 mx-auto bg-white relative -mt-56" >
                        <div className="w-1/2 p-3">
                              <img className="w-11/12" src={product.product_image} alt={product.product_title} />
                        </div>
                        <div className="p-3 space-y-3">
                              <h2 className="text-2xl font-bold">{product.product_title}</h2>
                              <p>Price:{product.price}$</p>
                              <p className="text-sm text-banner">{product.availability ? 'In Stock' : 'out of Stock'}</p>
                              <p>{product.Specification}</p>
                              <p>Rating:{product.rating} </p>
                              <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                          type="radio"
                                          name="rating-2"
                                          className="mask mask-star-2 bg-orange-400"
                                          defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                              </div>
                              <div>
                                    <button onClick={()=>handleCartList(product.product_id)} className="btn btn-ghost bg-banner text-white" >Add To Card <TiShoppingCart /></button>
                                    <button onClick={()=>handleWishList(product.product_id)} className="btn btn-sm rounded-full bg-white" disabled={isWishListDisabled} ><IoHeartSharp /></button>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default ProductDetails;
