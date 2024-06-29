import { useState } from "react";

import axios from "axios"
import {Link} from "react-router-dom"

const Login = () => {
  //const [errorMessagee, setErrorMessagee] = useState(null);
   const [emailinfo ,setEmailInfo] = useState(null);
   const [passinfo , setPassInfo] = useState(null);

  //const navigate = useNavigate();
  

  const HandleSubmitButton = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Add your login logic here
    axios.post('http:localhost:8000/api/v1/users/login',{emailinfo , passinfo})
    .then(result =>console.log(result))
    .catch(err=>console.log(err))
    
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-full flex justify-center align-middle">
        <div className="w-full max-w-md p-8 space-y-4 bg-zinc-200 rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
          <p className="text-center text-gray-600">Login using social networks</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/" className="px-2 py-2 text-white h-14 w-14 rounded-2xl">
              <img src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000" alt="facebook avatar" />
            </a>
            <a href="mailto:writo@gmail.com" className="px-2 py-2 text-white h-14 w-14 rounded-2xl">
              <img src="https://img.icons8.com/?size=100&id=37246&format=png&color=000000" alt="gmail avatar" />
            </a>
            <a href="https://www.linkedin.com/company/writo-learning-solutions/?originalSubdomain=in" className="px-2 py-2 text-white h-14 w-14 rounded-2xl">
              <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="linkedin avatar" />
            </a>
          </div>
          <form className="space-y-4" onSubmit={HandleSubmitButton}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                onChange={(e)=>setEmailInfo(e.target.value)}
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                onChange={(e)=>setPassInfo(e.target.value)}
                id="password"
                placeholder="Enter Your Password"
                name="password"
                required
                className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <div>
              <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Sign In</button>
            </div>
            <Link to={'/register'} className="flex align-middle justify-center">
              Create an Account <b>&nbsp; Sign up</b>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;