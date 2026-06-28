import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import './Home.css';
import images from '../images.json';

const features = [
  { title: "HALAL CERTIFIED", icon: images[22] || images[20], desc: "Certified Halal ingredients for peace of mind." },
  { title: "Eco friendly packaging", icon: images[21] || images[22], desc: "First to serve biryani in eco-conscious packaging." },
  { title: "Authentic spices", icon: images[29] || images[24], desc: "Our own recipe with the right mix of raw spices." },
  { title: "Fresh Meat", icon: images[30] || images[25], desc: "Only fresh mutton and chicken for our Biryani." },
  { title: "Good for you", icon: images[28] || images[26], desc: "Sunflower oil & pure ghee. No MSG or artificial colors." }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${images[9] || images[0]})` }}>
        <div className="container hero-content animate__animated animate__fadeInUp">
          <h1 className="hero-title">Authentic DUM Biryani</h1>
          <p className="hero-subtitle">Hand-picked raw spices blended to perfection</p>
          <Link to="/menu" className="gold-btn animate__animated animate__pulse animate__infinite">Order Now</Link>
        </div>
      </section>

      {/* Discover Section */}
      <section className="section discover-section container">
        <div className="discover-grid">
          <div className="discover-text animate__animated animate__fadeInLeft">
            <h2>Discover Our Story</h2>
            <p>
              We specialize in fusion of Indian food; especially DUM Biryani, Tandoor Grills, South Indian cuisine filled with aromatic and authentic taste. Our signature dish is the DUM Biryani & the oven grills with home ground spices and cooked on covered coal pot to get the flavor.
            </p>
            <p>
              Authentic taste has been given top priority while designing the menu. All our dish entails of richest spices to offer the most authentic flavor possible. Hence, we believe in not only providing delicious & quality food but also good customer service.
            </p>
          </div>
          <div className="discover-images animate__animated animate__fadeInRight">
            <img src={images[13] || images[1]} alt="Biryani Dish" className="img-main" />
            <img src={images[12] || images[2]} alt="Spices" className="img-sub" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="text-center animate__animated animate__fadeInDown">Treating your loved ones never felt so good!</h2>
          <div className="features-grid">
            {features.map((feat, index) => (
              <div key={index} className="feature-card light-panel animate__animated animate__zoomIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={feat.icon} alt={feat.title} className="feature-icon" />
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section container text-center">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial light-panel">
            <p className="quote">"Biryani taste here is good and consistent. After a long time, I have really enjoyed the homely taste of both chicken and mutton biryani..."</p>
            <p className="author">- Prakash Rajamohan</p>
          </div>
          <div className="testimonial light-panel">
            <p className="quote">"The food is absolutely wonderful because of its unique flavor and authentic taste. Especially my kids also loved it a lot..."</p>
            <p className="author">- lakkireddy.sailaja sudha</p>
          </div>
          <div className="testimonial light-panel">
            <p className="quote">"This place has my highest recommendation. This biryani is so flavourful, can’t express in words..."</p>
            <p className="author">- Sonali S</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
