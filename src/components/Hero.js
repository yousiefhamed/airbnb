import React from "react";
import heroImg from "./../hero.png";

export default function Hero() {
  return (
    <header className="hero_section">
      <img src={heroImg} alt="hero img section" />
      <section className="hero_text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </header>
  );
}
