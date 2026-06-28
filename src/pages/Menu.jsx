import React from 'react';
import './Menu.css';
import images from '../images.json';

const menuCategories = [
  {
    title: "Biryani Choices",
    items: [
      { name: "Vegetarian Dum Biriyani", price: "$12.00", desc: "Aromatic basmati rice cooked with mixed vegetables and spices." },
      { name: "Chicken Dum Biriyani", price: "$15.00", desc: "Classic dum biryani with marinated tender chicken pieces." },
      { name: "Mutton Dum Biriyani", price: "$18.00", desc: "Our signature dum biryani with succulent mutton." }
    ]
  },
  {
    title: "Appetizers",
    items: [
      { name: "Samosa Chaat", price: "$8.00", desc: "Crispy samosas crushed and topped with chutneys." },
      { name: "Chicken 65", price: "$10.00", desc: "Spicy, deep-fried chicken appetizer." }
    ]
  },
  {
    title: "Prata & Dosa set",
    items: [
      { name: "Plain Prata Set", price: "$6.00", desc: "2 pieces of plain prata with curry." },
      { name: "Masala Dosa", price: "$8.50", desc: "Crispy crepe stuffed with spiced potato filling." }
    ]
  }
];

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="menu-header" style={{ backgroundImage: `url(${images[14] || images[1]})` }}>
        <div className="menu-header-content">
          <h1 className="animate__animated animate__fadeInDown">Our Menu</h1>
          <p className="animate__animated animate__fadeInUp">Authentic Taste in Every Bite</p>
        </div>
      </div>

      <div className="container menu-content">
        <div className="chef-recommends light-panel animate__animated animate__fadeIn">
          <h2>Our Chef Recommends</h2>
          <p>Our menu is thoughtfully crafted and we provide an impeccable service. We are known for sharing plates and crafting dishes.</p>
        </div>

        <div className="menu-grid">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="menu-category animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.2}s` }}>
              <h3>{category.title}</h3>
              <div className="menu-items">
                {category.items.map((item, i) => (
                  <div key={i} className="menu-item">
                    <div className="item-header">
                      <h4>{item.name}</h4>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
