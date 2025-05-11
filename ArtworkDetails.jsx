// ArtworkDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Assuming CartContext path
import './ArtworkDetail.css'; // We'll create this CSS file

// Import your artwork data arrays (assuming they are available or you'll fetch from an API)
// For this example, we'll use the artwork arrays defined in App.jsx
import { artworks as allArtworks, newArrivals as allNewArrivals } from './App'; // Adjust import path if needed

const ArtworkDetail = () => {
  const { artworkId } = useParams(); // Get the artwork ID from the URL
  const { addToCart } = useCart(); // Use the cart context
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch artwork details from an API here
    // For this example, we'll find the artwork in the existing arrays
    const foundArtwork = [...allArtworks, ...allNewArrivals].find(
      item => item.id === artworkId
    );

    if (foundArtwork) {
      setArtwork(foundArtwork);
    } else {
      // Handle case where artwork is not found (e.g., show a 404 message)
      setArtwork(null); // Or set an error state
    }
  }, [artworkId]); // Re-run effect if artworkId changes

  if (!artwork) {
    return <div className="artwork-detail-container">Artwork not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(artwork);
    // Optionally, provide user feedback (e.g., a notification)
    alert(`${artwork.title} added to cart!`); // Simple alert for now
  };

  return (
    <div className="artwork-detail-container">
      <div className="artwork-detail-content">
        <div className="artwork-detail-image">
          <img src={`/${artwork.image}`} alt={artwork.title} /> {/* Adjust image path as necessary */}
        </div>
        <div className="artwork-detail-info">
          <h1>{artwork.title}</h1>
          <p className="artist">By: {artwork.artist}</p>
          <p className="description">{artwork.description}</p>
          <p className="price">{artwork.price}</p>
          {/* Add other details like dimensions, medium, etc. if available */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {/* Optionally, add a "Buy Now" button here that also adds to cart and redirects to cart */}
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
