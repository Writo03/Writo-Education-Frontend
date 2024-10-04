import React from 'react'

import Hero from './Hero'
import Cards_section from './Card_section'
import Promotion from './Promotions'
import Mentor_nav from './Mentor_nav'
import Testimonial from './Testimonial'
import GetStarted from './GetStarted'
import MentorSection from './MentorSection'
import Faq1 from './Faq1'
import Community_footer from './Community_footer'
import Navbar from './Navbar'
const Mentor_home1 = () => {
  return (
    <div>
      <Mentor_nav/>
      <Hero/>
      <Cards_section></Cards_section>
      <Promotion/>
      <Testimonial/>
      <GetStarted/>
      <MentorSection/>
      <Faq1/>
    </div>
  )
}

export default Mentor_home1
