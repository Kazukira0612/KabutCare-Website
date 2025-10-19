import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spray from "./assets/spray.jpg";

      const products = [
        {   
            id: 1, 
            image: Spray, 
            description:"description 1", 
            price: "price 1$",
        },
        { 
            id: 2, 
            image: Spray, 
            description:"description 2", 
            price: "price 2$",
        },
        { 
            id: 3, 
            image: Spray, 
            description:"description 3",
            price: "price 3$",
        },
        { 
            id: 4,
            image: Spray, 
            description:"description 4", 
            price: "price 4$",
        },
        { 
            id: 5,
            image: Spray, 
            description:"description 5", 
            price: "price 5$",
        },
    ]; 

function Product() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
    <section className="product-section" id="Product"> 
      <div className="product-container">
        <h2 data-aos="fade-up" >Recommended Products</h2>
        <div className="product-slider">
          <Slider {...settings} >
            {products.map((product) => (
              <div key={product.id}>

               <ul className="product-list" data-aos="fade-up">

                  <li>
                    <div>
                    <img src={product.image} alt={product.description} />                      
                    </div>
                    <div>
                    <p className="product-description">{product.description}</p>                      
                    </div>
                    <div>
                    <p className="product-price">{product.price}</p>  
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

export default Product;