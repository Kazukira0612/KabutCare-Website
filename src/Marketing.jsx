{/*
import React, { useState, useEffect } from "react";

function Marketing() {
    const marketings = [
        {   
            id: 1, 
            image: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg", 
            title:"title 1",
            description:"description 1", 
        },
        { 
            id: 2, 
            image: "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg", 
            title:"title 2",
            description:"description 2", 
        },
        { 
            id: 3, 
            image: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg", 
            title:"title 3",
            description:"description 3",
        },
        { 
            id: 4,
            image: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg", 
            title:"title 4",
            description:"description 4", 
        },
        { 
            id: 5,
            image: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg", 
            title:"title 5",
            description:"description 5", 
        },
    ]; 

    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoPlay) {
                setCurrentSlide(currentSlide === marketings.length - 1 ? 0 : currentSlide + 1);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentSlide, autoPlay]);


    return (
        
        <div className="carousel-section" id="Marketing">
            <div className="carousel">
                <div className="carousel-container" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
                    {marketings.map((marketing , index) => (
                       
                        <div className={index == currentSlide ? "carousel-item carousel-item-active" : "carousel-item"} key={index}>

                            <img className="item-image" src={marketing.image} alt={marketing.name} />

                            <div className="item-overlay">
                                <h3 data-aos="fade-right">{marketing.title}</h3>
                                <p data-aos="fade-right">{marketing.description}</p>
                                <button className="item-button" data-aos="fade-right">Learn More</button>
                            </div>
                        </div>    
                    
                    ))}  
                    <div className="carousel-controls">
                        <button className="previouses" onClick={() => setCurrentSlide(currentSlide === 0 ? marketings.length - 1 : currentSlide - 1)} >
                            <i className="fa-solid fa-chevron-left"></i>
                            </button>
                        <button className="nexted" onClick={() => setCurrentSlide(currentSlide === marketings.length - 1 ? 0 : currentSlide + 1)}>
                            <i className="fa-solid fa-chevron-right"></i>
                            </button>
                    </div>
                    <div className="carousel-dots">
                        {marketings.map((_, index) => (
                            <div className={index === currentSlide ? "dot dot-active" : "dot"}  key={index} onClick={() => setCurrentSlide(index)}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default Marketing */}