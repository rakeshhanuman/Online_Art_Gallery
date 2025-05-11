// Sculpture.jsx (Modified)
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Sculpture.css';

const Sculpture = () => {
  const sculptures = [
    {
      id: 's1', // Ensure unique IDs
      title: "Dancing Shiva",
      artist: "H R Das",
      price: "$4,500",
      description: "A magnificent bronze sculpture of Lord Shiva in his cosmic dance pose, capturing divine energy and movement.",
      image: "Dshiva.jpg"
    },
    {
      id: 's2',
      title: "Buddha in Meditation",
      artist: "H R Das",
      price: "$3,800",
      description: "Serene marble sculpture of Buddha in deep meditation, radiating peace and tranquility.",
      image: "budda.jpg"
    },
    {
      id: 's3',
      title: "Ganesha with Modak",
      artist: "H R Das",
      price: "$3,200",
      description: "Charming bronze sculpture of Lord Ganesha holding his favorite sweet, modak, with intricate details.",
      image: "ganesh.jpg"
    },
    {
      id: 's4',
      title: "Peacock in Flight",
      artist: "H R Das",
      price: "$2,800",
      description: "Dynamic metal sculpture capturing the grace and beauty of a peacock in mid-flight.",
      image: "pea.jpg"
    },
    {
      id: 's5',
      title: "Mother and Child",
      artist: "H R Das",
      price: "$3,500",
      description: "Heartwarming stone sculpture depicting the eternal bond between mother and child.",
      image: "mother.jpg"
    },
    {
      id: 's6',
      title: "Abstract Harmony",
      artist: "H R Das",
      price: "$2,900",
      description: "Modern abstract sculpture exploring the balance between form and space in contemporary art.",
      image: "abstract.jpg"
    }
  ];

  return (
    <div className="sculpture-container">
      <h1>Our Sculpture Collection</h1>
      <div className="sculpture-grid">
        {sculptures.map((sculpture) => (
          <div key={sculpture.id} className="sculpture-card">
            <div className="sculpture-image">
              <img src={`/${sculpture.image}`} alt={sculpture.title} /> {/* Adjust image path */}
              <div className="sculpture-overlay">
                <div className="overlay-content">
                  <h3>{sculpture.title}</h3>
                  <p className="artist">{sculpture.artist}</p>
                  <p className="price">{sculpture.price}</p>
                  {/* Use Link to navigate */}
                  <Link to={`/artwork/${sculpture.id}`} className="view-details-btn">View Details</Link>
                </div>
              </div>
            </div>
            <div className="sculpture-info">
              <h3>{sculpture.title}</h3>
              <p className="artist">{sculpture.artist}</p>
              <p className="description">{sculpture.description}</p>
              <p className="price">{sculpture.price}</p>
              {/* Use Link to navigate */}
              <Link to={`/artwork/${sculpture.id}`} className="inquire-btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sculpture;
