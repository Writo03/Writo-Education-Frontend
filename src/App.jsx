import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Choose from './Choose';
import Privacy from './Components/Privacy';
import './App.css';
import TermandConditions from './Components/TermandConditions';
import Faq from './Components/Faq';
import Community from './Components/Community';
import Menotor_home1 from './Components/Mentor_home1';
import Services1 from './Components/Services1';
import ChatwithMentor from './Components/ChatwithMentor';
import Community_neet from './Components/Community_neet';
const App = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mentor/home' element={<Menotor_home1 />} />
          <Route path="/mentor/services" element={<Services1/>}></Route>
          <Route path='/why_writo' element={<Choose />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<TermandConditions />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/community' element={<Community/>}/>
          <Route path='/community/neet'   element={<Community_neet/>}/>
          <Route path="/mentor/questions" element={<ChatwithMentor/>}/>
        </Routes>
    );
};

export default App;
