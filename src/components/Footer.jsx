

const Footer = () => {
      return (
<footer className="footer footer-center bg-base-300 text-base-content p-10">
            <div className="w-2/3 mx-auto items-center">
                  <h2 className="text-2xl text-center font-bold">Gadget Heaven</h2>
                  <p className="text-center">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="w-10/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between">
                  <div>
                        <h1 className="text-xl font-bold">Services</h1>
                        <ul>
                              <li>Product Support</li>
                              <li>Order Tracking</li>
                              <li>Shipping & Delivery</li>
                              <li>Returns</li>
                        </ul>
                  </div>
                  <div>
                        <h1 className="text-xl font-bold">Company</h1>
                        <ul>
                              <li>About Us</li>
                              <li>Careers</li>
                              <li>Contact</li>
                        </ul>
                  </div>
                  <div>
                        <h1 className="text-xl font-bold">Legal</h1>
                        <ul>
                              <li>Terms of Services</li>
                              <li>Privacy Policy</li>
                              <li>Cookie policy</li>
                        </ul>
                  </div>
            </div>

</footer>
      );
};

export default Footer;