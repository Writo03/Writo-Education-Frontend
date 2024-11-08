import React from 'react'
import zoology from './zoologyyy.png'
import mathss from './mathsss.png'
import biologyy from './biologyyy.png'
import chemistryy from './chemistryyy.png'
import physicss from './physicsss.png'
import playbtn from './PlayBtn.png'
import { Link, useNavigate } from 'react-router-dom';
import './ConnectCoaches.css'
import { useSelector } from 'react-redux'

const SubscriptionPrompt = ({ onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Subscribe to Doubt Clearing Service
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  To access this feature, you need to subscribe to the Doubt Clearing service.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ConnectCoaches() {
    const user = useSelector((state)=>state?.user?.user)
    console.log(user?.user?.student_services)
    const navigate = useNavigate();

    // Check if the user has the "doubtClearing" service enabled
    const hasDoughtClearingEnabled = user?.user?.student_services.doubtClearing;
    console.log(hasDoughtClearingEnabled)
    // Show a subscription prompt if the user doesn't have the "doubtClearing" service
    const [showSubscriptionPrompt, setShowSubscriptionPrompt] = React.useState(false);

    const handleNavigate = (path) => {
        if (hasDoughtClearingEnabled) {
            navigate(path);
        } else {
            setShowSubscriptionPrompt(true);
        }
    }

    return (
        <div className='outerjourney3 my-5'>
            <div className="innerjourney3">
                <Link  onClick={() => handleNavigate("/chat-home")} style={{ textDecoration: 'none' }}>
                    <div className="box13 bg-card-background2" style={{ backgroundColor: '#dfeeeb' }}>
                        <div className="subjectdetails">
                            <h2 className="subject">Mathematics</h2>
                            <p className="faculty">by Prashant Sir</p>
                        </div>
                        <div className="subjectimages">
                            <img className="inner-image13" src={mathss} alt="" />
                            <img className="play" src={playbtn} alt="" />
                        </div>
                    </div>
                </Link>

              <Link  onClick={() => handleNavigate("/chat-home")} style={{ textDecoration: 'none' }}>
                    <div className="box13 bg-card-background2" style={{ backgroundColor: '#fae6e9' }} >
                        <div className="subjectdetails">
                            <h2 className="subject">Physics</h2>
                            <p className="faculty">by Prashant Sir</p>
                        </div>
                        <div className="subjectimages">
                            <img className="inner-image23" src={physicss} alt="" />
                            <img className="play" src={playbtn} alt="" />
                        </div>
                    </div>
                </Link>

                <Link  onClick={() => handleNavigate("/chat-home")} style={{ textDecoration: 'none' }}>
                    <div className="box13 bg-card-background2" style={{ backgroundColor: '#f2e7fa' }}>
                        <div className="subjectdetails">
                            <h2 className="subject">Chemistry</h2>
                            <p className="faculty">by Prashant Sir</p>
                        </div>
                        <div className="subjectimages">
                            <img className="inner-image33" src={chemistryy} alt="" />
                            <img className="play" src={playbtn} alt="" />
                        </div>
                    </div>
                </Link>

                <Link onClick={() => handleNavigate("/chat-home")} style={{ textDecoration: 'none' }}>
                    <div className="box13 bg-card-background2" style={{ backgroundColor: '#d4f1d3' }}>
                        <div className="subjectdetails">
                            <h2 className="subject">Biology</h2>
                            <p className="faculty">by Prashant Sir</p>
                        </div>
                        <div className="subjectimages">
                            <img className="inner-image43" src={biologyy} alt="" />
                            <img className="play" src={playbtn} alt="" />
                        </div>
                    </div>
                </Link>

                <Link  onClick={() => handleNavigate("/chat-home")} style={{ textDecoration: 'none' }}>
                    <div className="box13 bg-card-background2" style={{ backgroundColor: '#e4d6a7' }}>
                        <div className="subjectdetails">
                            <h2 className="subject">Zoology</h2>
                            <p className="faculty">by Prashant Sir</p>
                        </div>
                        <div className="subjectimages">
                            <img className="inner-image43" src={zoology} alt="" />
                            <img className="play" src={playbtn} alt="" />
                        </div>
                    </div>
                </Link>
            </div>

            {/* Subscription prompt */}
            {showSubscriptionPrompt && (
                <SubscriptionPrompt onClose={() => setShowSubscriptionPrompt(false)} />
            )}
        </div>
    )
}