import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      <Helmet>
        <title>
          Home
        </title>
      </Helmet>
      {/* heading */}
      <Heading 
        title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
        subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
        btn={'Shop Now'} 
      />
      {/* banner pic */}
      <Banner />
      <div className="w-10/12 mx-auto grid grid-cols-5">
        <div className="col-span-1">
          {/* category tab section */}
          
          <Categories categories={categories} />
        </div>
        <div className="col-span-4">
          {/* Dynamic Nested Component */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Home;
