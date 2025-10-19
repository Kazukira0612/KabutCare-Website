
import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Home() {

    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const navRef = useRef();
  const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
  }



  return (
    <div className="Home-container">
        <header className="header">
            <h1 data-aos="fade-down" >KABOT CARE</h1>            
            <nav className="nav" ref={navRef}>

                <ul className="nav-links">
                    <li ><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection("Home");}}>Home</a></li>
                    <li ><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection("About");}}>About</a></li>
                    <li ><a href="#causes" onClick={(e) => {e.preventDefault(); scrollToSection("Causes");}}>Causes</a></li>
                    <li ><a href="#Product" onClick={(e) => {e.preventDefault(); scrollToSection("Product");}}>Product</a></li>
                    <li ><a href="#QnA" onClick={(e) => {e.preventDefault(); scrollToSection("QnA");}}>QnA</a></li>
                    <li ><a href="#Contact" onClick={(e) => {e.preventDefault(); scrollToSection("Contact");}}>Contact</a></li>
                </ul>

                <button className="menu-icon close-icon" onClick={showNavbar} >
                    <FaTimes />
                </button>

            </nav>

            <button className="menu-icon" onClick={showNavbar} >
                <FaBars />
            </button>

        </header>
    
    </div>
  );
}

export default Home;