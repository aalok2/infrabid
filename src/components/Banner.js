// Banner.js
import React from 'react';
import './Banner.css';
import heroImage from '../assets/landing_page.png';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <span className="icon">{icon}</span>
      <div className="feature-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Banner = () => {
  const contractfeatures = [
    {
      title: "Quick Bidding Process",
      description:
        "Receive bids from contractors or suppliers in no time, helping you move forward faster.",
      icon: "✔",
    },
    {
      title: "Wider Reach",
      description:
        "Connect with verified professionals across India for reliable partnerships.",
      icon: "✔",
    },
    {
      title: "Cost-Effective Posting",
      description:
        "List your tenders for a nominal fee, making the process affordable for everyone.",
      icon: "✔",
    },
  ]
  const equipmentfeatures = [
    {
      title: "Easy Rentals & Listings",
      description:
        "Rent equipment hassle-free or list your idle machinery to earn extra income.",
      icon: "✔",
    },
    {
      title: "Diverse Options",
      description:
        "Access a wide range of construction machinery tailored to your project needs.",
      icon: "✔",
    },
    {
      title: "Save Time & Money",
      description:
        "Avoid the middleman and directly connect with equipment owners or renters.",
      icon: "✔",
    },
  ]
  return (
    <div className="banner">
      <h1>
        YOUR CONSTRUCTION NEEDS IN <span className="highlight">ONE GO</span>.
      </h1>
      <div className="cards">
        {/* For Contracts */}
        <div className="card">
          <div className="card-header"
          style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="card-header-content">
              <div className="card-header-name">FOR CONTRACTS</div>
              <p>
                Post or bid on construction tenders across India and hassle-free
                processing.
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
          <div className="card-content">
            {contractfeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header"
          style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="card-header-content">
              <div className="card-header-name">FOR EQUIPMENT</div>
              <p>
                Easily rent or list construction machinery to save time and money.
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
          <div className="card-content">
            {equipmentfeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

