import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    {
      name: "Buffalo Milk",
      price: "₹100 per liter",
      image: "images/homebmilk.png",
      description:
        "Pure and fresh buffalo milk, rich in nutrients and calcium.",
    },
    {
      name: "Cow Milk",
      price: "₹80 per liter",
      image: "images/homecmilk.png",
      description: "Natural cow milk straight from our farm to your doorstep.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Fresh Dairy Products</h1>
        <p>
          Experience the goodness of pure and fresh milk delivered directly from
          our farm to your doorstep.
        </p>
        <Link to="/contact" className="button">
          Order Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="description">{product.description}</p>
                <Link to="/contact" className="book-btn">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <h2>Why Choose Us</h2>
        <div className="why-cards">
          <div className="why-card">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3>100% Pure</h3>
            <p>Our milk is free from adulterants and preservatives.</p>
          </div>

          <div className="why-card">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Fresh Daily</h3>
            <p>Milk is delivered fresh every morning to your doorstep.</p>
          </div>

          <div className="why-card">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <h3>Healthy Animals</h3>
            <p>Our animals are well-fed and kept in clean environments.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to experience pure dairy products?</h2>
        <p>
          Order now and enjoy the goodness of fresh milk delivered to your
          doorstep.
        </p>
        <Link to="/contact" className="cta-button">
          Book Your Order
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
