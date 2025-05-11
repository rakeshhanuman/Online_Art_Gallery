APP code
// App.jsx (Modified)
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Artist from './Artist';
import Painting from './Painting';
import Sculpture from './Sculpture';
import Print from './Print';
import Traditionalarts from './Traditionalarts';
import Offer from './Offer';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Login from './login';
import ArtworkDetail from './ArtworkDetail';
// Import the new AddressForm component
import AddressForm from './AddressForm';


// Assuming the data arrays (newArrivals, artworks) are defined below the App component or imported
// Ensure these are exported if ArtworkDetail needs them
export const newArrivals = [
  {
    id: 'new1',
    title: "Dancing Peacock",
    artist: "H R Das",
    price: "3,200",
    description: "Vibrant portrayal of India's national bird in traditional art style.",
    image: "pea.jpg"
  },
  {
    id: 'new2',
    title: "Golden Temple",
    artist: "H R Das",
    price: "4,500",
    description: "Spiritual artwork depicting the serene Golden Temple in watercolors.",
    image: "gp.jpg"
  },
  {
    id: 'new3',
    title: "Village Life",
    artist: "H R Das",
    price: "2,800",
    description: "Colorful representation of traditional Indian village life.",
    image: "villagelife.jpg"
  }
];

export const artworks = [
  {
    id: 'art1',
    title: "Horse in Orange",
    artist: "H R Das",
    price: "2,500",
    description: "A stunning portrayal of a horse against a vibrant orange background, showcasing movement and grace.",
    image: "horse.jpg"
  },
  {
    id: 'art2',
    title: "Abstract Nature",
    artist: "H R Das",
    price: "1,800",
    description: "An abstract interpretation of natural forms using bold colors and fluid shapes.",
    image: "nature.jpg"
  },
  {
    id: 'art3',
    title: "Traditional Motifs",
    artist: "H R Das",
    price: "2,200",
    description: "A beautiful blend of traditional Indian art motifs with contemporary style.",
    image: "traditional.jpg"
  },
  {
    id: 'art4',
    title: "Radha Krishna",
    artist: "H R Das",
    price: "3,500",
    description: "Divine portrayal of Radha Krishna in traditional Indian art style with vibrant colors.",
    image: "radha.jpg"
  },
  {
    id: 'art5',
    title: "Mystic Buddha",
    artist: "H R Das",
    price: "2,800",
    description: "Serene and peaceful Buddha painting with gold leaf accents and meditation theme.",
    image: "budda.jpg"
  },
  {
    id: 'art6',
    title: "Modern Ganesha",
    artist: "H R Das",
    price: "3,200",
    description: "Contemporary interpretation of Lord Ganesha with abstract elements and rich textures.",
    image: "ganesh.jpg"
  },
  {
    id: 'art7',
    title: "Royal Elephants",
    artist: "H R Das",
    price: "2,900",
    description: "Majestic elephants adorned with traditional Indian decorations in rich jewel tones.",
    image: "elephant.jpg"
  },
  {
    id: 'art8',
    title: "Peacock Dance",
    artist: "H R Das",
    price: "2,600",
    description: "Graceful peacocks in dance with intricate feather details and metallic highlights.",
    image: "pea.jpg"
  }
];


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'user', 'artist', or null/guest

  const handleAuthSuccess = (user) => {
      console.log('Authentication successful for user:', user);
      setIsAuthenticated(true);
      setUserRole(user.role);
      setShowLoginModal(false);
      setShowSignupModal(false);
  };

  const handleLogout = () => {
      setIsAuthenticated(false);
      setUserRole(null);
      console.log('User logged out');
  };

  const openLoginModal = () => setShowLoginModal(true);
  const openSignupModal = () => setShowSignupModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const closeSignupModal = () => setShowSignupModal(false);


  return (
    <CartProvider>
      <Router>
        <div className="app">
          <header className="header">
            <div className="logo">
              <h1>Lotus Arts</h1>
            </div>
            <nav className="nav">
              <ul>
                <li><Link to="/" className="home-link">Home</Link></li>
                <li><Link to="/artist">Artist</Link></li>
                <li><Link to="/paintings">Paintings</Link></li>
                <li><Link to="/sculpture">Sculpture</Link></li>
                <li><Link to="/print">Print</Link></li>
                <li><Link to="/traditionalarts">Traditional Arts</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/cart" className="cart-link">Cart</Link></li>

                {isAuthenticated && userRole === 'artist' && (
                    <li><Link to="/artist/dashboard">Artist Dashboard</Link></li>
                )}

                <li className="auth-buttons">
                  {isAuthenticated ? (
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                  ) : (
                    <>
                      <button className="login-btn" onClick={openLoginModal}>Login</button>
                      <button className="signup-btn" onClick={openSignupModal}>Sign Up</button>
                    </>
                  )}
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/artist" element={<Artist />} />
            <Route path="/paintings" element={<Painting />} />
            <Route path="/sculpture" element={<Sculpture />} />
            <Route path="/print" element={<Print />} />
            <Route path="/traditionalarts" element={<Traditionalarts />} />
            <Route path="/offers" element={<Offer />} />
            <Route path="/cart" element={<Cart />} />

            {/* Route for Artwork Detail Page */}
            <Route path="/artwork/:artworkId" element={<ArtworkDetail />} />

            {/* Add the new Route for the Address Form page */}
            <Route path="/checkout/address" element={<AddressForm />} />


            {/* Example route for Artist Dashboard */}
            <Route
               path="/artist/dashboard"
               element={isAuthenticated && userRole === 'artist' ? (<div><h2>Artist Dashboard</h2><p>Manage your artworks here.</p></div>) : (<div>Please log in as an artist to view this page.</div>)}
            />
             {/* Index route for the homepage */}
            <Route path="/" element={
              <main className="main-content">
                 <section className="hero">
                  <h1>Lotus Gallery</h1>
                  <p>Discover unique artworks by Famous Artist</p>
                </section>

                <section className="new-arrivals">
                  <div className="section-header">
                    <h2>New Arrivals</h2>
                    <p>Latest masterpieces added to our collection</p>
                  </div>
                  <div className="new-arrivals-grid">
                    {newArrivals.map(artwork => (
                      <div key={artwork.id} className="new-arrival-card">
                        <div className="artwork-image">
                          <img src={`/${artwork.image}`} alt={artwork.title} />
                          <div className="overlay">
                            <span className="new-label">New</span>
                            <div className="overlay-content">
                              <h3>{artwork.title}</h3>
                              <p className="price">{artwork.price}</p>
                              <Link to={`/artwork/${artwork.id}`} className="view-details-btn">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="top-picks">
                  <div className="section-header">
                    <h2>Top Picks</h2>
                    <p>Our most celebrated and sought-after masterpieces</p>
                  </div>
                  <div className="artwork-grid">
                    {artworks.map(artwork => (
                      <div key={artwork.id} className="artwork-card">
                        <div className="artwork-image">
                          <img src={`/${artwork.image}`} alt={artwork.title} />
                          <div className="top-pick-badge">Top Pick</div>
                        </div>
                        <div className="artwork-info">
                          <h3>{artwork.title}</h3>
                          <p className="artist">{artwork.artist}</p>
                          <p className="description">{artwork.description}</p>
                          <p className="price">{artwork.price}</p>
                           <Link to={`/artwork/${artwork.id}`} className="inquire-btn">
                             View Details
                           </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="features">
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-globe"></i>
                      </div>
                      <h3>WORLDWIDE</h3>
                      <p>Shipping</p>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <h3>TRUSTED</h3>
                      <p>Since 2025</p>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-headset"></i>
                      </div>
                      <h3>SUPPORT 24/7</h3>
                      <p>Dedicated support</p>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h3>100% SECURE CHECKOUT</h3>
                      <p>Buyer Protection & Security</p>
                    </div>
                  </div>
                </section>
              </main>
            } />
          </Routes>

          {showLoginModal && (
             <div className="modal-overlay" onClick={closeLoginModal}>
               <Login isSignUp={false} onLoginSuccess={handleAuthSuccess} onClose={closeLoginModal} onSwitchModal={openSignupModal} />
             </div>
          )}

          {showSignupModal && (
             <div className="modal-overlay" onClick={closeSignupModal}>
               <Login isSignUp={true} onLoginSuccess={handleAuthSuccess} onClose={closeSignupModal} onSwitchModal={openLoginModal} />
             </div>
          )}


          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>JOIN OUR NEWSLETTER</h3>
                <p>Sign up to receive awesome content</p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="footer-input"
                  />
                  <button className="footer-button">Let's keep in touch</button>
                </div>
              </div>

              <div className="footer-section">
                <h3>CATEGORIES</h3>
                <ul>
                  <li><Link to="/artist">Artists</Link></li>
                  <li><Link to="/paintings">Paintings</Link></li>
                  <li><Link to="/sculpture">Sculpture</Link></li>
                  <li><Link to="/print">Print</Link></li>
                  <li><Link to="/traditionalarts">Traditional Arts</Link></li>
                  <li><Link to="/offers">Offers</Link></li> {/* Added Offers to footer nav */}
                </ul>
              </div>

              <div className="footer-section">
                <h3>USEFUL LINKS</h3>
                <ul>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#shipping">Shipping Policy</a></li>
                  <li><a href="#returns">Return Policy</a></li>
                  <li><a href="#terms">Term and Condition</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>CONTACT INFO</h3>
                <ul className="contact-info">
                  <li>
                    <span className="contact-icon">📞</span>
                    70218 31385
                  </li>
                  <li>
                    <span className="contact-icon">✉️</span>
                    info@lotusartsgallery.com
                  </li>
                  <li>
                    <span className="contact-icon">📍</span>
                    Lotus Arts Gallery, 12, Main Road, Gandi Chowk
                    , Lower Parel, Tenali - 522201, India.
                    Gayatri Impex Private Limited
                  </li>
                </ul>
                <div className="social-links">
                  <a href="#facebook" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#instagram" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#pinterest" className="social-link">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#linkedin" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#twitter" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>Copyright 2025 Lotus Art Gallery. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
