import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
      return (
            <div>
                  {/* Navbar */}
                  <Navbar/>
                  <div className="min-h-[calc(100vh-257px)]">
                        <Outlet/>
                  </div>
                 
                  {/* Footer */}
                  <Footer/>
            </div>
      );
};

export default MainLayout;