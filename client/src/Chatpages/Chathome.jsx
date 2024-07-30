import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout, setOnlineUser, setSocketConnection, setUser } from '../redux/userSlice';
import Sidebar from '../Chatcomponents/Sidebar';
import io from 'socket.io-client';

const Chathome = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUserDetails = async () => {
    try {
      const URL = `https://chat-app-main-2-copy.onrender.com/api/user-details`;
      const response = await axios({
        url: URL,
        withCredentials: true
      });

      console.log("Backend Response:", response.data); // Log the response data

      // Assuming response.data is the actual user data
      dispatch(setUser(response.data.data));

      if (response.data.data.logout) {
        dispatch(logout());
        navigate("/email");
      }

      console.log("Current user details", response);
    } catch (error) {
      console.error("Error fetching user details:", error);
      if (error.response) {
        console.error("Error Response:", error.response.data);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("General Error:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    const socketConnection = io('https://chat-app-main-2-copy.onrender.com', {
      auth: {
        token: localStorage.getItem('token')
      },
    });

    socketConnection.on('onlineUser', (data) => {
      console.log(data);
      dispatch(setOnlineUser(data));
    });

    dispatch(setSocketConnection(socketConnection));

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const basePath = location.pathname === '/chat-home';
  return (
    <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
      <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
        <Sidebar />
      </section>

      {/**message component**/}
      <section className={`${basePath && "hidden"}`}>
        <Outlet />
      </section>

      <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex"}`}>
        <div>
          <h1 style={{ fontSize: '30px', color: '#006756', fontWeight: '500' }}> Welcome to Writo Chat, Clear Your Doubts With Our Experts</h1>
        </div>
        <p className='text-lg mt-2 text-slate-500'>Select Mentors To Ask Your Doubts</p>
      </div>
    </div>
  );
};

export default Chathome;
