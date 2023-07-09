import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Blogs from './blogs'
import BlogsRead from './blogread'

const App = () => {
  return (
 <div className='h-full'>

    <Router>
      <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/detail" element={<BlogsRead />} />
      </Routes>
    </Router>
 </div>
 
  )
}

export default App
