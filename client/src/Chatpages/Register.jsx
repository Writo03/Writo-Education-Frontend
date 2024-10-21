// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';  // Import the spinner


// function Register() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     name: '',
//     email: '',
//     phone: '',
//     classType: '',
//     institution: '',
//     school: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const { username, password, name, email, phone, classType, institution, school } = formData;

//     if (!username || !password || !name || !email || !phone || !classType || !institution || !school) {
//       setError('Please fill out all fields.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/register', formData);
//       console.log(response.data);
//       navigate('/email');
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       console.error(error.response?.data);
//     }finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
//       {loading && (
//         <div className="absolute inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center z-10">
//           <ClipLoader color="#36d7b7" size={100} /> {/* Spinner */}
//         </div>
//       )}
//       <div className={`relative py-3 sm:max-w-xl sm:mx-auto ${loading ? 'opacity-50' : ''}`}>
//       <div className="absolute inset-0 bg-[#488B80] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//       <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl w-[350px] lg:w-[500px]">
//         <div className="max-w-md mx-auto">
//           <h1 className="text-2xl font-semibold">Register</h1>
//           <div className="divide-y divide-gray-200">
//           <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="flex flex-col space-y-1">
//           <label htmlFor="name" className="text-sm font-medium">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="Full Name"
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="email" className="text-sm font-medium">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="Email"
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="phone" className="text-sm font-medium">Phone</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="Phone"
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="classType" className="text-sm font-medium">Class Type</label>
//           <select
//             id="classType"
//             name="classType"
//             value={formData.classType}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//           >
//             <option value="">Select Class Type</option>
//             <option value="JEE">Prepare for JEE</option>
//             <option value="NEET">Prepare for NEET</option>
//           </select>
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="institution" className="text-sm font-medium">Institution</label>
//           <input
//             type="text"
//             id="institution"
//             name="institution"
//             value={formData.institution}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="Institution"
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="school" className="text-sm font-medium">School</label>
//           <input
//             type="text"
//             id="school"
//             name="school"
//             value={formData.school}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="School"
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="username" className="text-sm font-medium">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="Username"
//           />
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label htmlFor="password" className="text-sm font-medium">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="h-10 w-full border border-gray-300 rounded px-3"
//             placeholder="Password"
//           />
//         </div>
//         {error && <p className="text-red-500 text-base">{error}</p>}
//         <button type="submit" className="w-full bg-[#488B80] text-white py-2 rounded-md">
//           Register
//         </button>
//       </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>

//   );
// }

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    classType: '',
    institution: '',
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
    if (!formData.phone.trim()) errors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = 'Phone number must be 10 digits.';
    if (!formData.classType.trim()) errors.classType = 'Class Type is required.';
    if (!formData.institution.trim()) errors.institution = 'Institution is required.';
    if (!formData.username.trim()) errors.username = 'Username is required.';
    if (!formData.password.trim()) errors.password = 'Password is required.';
    else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters.';

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
      console.log(formData)
      const response = await axios.post('https://writo-education-frontend.onrender.com/api/register', formData);
      // const response = await axios.post('http://localhost:8080/api/register', formData);
      console.log(response.data);
      setFormData({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        classType: '',
        institution: '',
      }); // Reset form
      navigate('/email');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center z-10">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      )}
      <div className={`relative py-3 sm:max-w-xl sm:mx-auto ${loading ? 'opacity-50' : ''}`}>
        <div className="absolute inset-0 bg-[#488B80] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl w-[350px] lg:w-[500px]">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Register</h1>
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
                  id="phone"
                  label="Phone"
                  value={formData.phone}
                  type="tel"
                  onChange={handleChange}
                  error={formErrors.phone}
                />
                <div className="flex flex-col space-y-1">
                  <label htmlFor="classType" className="text-sm font-medium">Class Type</label>
                  <select
                    id="classType"
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    className="h-10 w-full border border-gray-300 rounded px-3"
                    aria-invalid={!!formErrors.classType}
                  >
                    <option value="">Select Class Type</option>
                    <option value="JEE">Prepare for JEE</option>
                    <option value="NEET">Prepare for NEET</option>
                  </select>
                  {formErrors.classType && <span className="text-red-500 text-sm">{formErrors.classType}</span>}
                </div>
                <InputField
                  id="institution"
                  label="Institution"
                  value={formData.institution}
                  onChange={handleChange}
                  error={formErrors.institution}
                />
              
                <InputField
                  id="username"
                  label="Username"
                  value={formData.username}
                  onChange={handleChange}
                  error={formErrors.username}
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
