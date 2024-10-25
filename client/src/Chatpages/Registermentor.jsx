import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mentor_subject: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid.';
    if (!formData.password.trim()) errors.password = 'Password is required.';
    else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters.';
    if (!formData.mentor_subject.trim()) errors.mentor_subject = 'Mentor subject is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: '' })); // Clear errors as the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
        const response = await axios.post('https://writo-education-frontend.onrender.com/api/mentor_register', formData);
        setFormData({
            name: '',
            email: '',
            password: '',
            mentor_subject: '',
        });
        navigate('/email');
        toast.success("Registration successful!");
    } catch (error) {
        const message = error.response?.data?.message || 'Registration failed. Please try again.';
        setError(message);
        toast.error(message);
    } finally {
        setLoading(false);
    }
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
      <ToastContainer />
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center z-10">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      )}
      <div className={`relative py-3 sm:max-w-xl sm:mx-auto ${loading ? 'opacity-50' : ''}`}>
        <div className="absolute inset-0 bg-[#488B80] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl w-[350px] lg:w-[500px]">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl mb-2 font-semibold">Register as Mentor</h1>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  id="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  error={formErrors.name}
                />
                <InputField
                  id="email"
                  label="Email"
                  value={formData.email}
                  type="email"
                  onChange={handleChange}
                  error={formErrors.email}
                />
               
                <InputField
                  id="mentor_subject"
                  label="Mentor Subject"
                  value={formData.mentor_subject}
                  onChange={handleChange}
                  error={formErrors.mentor_subject}
                />
                <InputField
                  id="password"
                  label="Password"
                  value={formData.password}
                  type="password"
                  onChange={handleChange}
                  error={formErrors.password}
                />
                {error && <p className="text-red-500 text-base">{error}</p>}
                <button
                  type="submit"
                  className={`w-full bg-[#488B80] text-white py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ id, label, type = 'text', value, onChange, error }) => (
  <div className="flex flex-col space-y-1">
    <label htmlFor={id} className="text-sm font-medium">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="h-10 w-full border border-gray-300 rounded px-3"
      placeholder={label}
      aria-invalid={!!error}
      aria-describedby={`${id}-error`}
    />
    {error && <span id={`${id}-error`} className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default Register;
