import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Choose from './Choose';
import Privacy from './Components/Privacy';
import './App.css';
import TermandConditions from './Components/TermandConditions';
import Faq from './Components/Faq';
import Community from './Components/Community';
const App = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/why_writo' element={<Choose />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<TermandConditions />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/commuity' element={<Community/>}/>
        </Routes>
    );
};

export default App;
