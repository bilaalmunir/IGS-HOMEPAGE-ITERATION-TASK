import React from 'react';
import Box from '@mui/material/Box';
import Navbar1 from './components/navbar1';
import Navbar2 from './components/navbar2';
import Navbar3 from './components/navbar3';
import Hero from './components/hero';
import Cards from './components/cards';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#111827', backgroundImage: 'url(/bg-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Hero />
      <Cards />
      
    </Box>
  );
}

export default App;
