import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({}); // State for validation errors
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Client-side validation
  const validateForm = () => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://writo-education-frontend.onrender.com/api/login', { username, password });
      if (response?.data?.token) {
       
          localStorage.setItem('token', response.data.token);
       
        navigate('/');
      } else {
        setError('Login failed: Invalid response');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12 relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center z-10">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      )}
      <div className={`relative py-3 sm:max-w-xl sm:mx-auto ${loading ? 'opacity-50' : ''}`}>
        <div className="absolute inset-0 bg-[#488B80] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl w-[350px] ">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Login</h1>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 text-sm border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Username"
                    required
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                  {validationErrors.username && <p className="text-red-500 text-sm">{validationErrors.username}</p>}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full text-sm border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-sm text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                  {validationErrors.password && <p className="text-red-500 text-sm">{validationErrors.password}</p>}
                </div>

               

                {error && <p className="text-red-500 text-base">{error}</p>}
                
                <div className="relative">
                  <button type="submit" className="bg-[#488B80] text-white rounded-md px-2 py-1" disabled={loading}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
