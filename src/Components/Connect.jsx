import React from 'react';
import img1 from '../assets/child1.png';
import img2 from '../assets/child2.png';
import './Connect.css'; // Import your CSS file for styling

const Connect = () => {
  return (
    <div className="outerexpert bg-white">
      <div className="innerexpert">
        <div className="content">
          <h3 className='gradientheading'>Unlock Your Potential With Expert Guidance!</h3>
          <p className='para'>Tailored advice and support from experienced mentors. Join Our Mentorship Program Today! Transform your aspirations into achievements with our dedicated mentors.</p>
        </div>

        <div className="image-container">
          <img className="w-60" src={img1} alt="child1" />
          <img src={img2} alt="child2" className='w-40 overlay-img' />
        </div>
      </div>
    </div>
  );
}

export default Connect;
