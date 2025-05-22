import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar1 = () => (
  <AppBar position="static" color="primary" sx={{ minHeight: 30, maxHeight: 50, bgcolor: '#111827',  }} elevation={0}>
    <Toolbar sx={{ minHeight: 40, px: 2 }}>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', alignContent: 'center', mb: { xs: 0, md: 1 , lg: 1 } }}>
        <IconButton color="inherit" size="small"><SearchIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="small"><CallIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="small"><LanguageIcon fontSize="small" /></IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 , mb: { xs: 0, md: 1 , lg: 1 } }}>
        <IconButton color="inherit" size="small"><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
        <IconButton color="inherit" size="small"><AccountCircleIcon fontSize="small" /></IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar1;
