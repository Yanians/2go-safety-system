import React from "react";

import { AppBar, Divider, Avatar,Toolbar, IconButton, InputAdornment,Menu, Box, Typography,TextField,MenuItem, } from "@mui/material";

import {
  Search,
  NotificationsNone,
  Dashboard,
  Settings,
  KeyboardArrowDown,
} from "@mui/icons-material";




export default function AppBars(){

  const [anchorEl, setAnchorEl] = React.useState(null);

   const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
     <AppBar position="sticky" className="app-header" elevation={1}>

        <Toolbar className="app-toolbar">
          {/* LEFT HEADER BRANDING */}
          <Box className="header-brand">
            <Typography variant="h4" className="header-logo">
              2GO
            </Typography>

            <Box className="header-title">
              <Typography variant="h6" fontWeight="bold">
                EHS Dashboard
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#777777",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Commit. Care. Go Safe
              </Typography>
            </Box>
          </Box>

          {/* RIGHT HEADER CONTROLS */}
          <Box className="topbar-right">

            <TextField
              size="small"
              placeholder="Search..."
              className="search-box"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />

            <IconButton aria-label="Notifications" sx={{ color: "#555555" }}>
              <NotificationsNone />
            </IconButton>

            <Box className="profile-section">
              <Avatar className="user-avatar">A</Avatar>

              <IconButton
                onClick={handleProfileClick}
                aria-label="Open profile menu"
                sx={{ color: "#555555" }}
              >
                <KeyboardArrowDown />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleProfileClose}>
                  My Profile
                </MenuItem>

                <MenuItem onClick={handleProfileClose}>
                  Account Settings
                </MenuItem>

                <Divider />

                <MenuItem onClick={handleProfileClose}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
  );
}