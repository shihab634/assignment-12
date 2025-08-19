import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carouse = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-6 text-red-600">Donation Gallery</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">Every donation tells a story of hope and kindness. Our gallery showcases the heartfelt moments where generosity met need, creating life-saving miracles.</p>
      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
      <div>
        <img className="h-[500px] brightness-50 object-cover" src="https://i.ibb.co.com/LzdvF0yf/banner-1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img className="h-[500px] brightness-50 object-cover" src="https://i.ibb.co.com/ym76XT6G/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img className="h-[500px] brightness-50 object-cover" src="https://i.ibb.co.com/sdw8h2Yh/engin-akyurt-VEB19-Ieqec-unsplash.jpg" />
        <p className="legend">Legend 3</p>
        
      </div>
    </Carousel>
    </div>
  );
};

export default Carouse;
