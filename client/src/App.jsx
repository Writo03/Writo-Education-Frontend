import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Home from './Home';
import Choose from './Components/Choose';
import Privacy from './Components/Privacy';
import TermandConditions from './Components/TermandConditions';
import Faq from './Components/Faq';
import Community from './Components/Community';
import Menotor_home1 from './Components/Mentor_home1';
import Services1 from './Components/Services1';
import ChatwithMentor from './Components/ChatwithMentor';
import Community_neet from './Components/Community_neet';
import About_Hero from './Components_2/About_Hero';

import About6to10 from './Pages/About6to10';
import AboutJee from './Pages/AboutJee';
import AboutNeet from './Pages/AboutNeet';
import Doubt_courses from './Pages/Doubt_courses';
import DoubtSection from './Pages/DoubtSection';
  import Blogs from './Components/Blogs';
import VideoPage from "./Pages/videopage/videopage";
import Waits from "./Pages/waits/Waits";
import JeePrice from "./Pages/jee price/jee_price";
import NeetPrice from "./Pages/neet price/neet_price";
import Class6befpay from "./Pages/class6-beforepay/class6_beforepay";
import AllCoursesPage from "./Components/CourdsesPages/CoursesPages";
import Class6 from "./Components/classes/class-6/class6";
import Class7 from "./Components/classes/class-7/class7";
import Class8 from "./Components/classes/class-8/class8";
import Class9 from "./Components/classes/class-9/class9";
import Class10 from "./Components/classes/class-10/class10";
import Class11 from "./Components/classes/class-11/class11";
import Class12 from "./Components/classes/class-12/class12";
import NEET from "./Components/classes/NeetCourses/NeetCourses";
import JEE from "./Components/classes/JEECourses/JeeCourses";
// class page before pay
import Class7befpay from "./Pages/class7-beforepay/class7_beforepay"
import Class8befpay from "./Pages/class8-beforepay/class8_beforepay";
import Class9befpay from "./Pages/class9-beforepay/class9_beforepay";
import Class10befpay from "./Pages/class10-beforepay/class10_beforepay";
import NeetTestSeries from "./Pages/Neet_Test_Series/NeettestSeries";
import JeeTestSeries from "./Pages/Jeet_Test_Series/JeetestSeries";
import AboutJeeCommunity from "./Pages/about-jee-community/about_jee_community.jsx";
// All india test series
import NeetAllIndiaTestseries from "./Pages/NeetAllIndiaTestSeries/NeetAllIndiaTestseries";
import JeeAllIndiaTestSeries from "./Pages/JeeAllIndiaTestSeries/JeeAllIndiaTestSeries";

