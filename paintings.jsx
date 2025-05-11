import React from 'react';
import { useCart } from './CartContext';
import './Painting.css';

const Painting = () => {
  const { addToCart } = useCart();
  
  const paintings = [
    {
      id: 1,
      title: "Horse in Orange",
      artist: "H R Das",
      price: "$2,500",
      description: "A stunning portrayal of a horse against a vibrant orange background, showcasing movement and grace.",
      image: "horse.jpg"
    },
    {
      id: 2,
      title: "Abstract Nature",
      artist: "H R Das",
      price: "$1,800",
      description: "An abstract interpretation of natural forms using bold colors and fluid shapes.",
      image: "nature.jpg"
    },
    {
      id: 3,
      title: "Traditional Motifs",
      artist: "H R Das",
      price: "$2,200",
      description: "A beautiful blend of traditional Indian art motifs with contemporary style.",
      image: "traditional.jpg"
    },
    {
      id: 4,
      title: "Radha Krishna",
      artist: "H R Das",
      price: "$3,500",
      description: "Divine portrayal of Radha Krishna in traditional Indian art style with vibrant colors.",
      image: "radha.jpg"
    },
    {
      id: 5,
      title: "Mystic Buddha",
      artist: "H R Das",
      price: "$2,800",
      description: "Serene and peaceful Buddha painting with gold leaf accents and meditation theme.",
      image: "budda.jpg"
    },
    {
      id: 6,
      title: "Modern Ganesha",
      artist: "H R Das",
      price: "$3,200",
      description: "Contemporary interpretation of Lord Ganesha with abstract elements and rich textures.",
      image: "ganesh.jpg"
    }
  ];

  const handleBuyNow = (painting) => {
    addToCart(painting);
  };

  return (
    <div className="painting-container">
      <h1>Our Paintings Collection</h1>
      <div className="painting-grid">
        {paintings.map((painting) => (
          <div key={painting.id} className="painting-card">
            <div className="painting-image">
              <img src={painting.image} alt={painting.title} />
              <div className="painting-overlay">
                <div className="overlay-content">
                  <h3>{painting.title}</h3>
                  <p className="artist">{painting.artist}</p>
                  <p className="price">{painting.price}</p>
                  <button 
                    className="view-details-btn"
                    onClick={() => handleBuyNow(painting)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="painting-info">
              <h3>{painting.title}</h3>
              <p className="artist">{painting.artist}</p>
              <p className="description">{painting.description}</p>
              <p className="price">{painting.price}</p>
              <button 
                className="inquire-btn"
                onClick={() => handleBuyNow(painting)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Painting;
