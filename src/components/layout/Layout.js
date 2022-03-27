import React from 'react';
import Footer from './Footer';
import Header from './Header';
import spacebg from '../../svg/space-bg.jpg';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-black via-pink-800 to-purple-900 text-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;