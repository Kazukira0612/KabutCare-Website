
import React from "react";
import catImage from "./assets/cat.jpg"; // add a cat.jpg in src/assets or replace with a URL

const FEATURES = [
  {
    title: "Expert cat behavior solutions",
    text:
      "At Cat Spray, we understand the unique needs and behaviors of cats, and we offer a range of expert cat behavior solutions to help you and your cat live a happy and healthy life together.",
    icon: "🚀",
  },
  {
    title: "Personalized treatment plans",
    text:
      "We create tailored treatment plans that consider your cat's personality, environment and medical history to achieve the best outcome.",
    icon: "💡",
  },
  {
    title: "Positive reinforcement techniques",
    text:
      "We use proven positive reinforcement strategies to encourage lasting behavior change and strengthen the bond between you and your cat.",
    icon: "🎯",
  },
  {
    title: "Effective training techniques",
    text:
      "We teach practical, humane training techniques you can use daily to reduce problem behaviors and increase desirable ones.",
    icon: "🔥",
  },
];

export default function About2() {
  return (
    <section className="about-outer" id="About">
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p className="lead">
            Welcome to Cat Spray — expert cat behavior solutions to help you and your cat live a
            happy, healthy life together.
          </p>
        </header>

        <div className="features-grid" aria-label="Key features">
          {FEATURES.map((f, i) => (
            <article className="feature-card" key={i}>
              <div className="feature-icon" aria-hidden="true">
                <span>{f.icon}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

        <div className="why-grid">
          <div className="why-text">
            <h2>Why Choose Cat Spray?</h2>
            <ul>
              <li>
                <strong>Expert cat behavior solutions</strong>
                <p>
                  At Cat Spray, we understand the unique needs and behaviors of cats, and we offer
                  a range of expert cat behavior solutions to help you and your cat live a happy and
                  healthy life together.
                </p>
              </li>
              <li>
                <strong>Personalized treatment plans</strong>
                <p>
                  Treatment plans specifically designed for your cat's temperament and situation.
                </p>
              </li>
              <li>
                <strong>Positive, humane methods</strong>
                <p>We focus on reinforcement and trust-building rather than punishment.</p>
              </li>
            </ul>
          </div>

          <div className="why-image">
            <img src={catImage} alt="Cute kitten" />
          </div>
        </div>
      </div>
    </section>
  );
}
