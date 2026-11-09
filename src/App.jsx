
import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  AppBar,
  Toolbar,
} from "@mui/material";
import MainContent from "./pages/MainContent";
import { useNavigate } from "react-router-dom";

import {
  Search,
  NotificationsNone,
  Dashboard,
  School,
  MenuBook,
  People,
  Assessment,
  Settings,
  Security,
  HealthAndSafety,
  LocalShipping,
  WorkspacePremium,
  KeyboardArrowDown,
} from "@mui/icons-material";
import ImageDetails from "./pages/ImageLink";

import "./App.css";

const images = [
  { id:1, src: "/dashboard/Picture1.png"},
  { id: 2, src: "/dashboard/Picture2.png"},
  { id:3, src: "/dashboard/Picture3.png"},
  { id:4, src: "/dashboard/Picture4.png"},
  { id:5, src: "/dashboard/Picture5.png"},
  { id:6, src: "/dashboard/Picture6.png"},
];

const categories = [
  {
    title: "Safety Orientation",
    description: "Learn essential workplace safety procedures.",
    icon: <Security />,
    color: "#e8f0ff",
  },
  {
    title: "Fire Safety",
    description: "Fire prevention and emergency response.",
    icon: <HealthAndSafety />,
    color: "#ffe9e9",
  },
  {
    title: "Container Yard Safety",
    description: "Safe practices in container yard operations.",
    icon: <LocalShipping />,
    color: "#fff1df",
  },
  {
    title: "Training Materials",
    description: "Access learning materials and resources.",
    icon: <MenuBook />,
    color: "#e9f8ef",
  },
  {
    title: "Employee Training",
    description: "Monitor employee training participation.",
    icon: <People />,
    color: "#f1eaff",
  },
  {
    title: "Certificates",
    description: "View completed training certificates.",
    icon: <WorkspacePremium />,
    color: "#fff7d9",
  },
];

function App() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="app-layout">

      {/* STICKY FULL-WIDTH APP BAR */}

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


      {/* SIDEBAR AND MAIN CONTENT */}
      <Box className="content-layout">

        {/* SIDEBAR */}
        <Box component="aside" className="sidebar">

          <Box className="menu">
            <Typography className="menu-label">
              MAIN MENU
            </Typography>

            <Box className="menu-item active"  onClick={() => navigate("/")}
      sx={{
        cursor: "pointer",}} >
              <Dashboard />
              <span>Dashboard</span>
            </Box>

            <Box className="menu-item">
              <School />
              <span>Training Programs</span>
            </Box>

            <Box className="menu-item">
              <MenuBook />
              <span>Learning Materials</span>
            </Box>

            <Box className="menu-item">
              <People />
              <span>Employees</span>
            </Box>

            <Box className="menu-item">
              <Assessment />
              <span>Reports</span>
            </Box>

            <Box className="menu-item">
              <Settings />
              <span>Settings</span>
            </Box>
          </Box>

          <Box className="sidebar-footer">
            Safety Training System
            <br />
            Version 1.0
          </Box>

        </Box>

        {/* MAIN CONTENT */}

           <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/:id" element={<ImageDetails />} />
          </Routes>
      
      </Box>
    </Box>
  );
}

export default App;
