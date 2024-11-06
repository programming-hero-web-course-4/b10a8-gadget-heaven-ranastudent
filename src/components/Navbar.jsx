import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import CartWishlistContext from "../Utils/CartWishlistContext";
import { getStoreCartList } from "../Utils";
import { CountContext } from "../App";

const Navbar = () => {
  // const { cartCount, wishlistCount } = useContext(CartWishlistContext)
  // const {cartCount, wishlistCount} = useContext()
  const [allData, setAllData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // local storage
  useEffect(() => { const storedCartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0; setCartCount(storedCartCount); }, []);

  useEffect(() => {
    const storeCardList = getStoreCartList();
    const storeCardListInt = storeCardList.map(id => parseInt(id));
    setAllData(storeCardListInt);
  }, []);
  console.log(allData);
  // const [cart, setCart] = useContext(CountContext)
  // const isHomePage = location.pathname === '/' || location.pathname === '/home'; const navbarClass = isHomePage ? 'navbar bg-banner' : 'navbar bg-white';
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState('')
  useEffect(()=>{
    switch (location.pathname)
    {
      case '/': 
      case '/home':
         setBackgroundColor('bg-banner'); 
         break; 
      case '/dashboard': setBackgroundColor('bg-white'); 
        break; 
      case '/statistics': setBackgroundColor('bg-white'); 
        break; 
      default: setBackgroundColor('bg-white');
    }
  },[location])
  return (
    <div className={`navbar ${backgroundColor} w-11/12 mx-auto`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li className="" ><NavLink className="text-red" to='/' >Home</NavLink></li>
            <li className=""><NavLink className="text-red" to='/statistics' >Statistics</NavLink></li>
            <li className=""><NavLink className="text-red" to='/dashboard' >Dashboard</NavLink></li>
          </ul>
        </div>
        <NavLink to='/' className="text-xl  text-red">Gadget Heaven</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/' className="text-red" >Home</NavLink></li>
          <li><NavLink to='/statistics' className="text-red">Statistics</NavLink></li>
          <li><NavLink to='/dashboard' className="text-red" >Dashboard</NavLink></li>
          <li><NavLink to='about' className="text-red" >About Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end gap-10 mr-10">
        <a className="btn rounded-full bg-white"><BsCart4 />{cartCount}<p className=" cardList bg-white w-6 h-6 rounded-full"></p></a>
        <a className="btn rounded-full bg-white"><FaRegHeart /><p className="wishList bg-white w-6 h-6 rounded-full"></p></a>
      </div>
    </div>
  );
};

export default Navbar;