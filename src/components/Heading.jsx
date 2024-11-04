     

const Heading = ({title, subtitle, btn}) => {
      return (
            <div className="relative text-center  items-center w-11/12 mx-auto bg-banner z-0 space-y-2 h-auto ">
                  <div className="bg-banner pb-52 w-11/12 mx-auto items-center text-center z-0">
                  <h1 className=" text-white  text-center text-2xl font-bold">{title}</h1>
                  <p className=" text-white text-center text-xl font-thin">{subtitle}</p>
                  <div className=" py-10 z-0">
                  {/* <button className="btn btn-active btn-secondary text-banner bg-white rounded-md text-center" >{btn}</button> */}
                  {btn && <button className="btn btn-active btn-secondary text-banner bg-white rounded-md text-center" >{btn}</button>}
                  </div>
                  </div>
            </div>
      );
};

export default Heading;