import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Cards from './cards';

const Hero = () => (
  <>
    <Grid container spacing={2} sx={{ pt: 8, px: { xs: 0, sm:6 , md: 8 }, alignItems: 'center', position: 'relative' }}>
      <Grid item xs={12} md={6} sx={{ position: { md: 'absolute' }, left: { md: 60 }, top: { md: 40 }, width: { md: '50%' } }}>
        <Box sx={{ p: { xs: 2, md: 0 }, borderRadius: 2, maxWidth: 700 }}>
          <Typography variant="h4" color="white" fontWeight={700} gutterBottom>
            IIGS exemplifies its dedication to sustainability through innovative procurement and supply chain practices that boost operational efficiency and drive industry-leading innovation
          </Typography>
          <Typography variant="h6" color="white" gutterBottom>
            IIGS is committed to delivering high-quality products on time, every time.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <button style={{ background: '#fff', color: '#3956a4', fontWeight: 700, border: 'none', borderRadius: 4, padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}>
              BOOK A MEETING →
            </button>
          </Box>
        </Box>
      </Grid>

    </Grid>
    
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: { xs: 180, sm: 260, md: 340, lg: 600 },
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <img
        src="/rob-world.png"
        alt="Robotic World"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </Box>


  </>
);

export default Hero;
