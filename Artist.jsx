import React from 'react';
import './Artist.css';

const Artist = () => {
  const popularArtists = [
    {
      id: 1,
      name: "Vincent van Gogh",
      image: "vn.jpg",
      description: "Post-Impressionist painter known for his bold colors and expressive brushstrokes"
    },
    {
      id: 2,
      name: "Leonardo da Vinci",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg",
      description: "Renaissance artist and inventor, creator of the Mona Lisa"
    },
    {
      id: 3,
      name: "Pablo Picasso",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg",
      description: "Modern artist who co-founded the Cubist movement"
    },
    {
      id: 4,
      name: "Frida Kahlo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/800px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
      description: "Mexican artist known for her self-portraits and vibrant colors"
    },
    {
      id: 5,
      name: "Claude Monet",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
      description: "Founder of French Impressionist painting"
    },
    {
      id: 6,
      name: "Salvador Dalí",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg",
      description: "Surrealist artist known for his striking and bizarre images"
    }
  ];

  return (
    <div className="artist-container">
      <h1>Popular Artists</h1>
      <div className="artist-grid">
        {popularArtists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <h2>{artist.name}</h2>
            <p>{artist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