import RegisterPage from "./Chatpages/Register";
import CheckEmailPage from "./Chatpages/CheckEmailPage";
import CheckPasswordPage from "./Chatpages/CheckPasswordPage";
// import Chathome from "../Chatpages/Chathome";
import MessagePage from "./Chatcomponents/MessagePage";
import AuthLayouts from "./layout";
import Forgotpassword from "./Chatpages/Forgotpassword";
import Chathome from './Chatpages/Chathome';
import ProtectedRoutes from './ProtectedRoutes';
import CarrersPage from './Components/CarrersPage';
import Jee_neet from './Components/classes/jee-neet/Jee_neet';
import Login from './Chatpages/Login';
import Test_Series from './Components/quiz/Test_Series';
import Test from './Components/quiz/Test';
import LeaderBoard from './Components/quiz/LeaderBoard';
import Layout from './layout/Layout';
import JobDetail from './Pages/JobDetail.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import NeetCommunityPage from './Pages/Community-pages/NeetCommunityPage.jsx';
import CommunityPage from './Pages/Community-pages/6-10CommunityPage.jsx';
import JeeCommunityPage from './Pages/Community-pages/JeeCommunityPage.jsx';
import JobForm from './Pages/JobForm.jsx';
import CommunityGuidelines from './Components/Communitygudielines.jsx';
function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='/community' element={<CommunityPage/>}/>
        <Route path="/mentorservices" element={<Services1/>}></Route>
        <Route path='/careers' element={<CarrersPage/>} />
        <Route path="/chatwithmentors" element={<ChatwithMentor/>}/>
        <Route path='/mentorship' element={<Menotor_home1 />} />
        <Route path='/communityneet' element={<NeetCommunityPage/>}/>
        <Route path='/communityjee' element={<JeeCommunityPage/>}/>
        <Route path='/why_writo' element={<Choose />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<TermandConditions />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/communityguidelines' element={<CommunityGuidelines />} />
        <Route path="/community/about" element={<About6to10/>}/>
        <Route path="/communityjee/about" element={<AboutJee/>}/>
        <Route path="/communityneet/about" element={<AboutNeet/>}/>
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/jobform" element={<JobForm />} />
        
      </Route>


        {/*  */}
        

        <Route path="/doubtcourses" element={<Doubt_courses/>}/>
        <Route path="/doubtsection" element={<DoubtSection/>}/>
        <Route path="/blogs" element={<Blogs/>}/>

        <Route path="/all" element={<AllCoursesPage />} />
    
        {/*<Route path="/class-6/maths" element={<Maths />} />*/}
        <Route path="/class-6beforepay" element={<Class6befpay />} />
        <Route path="/class-7beforepay" element={<Class7befpay />} />
        <Route path="/class-8beforepay" element={<Class8befpay />} />
        <Route path="/class-9beforepay" element={<Class9befpay />} />
        <Route path="/class-10beforepay" element={<Class10befpay />} />
        {/*neet and jee test series */}
        <Route path="/jee-test-series" element={<JeeTestSeries />} />
        <Route path="/neet-test-series" element={<NeetTestSeries />} />
        {/*<Route path="/class-6/chemistry" element={<Chemistry />} />*/}
        {/* <Route path="/class-6" element={<Class6 />} />
        <Route path="/class-7" element={<Class7 />} />
        <Route path="/class-8" element={<Class8 />} />
        <Route path="/class-9" element={<Class9 />} />
        <Route path="/class-10" element={<Class10 />} />*/}
        <Route path="/class-11" element={<Class11 />} />
        <Route path="/class-12" element={<Class12 />} /> 

        <Route path="/neet-courses" element={<NEET />} />
        <Route path="/jee-courses" element={<JEE />} />
        <Route path='/jee-neet' element={<Jee_neet/>} />
        <Route path="/class-6/physics/video" element={<VideoPage />} />
        <Route path="/waits" element={< Waits/>} />
        <Route path="/neet-price" element={< NeetPrice/>} />
        {/* <Route path="/mains+advance" element={< JEEMainsAndAdvance/>} />*/}
        <Route path="/jee-price" element={< JeePrice/>} />
        <Route path="/neet-all-india-test-series" element={< NeetAllIndiaTestseries/>} />
        <Route path="/jee-all-india-test-series" element={< JeeAllIndiaTestSeries/>} />
        <Route path='/test_series' element={<Test_Series/>}/>
        <Route path='/test/:id' element={<Test/>}/>
        <Route path='/leaderboard/:id' element={<LeaderBoard/>}/>


        <Route path="/register" element={<AuthLayouts><RegisterPage /></AuthLayouts>} />
          <Route path="/email" element={<AuthLayouts><Login/></AuthLayouts>} />
          <Route path="/password" element={<AuthLayouts><CheckPasswordPage /></AuthLayouts>} />
          <Route path="/forgot-password" element={<AuthLayouts><Forgotpassword /></AuthLayouts>} />
    
          <Route element={<ProtectedRoutes />}>
          <Route path="/chat-home" element={<Chathome />}>
            <Route path="/chat-home/:userId" element={<MessagePage />} />
          </Route>
          </Route>


      </Routes>
   
  );
}

export default App;
