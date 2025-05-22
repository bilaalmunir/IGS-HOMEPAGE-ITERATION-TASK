import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const menuItems = [
  { label: '1IGS STRATEGY', color: '#ff6a00', menu: ['Dropdown 1', 'Dropdown 2', 'Dropdown 3'] },
  { label: '1IGS iPROCURE', color: 'white', menu: ['Dropdown A', 'Dropdown B'] },
  { label: '1IGS iSUPPLY', color: 'white', menu: ['Dropdown X', 'Dropdown Y', 'Dropdown Z'] },
  { label: '1IGS iFREIGHT', color: 'white', menu: ['Dropdown Alpha', 'Dropdown Beta'] },
  { label: '1IGS MANAGED SERVICES', color: 'white', menu: ['Dropdown Gamma', 'Dropdown Delta'] },
];

const getStyledLabel = (label) => {
  // Match '1IGS' or '1IGS i' at the start
  const match = label.match(/^(1IGS i?|1IGS)/i);
  if (match) {
    const prefix = match[0];
    const rest = label.slice(prefix.length);
    return (
      <span style={{ whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
        <span style={{ color: '#F36434' }}>{prefix}</span>
        <span style={{ color: '#506BA4' }}>{rest}</span>
      </span>
    );
  }
  return <span style={{ color: '#506BA4', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>{label}</span>;
};

const Navbar3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEls, setAnchorEls] = React.useState(Array(menuItems.length).fill(null));
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  // Desktop handlers
  const handleMenuOpen = (index, event) => {
    const newAnchors = [...anchorEls];
    newAnchors[index] = event.currentTarget;
    setAnchorEls(newAnchors);
  };
  const handleMenuClose = (index) => {
    const newAnchors = [...anchorEls];
    newAnchors[index] = null;
    setAnchorEls(newAnchors);
  };

  // Mobile handlers
  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };
  const handleMobileSelect = (idx) => {
    setSelectedIdx(idx);
    setMobileMenuAnchor(null);
  };



  return (
    <AppBar position="static" color="transparent" sx={{ minHeight: 48, bgcolor: 'transparent', position:'sticky', top:0, zIndex:1000 }} elevation={0}>
      <Toolbar sx={{ minHeight: 48, px: 0 }}>
        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, width: '100%', justifyContent: 'start' }}>
            {menuItems.map((item, idx) => (
              <Box key={item.label} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', fontSize: { sm: '0.6rem', md: '0.8rem', lg: '1rem' }, gap:{sm:-4} }}
                  onClick={(e) => handleMenuOpen(idx, e)}
                >
                  {getStyledLabel(item.label)}
                  <ArrowDropDownIcon fontSize="small" sx={{ color: 'white' }} />
                </Typography>
                <Menu
                  anchorEl={anchorEls[idx]}
                  open={Boolean(anchorEls[idx])}
                  onClose={() => handleMenuClose(idx)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  keepMounted
                >
                  {item.menu.map((option) => (
                    <MenuItem key={option} onClick={() => handleMenuClose(idx)}>{option}</MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}
          </Box>
        )}
        {/* Mobile Menu: Only show selected item as a full-width banner, clicking opens dropdown of all items */}
        {isMobile && (
          <Box sx={{ width: '100%', display: 'flex' }}>
            <Box
              onClick={handleMobileMenuOpen}
              sx={{
                width: '100%',
                maxWidth: '100vw',
                bgcolor: '#111827',
                color: 'white',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5,
                cursor: 'pointer',
                minHeight: 48,
                fontSize: 18,
                boxShadow: 1,
                borderRadius: 0
              }}
            >
              {getStyledLabel(menuItems[selectedIdx].label)}
              <ArrowDropDownIcon sx={{ color: 'white', ml: 1 }} />
            </Box>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              keepMounted
              PaperProps={{ sx: { width: '100vw', left: 0, borderRadius: 0, bgcolor: '#222' } }}
            >
              {menuItems.map((item, idx) => (
                <MenuItem
                  key={item.label}
                  selected={selectedIdx === idx}
                  onClick={() => handleMobileSelect(idx)}
                  sx={{ color: 'white', fontWeight: 700, width: '100vw', fontSize: 18, bgcolor: selectedIdx === idx ? '#333' : 'inherit' }}
                >
                  {getStyledLabel(item.label)}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar3;
