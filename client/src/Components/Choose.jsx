import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Whychoose from './Whychoose'
const Choose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
      <Whychoose></Whychoose>
    
  )
}

export default Choose
