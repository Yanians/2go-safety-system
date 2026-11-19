
import React from "react";

import { styled, alpha } from '@mui/material/styles';

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

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import {
  NotificationsNone,
  Dashboard,
  Settings,
  KeyboardArrowDown,
} from "@mui/icons-material";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:'40px',
    border:'2px solid grey',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft:0,
  width: '100%',
  minWidth:0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    minWidth: "180px",
    flex: "0 1 300px",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function AppBars(){

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
  setAnchorEl(null);
  };

  return (
     
<AppBar 
 position="sticky"
  className="app-header"
  elevation={0}
  
  // sx={{
  //   backgroundColor: "rgba(255, 255, 255, 0.5)",
  //   backdropFilter: "blur(10px)",
  //   WebkitBackdropFilter: "blur(10px)",
  //   borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  //   boxShadow: "none",
  //   color: "#555555",
  // }}

   sx={{
    background: "rgba(255, 255, 255, 0.5) !important",
    backgroundImage: "none !important",

    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",

    borderBottom: "1px solid rgba(255,255,255,0.4)",
    boxShadow: "none",

    color: "#555555",
    zIndex: (theme) => theme.zIndex.appBar,

    "& .MuiToolbar-root": {
      background: "transparent",
    },
  }}

>

  <Toolbar
    className="app-toolbar"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: { xs: 1, sm: 2 },
      minWidth: 0,
      width: "100%",
    }}
  >
    {/* LEFT HEADER BRANDING */}
    <Box
      className="header-brand"
      sx={{
        flex: "0 1 35%",
        minWidth: 0,
        maxWidth: "35%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          minWidth: 0,
          width: "100%",
          gap: 0,
        }}
      >
        <Typography
          variant="h4"
          noWrap
          sx={{
            color: "#c90058",
            fontWeight: 900,
            lineHeight: 1.1,
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: { xs: "1.1rem", sm: "2.125rem" },
          }}
        >
          Dashboard
        </Typography>

        <Typography
          variant="caption"
          noWrap
          sx={{
            color: "#c90058",
            fontWeight: 750,
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
          }}
        >
          Access your safety training materials and stay informed
        </Typography>
      </Box>
    </Box>

    {/* RIGHT HEADER CONTROLS */}
    <Box
      className="topbar-right"
      sx={{
        display: "flex",
        alignItems: "center",
        flex: "1 1 65%",
        minWidth: 0,
        gap: { xs: 0.5, sm: 1 },
      }}
    >
      {/* SEARCH */}
      <Search
        sx={{
          flex: "1 1 auto",
          minWidth: 0,
          width: "auto",
          marginLeft: 0,
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search training materials"
          inputProps={{ "aria-label": "search" }}
          sx={{
            minWidth: 0,
            width: "100%",
            "& input": {
              minWidth: 0,
              width: "100%",
              paddingRight: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
        />
      </Search>

      {/* NOTIFICATIONS */}
      <IconButton
        aria-label="Notifications"
        sx={{
          display: { xs: "none", sm: "flex" },
          color: "#555555",
          flexShrink: 0,
        }}
      >
        <NotificationsNone />
      </IconButton>

      {/* PROFILE */}
      <Box
        className="profile-section"
        sx={{
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <Avatar className="user-avatar"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >A</Avatar>

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
          <MenuItem
            onClick={handleClose}
            sx={{ display: { xs: "flex", sm:"none", md: "none" } }}
          >
            <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
              A
            </Avatar>
          </MenuItem>

          <MenuItem
            onClick={handleClose}
            sx={{ display: { xs: "flex", sm:"none", md: "none" } }}
          >
            <IconButton
              aria-label="Notifications"
              sx={{
                color: "#555555",
                flexShrink: 0,
              }}
            >
            <NotificationsNone />

      </IconButton>
          </MenuItem>

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