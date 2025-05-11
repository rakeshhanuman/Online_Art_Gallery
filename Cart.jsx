// Cart.jsx (Modified)
import React from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  if (cartItems.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h1>Your Cart</h1>
        <p>Your cart is empty</p>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  const handleProceedToCheckout = () => {
    // Navigate to the address form page
    navigate('/checkout/address');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              {/* Ensure image path is correct if not starting with / */}
              <img src={item.image.startsWith('/') ? item.image : `/${item.image}`} alt={item.title} />
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="artist">{item.artist}</p>
              <p className="price">{item.price}</p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
                disabled={item.quantity <= 1} // Disable if quantity is 1
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        {/* Call the navigation handler on button click */}
        <button className="checkout-btn" onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </button>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
