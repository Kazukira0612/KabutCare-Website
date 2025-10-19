import React from "react";
// place your product image at: src/assets/product.png
import productImg from "./assets/spray2.jpg";

export default function Home2() {
    return (
        <section className="home2" id="Home">
            <div className="home2-inner">
                <div className="home2-left">
                    <span className="badge">🔥 Expert Cat behavior Solution</span>
                    <h1 className="main-title">KABOT CARE</h1>
                    <p className="subtitle">Care for your pets, care for your home.</p>
                    <button className="cta">
                        Get Started
                        <svg className="arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                            <path fill="none" stroke="currentColor" strokeWidth="2" d="M5 12h14M13 5l6 7-6 7"/>
                        </svg>
                    </button>
                </div>

                <div className="home2-right">
                    <div className="product-card">
                        <img src={productImg} alt="Cat & Dog repellent" className="product-img" />
                    </div>

                    <div className="info-chip">
                        <div className="percent">99.9%</div>
                        <div className="desc">Happy & stress free</div>
                        <div className="tick">✓</div>
                    </div>
                </div>
            </div>
        </section>
    );
}