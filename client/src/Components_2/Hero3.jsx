import React from 'react'
import heroimage from './heroimage.png'
import curvedline from './Vector 514.png'
import './Hero3.css'
import Heroimage3 from './Heroimage_3.png'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userlogin } from "../redux/userSlice.js";
import { useNavigate } from 'react-router-dom';
export default function Hero3() {
    const user = useSelector((state) => state.user.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [price, setPrice] = React.useState(99); // Set the appropriate price
  
    const initPayment = (data) => {
      const options = {
        key: "rzp_live_fHW5qsB2j9Cpib", // Replace with your Razorpay key
        amount: data.amount,
        currency: data.currency,
        name: 'Writo Education',
        description: "Jee Test Series Payment",
        order_id: data.id,
        handler: async (response) => {
          try {
            // const verifyUrl = `http://localhost:8080/api/payment/verify`;
            const verifyUrl = `https://writo-education-frontend.onrender.com/api/payment/verify`;
            const result = await axios.post(verifyUrl, {
              order_id: data.id,
              userId: user._id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              service: "doubtClearing"
            });
            dispatch(userlogin(result.data.user));
            // navigate('/jee-test-series');
            console.log(result);
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          "contact": user.phoneNo
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
  
    const handlePayment = async () => {
      try {
        const orderUrl = `https://writo-education-frontend.onrender.com/api/payment/orders`;
        // const orderUrl = `http://localhost:8080/api/payment/orders`;
        const { data } = await axios.post(orderUrl, { amount: price });
        initPayment(data.order);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
        <div className='outerhero33'>

        <div className="innerhero33 py-8  lg:px-28">
            <div className="left33">
                <div className="con133 gap-2 lg:w-[60%]">
                    <p className='text-6xl item6 text-[#0e6657b1] '> Your Personal <span className='yellowword3'>Coach</span> is just a click away</p>
                    <img src={curvedline} className="curvedline33" alt="..." />
                </div>

                <div className="con233">
                    <h2 className='text-[#434343] item2 text-3xl lg:text-4xl font-semibold'>Connect Live With Your Coach</h2>
                    <p className='text-[#434343] text-xl item2'>Have a comprehensive experience</p>
                    <button type="button" class=" bg-[#434343] px-5 my-4 text-xl text-white py-2 rounded-full" onClick={handlePayment} >Subscribe now</button>
                </div>
            </div>
            <div className="right33">


                <img src={Heroimage3} className="heroimagee33" alt="..." />

            </div>


        </div>

    </div>
    );
  }


