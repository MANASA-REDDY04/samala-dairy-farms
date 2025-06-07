import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  const sections = [
    {
      id: "our-dairy",
      title: "Our Dairy",
      description:
        "Samala Venkat Reddy Dairy is committed to providing pure and fresh milk directly from our farm. Established with the vision of delivering quality dairy products, we take pride in maintaining high standards in animal care and milk processing.",
      image: "/images/dairy2.jpg",
    },
    {
      id: "food-for-animals",
      title: "Food for Animals",
      description:
        "We believe that the quality of milk is directly related to the health of our animals. Our cows and buffaloes are fed with nutritious fodder grown on our own farm to ensure they remain healthy and produce the best quality milk. We prioritize organic feed and avoid harmful supplements.",
      image: "/images/bfood1.jpg",
    },
    {
      id: "getting-fresh-milk",
      title: "Getting Fresh Milk",
      description:
        "Our milking process is designed to maintain the highest level of hygiene. We use modern equipment for milking and immediately cool the milk to preserve its freshness. The milk is delivered to our customers within hours of milking, ensuring they receive the freshest product possible.",
      image: "/images/milk1.jpg",
    },
  ];

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Our Dairy</h1>
          <p>
            Learn about our journey, commitment to quality, and the care we take
            in producing pure dairy products.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-card">
          <h2>Our Story</h2>
          <p>
            Samala Venkat Reddy Dairy was founded with a simple mission: to
            provide pure and fresh milk to our community. What started as a
            small family business has now grown into a trusted name in dairy
            products.
          </p>
          <p>
            Our founder, Mr. Samala Venkat Reddy, believed in the importance of
            maintaining traditional methods while embracing modern technology to
            ensure the highest quality of milk production. His vision continues
            to guide our operations to this day.
          </p>
          <p>
            We take pride in our commitment to quality, hygiene, and customer
            satisfaction. Our dairy farm is located in a pollution-free
            environment, where our animals are well-cared for and fed with
            nutritious fodder.
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="info-section">
          <div className={`info-card ${index % 2 !== 0 ? "reverse" : ""}`}>
            <div className="image-container">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="text-container">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-box">
            <div className="icon-circle">✔</div>
            <h3>Quality</h3>
            <p>
              We never compromise on the quality of our products. From animal
              care to delivery, we maintain the highest standards.
            </p>
          </div>
          <div className="value-box">
            <div className="icon-circle">🔍</div>
            <h3>Transparency</h3>
            <p>
              We believe in being transparent about our processes and are always
              open to customer visits to our dairy farm.
            </p>
          </div>
          <div className="value-box">
            <div className="icon-circle">❤️</div>
            <h3>Care</h3>
            <p>
              We care deeply about our animals, our environment, and our
              customers' health and satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
