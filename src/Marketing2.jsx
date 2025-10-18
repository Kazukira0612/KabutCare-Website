import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

      const products = [
        {   
            id: 1, 
            image: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg", 
        },
        { 
            id: 2, 
            image: "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg", 
        },
        { 
            id: 3, 
            image: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg", 
        },
    ]; 

function Marketing2() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    lazyLoad: true,
    pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <section className="Marketing2-section" id="Marketing2"> 
      <div className="Marketing2-container">
        <div className="Marketing2-slider">
          <Slider {...settings} >
            {products.map((product) => (
              <div key={product.id}>

               <ul className="Marketing2-list">
                  <li>
                    <div>
                    <img src={product.image} alt={product.description} />                      
                    </div>              
                  </li>
               </ul>

              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Marketing2;