import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
      return (
            <div className="navbar bg-banner w-11/12 mx-auto">
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
                  <li className="" ><NavLink to='/' >Home</NavLink></li>
                  <li className=""><NavLink to='/statistics' >Statistics</NavLink></li>
                  <li className=""><NavLink to='/dashboard' >Dashboard</NavLink></li>
                </ul>
              </div>
              <NavLink to='/' className="text-xl text-white">Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li><NavLink to='/' className="text-white" >Home</NavLink></li>
              <li><NavLink to='/statistics' className="text-white">Statistics</NavLink></li>
              <li><NavLink to='/dashboard' className="text-white" >Dashboard</NavLink></li>
              </ul>
            </div>
            <div className="navbar-end gap-10 mr-10">
              <a className="btn rounded-full bg-white"><BsCart4 /></a>
              <a className="btn rounded-full bg-white"><FaRegHeart /></a>
            </div>
          </div>
      );
};

export default Navbar;