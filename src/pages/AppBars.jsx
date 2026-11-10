
import React from "react";

import { 
  AppBar,
  Divider, 
  Avatar,
  Toolbar, 
  IconButton, 
  InputAdornment,
  Menu, 
  Box, 
  Stack,
  Typography,
  TextField,
  MenuItem, 
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

import {
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
              <Stack direction="column" spacing={-2}>
                <Typography variant="h4" className="logo-2go" sx={{ fontFamily: '"Akzidenz-Grotesk"',}}>
                  2GO
                </Typography>
                <Typography variant="caption" noWrap sx={{color:"#c90058",fontWeight:750}}>
                  Group inc
                </Typography>
              </Stack>

            <Box className="header-title">
              <Typography sx={{fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif',
                             fontWeight: 900,
                             }} variant="body1">
                EHS Dashboard
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#c90058",
                  fontSize: "13px",
                  fontWeight: 900,
                }}
                noWrap
              >
                Commit. Care. Go Safe
              </Typography>
            </Box>
          </Box>

          {/* RIGHT HEADER CONTROLS */}
          <Box className="topbar-right">

            <TextField sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "40px",
                    paddingLeft: "5px",
                  },

                  "& .MuiOutlinedInput-input": {
                    padding: "8px 10px",
                  },
            }}
              size="small"
              placeholder="Search..."
              className="search-box"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#757575 !important", fontSize: "22px",}} />
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