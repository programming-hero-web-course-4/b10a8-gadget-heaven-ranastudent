import { Outlet, NavLink } from "react-router-dom";



const Dashboard = () => {
      return (
            <div>
                  <div className="relative text-center  items-center w-11/12 mx-auto bg-banner z-0 space-y-2 h-auto ">
                        <div className="bg-banner pb-52 w-11/12 mx-auto items-center text-center z-0">
                              <h1 className=" text-white  text-center text-2xl font-bold">Dashboard</h1>
                              <p className=" text-white text-center text-xl font-thin">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                              <div className=" items-center align-middle py-10 z-0">

                                    <NavLink to='add_card'>
                                    <button className="btn btn-active btn-secondary text-banner btn-lg mr-10 bg-white rounded-md text-center" >Cart</button>
                                    </NavLink>

                                    <NavLink to='add_wish'>
                                    <button className="btn btn-active btn-secondary text-banner btn-lg bg-white rounded-md text-center" >Wishlist</button>
                                    </NavLink>

                                    

                                    {/* {btn && <button className="btn btn-active btn-secondary text-banner bg-white rounded-md text-center" >{btn}</button>} */}
                              </div>
                        </div>
                  </div>
                  
                  <div className="w-11/12 mx-auto">
                        <Outlet />
                  </div>
            </div>
      );
};

export default Dashboard;