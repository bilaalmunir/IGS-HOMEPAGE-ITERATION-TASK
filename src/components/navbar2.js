import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const menuItems = [
  { label: "Partner", menu: ["Option 1", "Option 2", "Option 3"] },
  { label: "Company", menu: ["Option A", "Option B"] },
  { label: "Managed Services", menu: ["Choice X", "Choice Y", "Choice Z"] },
  { label: "Industries", menu: ["Alpha", "Beta"] },
  { label: "Careers", menu: ["Alpha", "Beta"] },
];

const Navbar2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [anchorEls, setAnchorEls] = React.useState(
    Array(menuItems.length).fill(null)
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerMenusOpen, setDrawerMenusOpen] = React.useState(
    Array(menuItems.length).fill(false)
  );

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

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerMenuClick = (idx) => {
    setDrawerMenusOpen((prev) => {
      const newOpen = [...prev];
      newOpen[idx] = !newOpen[idx];
      return newOpen;
    });
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        minHeight: 56,
        bgcolor: isMobile ? "#111827" : "transparent",
      }}
      elevation={0}
    >
      <Toolbar sx={{ minHeight: 56, px: 2, justifyContent: "space-between" }}>
        <Box
          sx={{
            height: { xs: 24, sm: 32, md: 40, lg: 48 },
            width: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="Company Logo"
            style={{ height: "100%", width: "auto", display: "block" }}
          />
        </Box>
        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {menuItems.map((item, idx) => (
              <Box
                key={item.label}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: 14,
                  }}
                  onClick={(e) => handleMenuOpen(idx, e)}
                >
                  {item.label}
                  <ArrowDropDownIcon fontSize="small" sx={{ color: "white" }} />
                </Typography>
                <Menu
                  anchorEl={anchorEls[idx]}
                  open={Boolean(anchorEls[idx])}
                  onClose={() => handleMenuClose(idx)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  keepMounted
                >
                  {item.menu.map((option) => (
                    <MenuItem key={option} onClick={() => handleMenuClose(idx)}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}
          </Box>
        )}
        {/* Mobile Menu */}
        {isMobile && (
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        )}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Box
            sx={{ width: 250, bgcolor: "#111827", height: "100%" }}
            role="presentation"
            onClick={handleDrawerToggle}
          >
            <List>
              {menuItems.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <ListItem
                    button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDrawerMenuClick(idx);
                    }}
                    sx={{ color: "white" }}
                  >
                    <ListItemText primary={item.label} />
                    <ArrowDropDownIcon
                      sx={{
                        color: "white",
                        transform: drawerMenusOpen[idx]
                          ? "rotate(180deg)"
                          : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </ListItem>
                  <Collapse
                    in={drawerMenusOpen[idx]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.menu.map((option) => (
                        <ListItem
                          button
                          key={option}
                          sx={{ pl: 4, color: "white" }}
                        >
                          <ListItemText primary={option} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                  <Divider sx={{ bgcolor: "#222", my: 0.5 }} />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar2;
