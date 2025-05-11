// Traditionalarts.jsx (Modified)
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Traditionalarts.css';

const Traditionalarts = () => {
  const traditionalArts = [
    {
      id: 't1', // Ensure unique IDs
      title: "Madhubani Painting",
      artist: "Traditional Artist",
      price: "$1,800",
      description: "A vibrant Madhubani painting depicting traditional motifs and nature elements from Bihar, India.",
      image: "8.jpg"
    },
    {
      id: 't2',
      title: "Warli Art",
      artist: "Traditional Artist",
      price: "$1,500",
      description: "Ancient tribal art form from Maharashtra, featuring simple geometric shapes and scenes from daily life.",
      image: "7.jpg"
    },
    {
      id: 't3',
      title: "Pattachitra",
      artist: "Traditional Artist",
      price: "$2,200",
      description: "Classical cloth-based scroll painting from Odisha, featuring mythological narratives and religious themes.",
      image: "6.jpg"
    },
    {
      id: 't4',
      title: "Tanjore Painting",
      artist: "Traditional Artist",
      price: "$3,500",
      description: "Rich and vibrant painting from Tamil Nadu, known for its gold foil work and precious stone embellishments.",
      image: "3.jpg"
    },
    {
      id: 't5',
      title: "Kalamkari",
      artist: "Traditional Artist",
      price: "$2,800",
      description: "Hand-painted or block-printed cotton textile art from Andhra Pradesh, featuring mythological scenes.",
      image: "4.jpg"
    },
    {
      id: 't6',
      title: "Gond Art",
      artist: "Traditional Artist",
      price: "$1,900",
      description: "Vibrant tribal art from Madhya Pradesh, characterized by intricate patterns and nature-inspired motifs.",
      image: "5.jpg"
    }
  ];

  return (
    <div className="painting-container">
      <h1>Traditional Arts Collection</h1>
      <div className="painting-grid">
        {traditionalArts.map((art) => (
          <div key={art.id} className="painting-card">
            <div className="painting-image">
              <img src={`/${art.image}`} alt={art.title} /> {/* Adjust image path */}
              <div className="painting-overlay">
                <div className="overlay-content">
                  <h3>{art.title}</h3>
                  <p className="artist">{art.artist}</p>
                  <p className="price">{art.price}</p>
                   {/* Use Link to navigate */}
                  <Link to={`/artwork/${art.id}`} className="view-details-btn">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="painting-info">
              <h3>{art.title}</h3>
              <p className="artist">{art.artist}</p>
              <p className="description">{art.description}</p>
              <p className="price">{art.price}</p>
               {/* Use Link to navigate */}
              <Link to={`/artwork/${art.id}`} className="inquire-btn">Buy Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traditionalarts;
