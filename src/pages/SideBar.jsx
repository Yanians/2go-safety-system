
import { Box, Typography } from "@mui/material";

import {
  Dashboard,
  School,
  MenuBook,
  People,
  Assessment,
  Settings,
  HealthAndSafety,
} from "@mui/icons-material";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

import { useNavigate, useLocation } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Dashboard />,
      path: "/",
    },
    {
      title: "Training Programs",
      icon: <School />,
      path: "/training-programs",
    },
    {
      title: "Permit to Work",
      icon: <ReceiptLongIcon />,
      path: "/permit-to-work",
    },
    {
      title: "Learning Materials",
      icon: <MenuBook />,
      path: "/learning-materials",
    },
    {
      title: "Safety Training",
      icon: <HealthAndSafety />,
      path: "/safety-training",
    },
    {
      title: "Employees",
      icon: <People />,
      path: "/employees",
    },
    {
      title: "Walkthrough",
      icon: <DirectionsWalkIcon />,
      path: "/walkthrough",
    },
    {
      title: "Reports",
      icon: <Assessment />,
      path: "/reports",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
  ];

  return (
    <Box
  component="aside"
  className="sidebar"
  sx={{
    width: {
      xs: "55px",
      sm: "180px",
      md: "250px",
    },
    minWidth: {
      xs: "55px",
      sm: "180px",
      md: "250px",
    },
    height: "calc(100vh - 75px)",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    overflow: "hidden",
    boxSizing: "border-box",
  }}
>
  <Box
    className="menu"
    component="nav"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      width: "100%",
      minWidth: 0,
      overflow: "hidden",
      gap: 0,
    }}
  >
        <Typography
          className="menu-label"
          sx={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "1px",
            mb: 2,
            px: 1,
            whiteSpace: "nowrap",
            display: { xs: "none", sm: "block" },
          }}
        >
          MAIN MENU
        </Typography>

        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Box
              key={item.path}
              className={`menu-item ${isActive ? "active" : ""}`}
              onClick={() => navigate(item.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(item.path);
                }
              }}
             
sx={{
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: {
    xs: "center",
    sm: "flex-start",
  },

  width: "100%",
  minWidth: 0,

  gap: {
    xs: 0,
    sm: 1.5,
  },

  px: {
    xs: 0,
    sm: 1.5,
  },

  py: 1.3,
  mb: 0.5,

  borderRadius: "8px",
  cursor: "pointer",
  flexShrink: 0,
  transition: "all 0.2s ease",

  "& svg": {
    fontSize: 21,
    flexShrink: 0,
  },

  "& span": {
    display: {
      xs: "none",
      sm: "block",
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "13px",
  },
}}

            >
              {item.icon}
              <span>{item.title}</span>
            </Box>
          );
        })}
      </Box>

      {/* FOOTER */}
      <Box
        className="sidebar-footer"
        sx={{
          display: { xs: "none", sm: "block" },
          p: 2,
          fontSize: "11px",
          lineHeight: 1.7,
          flexShrink: 0,
        }}
      >
        Safety Training System
        <br />
        Version 1.0
      </Box>
    </Box>
  );
}
