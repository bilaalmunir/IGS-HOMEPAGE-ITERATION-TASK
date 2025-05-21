import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Navbar3 = () => (
  <AppBar position="static" color="transparent" sx={{ minHeight: 48,bgcolor: 'transparent' }} elevation={0}>
    <Toolbar sx={{ minHeight: 48, px: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography variant="body2" color="#ff6a00" sx={{ fontWeight: 700, cursor: 'pointer' }}>ITEM1</Typography>
        <Typography variant="body2" color="white" sx={{ fontWeight: 700, cursor: 'pointer' }}>ITEM2</Typography>
        <Typography variant="body2" color="white" sx={{ fontWeight: 700, cursor: 'pointer' }}>ITEM3</Typography>
        <Typography variant="body2" color="white" sx={{ fontWeight: 700, cursor: 'pointer' }}>ITEM4</Typography>
        <Typography variant="body2" color="white" sx={{ fontWeight: 700, cursor: 'pointer' }}>ITEM5</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar3;
