import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Navbar2 = () => (
  <AppBar position="static" color="transparent" sx={{ minHeight: 56, bgcolor: 'transparent' }} elevation={0}>
    <Toolbar sx={{ minHeight: 56, px: 2, justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo192.png" alt="Company Logo" style={{ height: 40 }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography variant="body1" color="white" sx={{ fontWeight: 600, cursor: 'pointer' }}>Item1</Typography>
        <Typography variant="body1" color="white" sx={{ fontWeight: 600, cursor: 'pointer' }}>Item2</Typography>
        <Typography variant="body1" color="white" sx={{ fontWeight: 600, cursor: 'pointer' }}>Item3</Typography>
        <Typography variant="body1" color="white" sx={{ fontWeight: 600, cursor: 'pointer' }}>Item4</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar2;
