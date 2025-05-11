// login.jsx
import { useState } from 'react';
import './login.css';

// Receive isSignUp, onLoginSuccess, onClose, AND onSwitchModal props
const Login = ({ isSignUp, onLoginSuccess, onClose, onSwitchModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', // Keep confirmPassword here for the signup form
    role: 'user', // Add role to state, default to 'user' for signup
  });

  // Update state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', formData);

    // --- Placeholder for Backend Interaction ---
    // In a real app, you would send formData to your backend API.
    // The backend would authenticate/register the user and return
    // success/failure and the user's role upon successful login/signup.

    if (isSignUp) {
        console.log('Attempting Signup with role:', formData.role);
        // Validate passwords match on frontend before sending to backend (optional but good practice)
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!"); // Simple alert for demo
            return;
        }
        // Simulate a successful signup response from backend, including the assigned role
        // In a real app: axios.post('/api/signup', { email: formData.email, password: formData.password, role: formData.role }).then(response => { ... });
        // For demo, assume success and backend confirms the role or assigns default 'user'
        const simulatedUser = { email: formData.email, role: formData.role }; // Backend would confirm/assign role
        onLoginSuccess(simulatedUser); // Call the success handler in App.jsx
    } else {
        console.log('Attempting Login');
        // Simulate a successful login response from backend, including the user's role
        // In a real app: axios.post('/api/login', { email: formData.email, password: formData.password }).then(response => { ... });
         // Simulate backend returning a user object with their role based on login credentials
        const simulatedUser = {
             email: formData.email,
             // Simple logic for demo: if login email contains 'artist', assign 'artist' role, otherwise 'user'.
             // Replace this with actual backend response handling.
             role: formData.email.includes('artist') ? 'artist' : 'user'
        };
        onLoginSuccess(simulatedUser); // Call the success handler in App.jsx
    }
    // --- End Placeholder ---
  };


  return (
    // The modal structure is still within the overlay in App.jsx,
    // This component represents the content inside the white box.
    // The 'modal' class styling should apply to this root div.
    <div className="modal" onClick={e => e.stopPropagation()}>
      <button className="close-modal" onClick={onClose}>×</button> {/* Use onClose prop */}
      <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="form-input"
          />
        </div>

        {isSignUp && (
          <>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword} // Bind confirmPassword state
                onChange={handleChange} // Add handleChange for confirmPassword
                placeholder="Confirm Password"
                className="form-input"
                required
              />
            </div>
            {/* Add Role Selection for Signup */}
            <div className="form-group">
               <label htmlFor="role-select" className="form-label">Select Role:</label> {/* Added a label */}
               <select
                  id="role-select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="form-input" // Reuse form-input style
               >
                  <option value="user">User</option>
                  <option value="artist">Artist</option>
               </select>
            </div>
          </>
        )}

        <button type="submit" className="submit-button">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      {/* Move the modal-footer back INSIDE the modal div */}
      <div className="modal-footer">
        <p>
          {isSignUp
            ? 'Already have an account? '
            : "Don't have an account? "}
          <button
            type="button"
            className="switch-modal"
            onClick={onSwitchModal} // Use the onSwitchModal prop
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
