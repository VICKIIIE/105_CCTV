import React from 'react';
import Navbar from './Components/Navbar/NavBar';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import RootLayOut from './Rootlayout/RootLayOut';
import ThankYou from './Components/ThankYou/ThankYou';

const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayOut/>}>
    <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='thankyou' element={<ThankYou />} />

  </Route>
)
)
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
