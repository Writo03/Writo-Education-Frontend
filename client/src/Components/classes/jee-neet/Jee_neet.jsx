import React,{useEffect} from 'react'
import Navbar from '../../Navbar'
import Herosection from './Herosection'
import KeyFeatures from './KeyFeatures'
import TestimonialCard from  '../../TestominalCard'
import image from '../../../assets/image copy.png';
import Contactus from '../../Contactus'
const Jee_neet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonialsData = [
    {
      name: "Henry Letham",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: image,
      stars: 4 
    },
    {
      name: "Holden Caulfield",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: image,
      stars: 3
    },
    {
      name: "Alper Kamu",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: image,
      stars: 5
    },
    {
      name: "Henry Letham",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: image,
      stars: 2
    }
  ];
  return (
    <div>
     <Navbar/>
     <Herosection/>
     <KeyFeatures/>
     <TestimonialCard testimonials={testimonialsData}/>
     <Contactus/>
    </div>
  )
}

export default Jee_neet
