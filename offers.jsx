// Offer.jsx (Modified)
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Offer.css';

// Import your artwork data arrays to get specific items for offers if needed
// import { artworks, newArrivals } from './App'; // Adjust import path if needed

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Collection Sale",
      artist: "Multiple Artists",
      price: "Up to 40% OFF",
      description: "Exclusive summer collection featuring vibrant artworks from our curated selection of artists.",
      image: "13.jpg",
      validUntil: "July 31, 2024",
      // Add a field to link to a representative artwork or a category page
      // linkedArtworkId: 'art1' // Example: link to a specific artwork from App.jsx
      linkPath: '/paintings' // Example: link to the Paintings category page
    },
    {
      id: 2,
      title: "Traditional Art Festival",
      artist: "Traditional Masters",
      price: "25% OFF",
      description: "Special discount on authentic traditional Indian art pieces during our annual festival.",
      image: "14.jpg",
      validUntil: "August 15, 2024",
      // linkedArtworkId: 't1' // Example: link to a specific traditional artwork
      linkPath: '/traditionalarts' // Example: link to the Traditional Arts page
    },
    {
      id: 3,
      title: "New Artist Showcase",
      artist: "Emerging Artists",
      price: "20% OFF",
      description: "Support emerging talent with special prices on debut collections from new artists.",
      image: "12.jpg",
      validUntil: "September 30, 2024",
       // linkedArtworkId: 'new3' // Example: link to a specific new arrival
       linkPath: '/' // Example: link to the homepage (where new arrivals are shown)
    },
    {
      id: 4,
      title: "Festive Season Special",
      artist: "Gallery Collection",
      price: "30% OFF",
      description: "Celebrate the festive season with our special collection of religious and cultural artworks.",
      image: "9.jpg",
      validUntil: "October 31, 2024",
       linkPath: '/paintings' // Example: link to Paintings
    },
    {
      id: 5,
      title: "Abstract Art Week",
      artist: "Contemporary Artists",
      price: "15% OFF",
      description: "Explore modern abstract art with special pricing on selected contemporary pieces.",
      image: "10.jpg",
      validUntil: "August 31, 2024",
       linkPath: '/paintings' // Example: link to Paintings (assuming abstract are paintings)
    },
    {
      id: 6,
      title: "Sculpture Special",
      artist: "Master Sculptors",
      price: "35% OFF",
      description: "Exclusive offers on handcrafted sculptures from renowned artists.",
      image: "15.jpg",
      validUntil: "September 15, 2024",
      linkPath: '/sculpture' // Example: link to Sculpture page
    }
  ];

  return (
    <div className="painting-container"> {/* Note: Class name might be better as 'offers-container' */}
      <h1>Special Offers</h1>
      <div className="painting-grid"> {/* Note: Class name might be better as 'offers-grid' */}
        {offers.map((offer) => (
          <div key={offer.id} className="painting-card"> {/* Note: Class name might be better as 'offer-card' */}
            <div className="painting-image"> {/* Note: Class name might be better as 'offer-image' */}
              <img src={`/${offer.image}`} alt={offer.title} /> {/* Adjust image path */}
              <div className="painting-overlay"> {/* Note: Class name might be better as 'offer-overlay' */}
                <div className="overlay-content">
                  <h3>{offer.title}</h3>
                  <p className="artist">{offer.artist}</p>
                  <p className="price">{offer.price}</p>
                  <p className="valid-until">Valid until: {offer.validUntil}</p>
                  {/* Link to the specified path (artwork detail or category) */}
                  <Link to={offer.linkPath} className="view-details-btn">
                    {offer.linkedArtworkId ? 'View Details' : 'View Offer'}
                  </Link>
                </div>
              </div>
            </div>
            <div className="painting-info"> {/* Note: Class name might be better as 'offer-info' */}
              <h3>{offer.title}</h3>
              <p className="artist">{offer.artist}</p>
              <p className="description">{offer.description}</p>
              <p className="price">{offer.price}</p>
              <p className="valid-until">Valid until: {offer.validUntil}</p>
               {/* Link to the specified path */}
              <Link to={offer.linkPath} className="inquire-btn">
                 {offer.linkedArtworkId ? 'Get Offer' : 'View Offer'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
