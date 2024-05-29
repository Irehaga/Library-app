import React from 'react';

import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/NavbarAndFooter/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/NavbarAndFooter/HomePage/Carousel';
import { Heroes } from './layouts/NavbarAndFooter/HomePage/Heroes';

function App() {
  return (
   <div>
    <Navbar />
    <ExploreTopBooks />
    <Carousel />
    <Heroes />
   </div>
  );
}

export default App;
