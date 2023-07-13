import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Blogs from './blogs'
import Detail from './blogread'
import Contactus from './contactus'
import Aboutus from './aboutus';
import Features from './features';
import Pricing from './pricing';
import Faqs from './faqs';
import Blog1 from './blog1';

const App = () => {
  return (
 <div className='h-full'>

    <Router>
      <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/faqs" element={<Faqs/>} />
      <Route path="/blog1" element={<Blog1/>} />


      </Routes>
    </Router>
 </div>
 
  )

  
}

export default App

