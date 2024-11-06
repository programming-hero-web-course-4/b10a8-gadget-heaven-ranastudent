import React from 'react';
import Heading from '../components/Heading';
import { Helmet } from 'react-helmet-async';

const About_Us = () => {
      return (
            <div>
                  <Helmet>
                        <title>
                              About Us
                        </title>
                  </Helmet>
                  <Heading
                   title={'Cutting-Edge Electric Gadgets'}
                   subtitle={'Discover the Future of Innovation with Our Cutting-Edge Electric Gadgets. Elevate Your Lifestyle with Smart Devices Designed for Modern Living. Experience Unmatched Performance and Sleek Design. Your Ultimate Destination for the Latest in Technology.'}
                  />
            </div>
      );
};

export default About_Us;