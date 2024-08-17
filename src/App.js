import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Packages from './Packages';
import Destination from './Destination';
import Booking from './Booking';
import Travel from './Travel';
import Testimonial from './Testimonial';
import Page from './Page';
import Contact from './Contact';
import Register from './Register';









const App=()=>{
  return(
    <>

<Navbar/>
  <Routes>
<Route path="/home" element={<Home></Home>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/services' element={<Services/>}/>
 <Route path='/packages' element={<Packages/>}/>
 <Route path='/destination' element={<Destination/>}/>
 <Route path='/booking' element={<Booking/>}/>
 <Route path='/travel' element={<Travel/>}/>
 <Route path='/testimonial' element={<Testimonial/>}/>
 <Route path='/page' element={<Page/>}/>
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/register' element={<Register/>}/>





  </Routes>


    
    </>
  )
}

export default App;