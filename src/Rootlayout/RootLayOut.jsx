import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Components/Footer/Footer';

const RootLayOut = () => {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayOut;
