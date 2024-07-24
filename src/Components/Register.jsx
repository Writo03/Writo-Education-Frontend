import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [passInfo, setPassInfo] = useState(null);
  const [mailInfo, setMailInfo] = useState(null);
  const [nameInfo, setNameInfo] = useState(null);
  const [unameInfo, setUNameInfo] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    // Sign-up logic
  }

  const validatePhoneNumber = (value) => {
    // Remove any non-digit characters and enforce 10-digit length
    const onlyNums = value.replace(/\D/g, '');
    if (onlyNums.length <= 10) {
      setPhoneNumber(onlyNums);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-full flex justify-center align-middle">
        <div className="w-full max-w-md p-8 space-y-4 bg-zinc-200 rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">Create an Account</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" onChange={(e) => setUNameInfo(e.target.value)} id="name" name="name" required placeholder="Enter Your Name" className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
              <input type="text" onChange={(e) => setNameInfo(e.target.value)} id="surname" name="surname" required placeholder="Enter your surname" className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" onChange={(e) => setMailInfo(e.target.value)} id="email" name="email" required placeholder="Enter your Email" className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                value={phoneNumber}
                onChange={(e) => validatePhoneNumber(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your phone number"
                maxLength="10"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" onChange={(e) => setPassInfo(e.target.value)} id="password" name="password" placeholder="Set a Password" required className="w-full px-3 py-2 mt-1 mb-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <button type="submit" className="w-full px-4 py-2 font-bold mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Create</button>
          </form>
          <Link to={'/login'} className="flex align-middle justify-center mt-4">
            Already have an Account? <b>&nbsp; Sign in</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;