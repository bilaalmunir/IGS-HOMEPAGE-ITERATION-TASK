import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar1 from './components/navbar1';
import Navbar2 from './components/navbar2';
import Navbar3 from './components/navbar3';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#111827', backgroundImage: 'url(/bg-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Grid container spacing={2} sx={{ pt: 8, px: { xs: 2, md: 8 }, alignItems: 'flex-start' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="white" fontWeight={700} gutterBottom>
            IIGS exemplifies its dedication to sustainability through innovative procurement and supply chain practices that boost operational efficiency and drive industry-leading innovation
          </Typography>
          <Typography variant="h6" color="#b5e3f7" gutterBottom>
            IIGS is committed to delivering high-quality products on time, every time.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <button style={{ background: '#fff', color: '#3956a3', fontWeight: 700, border: 'none', borderRadius: 4, padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}>
              BOOK A MEETING →
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 4, md: 0 } }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <img src="/rob-world.png" alt="Robotic World" style={{ maxWidth: '400px', width: '100%', height: 'auto', marginTop: 32 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
