import React from "react";

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>RUN IT UP...</h1>
        <p>
          "Nike shoes combine cutting-edge technology, style, and comfort for
          athletes and everyday wear. Designed for performance and durability,
          they offer superior cushioning and support.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkar-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
      <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
}

export default Hero;
