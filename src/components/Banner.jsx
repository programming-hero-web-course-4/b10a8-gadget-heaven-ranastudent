import banner from '.././assets/banner.jpg'

const Banner = () => {
      return (
            <div className="relative w-8/12 mx-auto  -mt-4 px-36 min-h-screen">
                  <img className='z-20  -mt-36 w-full rounded-xl shadow-transparent ' src={banner} alt="" />
                  <div className='w-6/10 mx-auto mt-14 mb-5 '><h2 className='bg-white text-2xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2></div>
            </div>
      );
};

export default Banner;