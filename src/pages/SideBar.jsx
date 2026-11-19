
import { Box, Typography, Divider,Stack, } from "@mui/material";

import {
  Dashboard,
  School,
  MenuBook,
  People,
  Assessment,
  Settings,
  HealthAndSafety,
} from "@mui/icons-material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
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
      title: "Safety Training",
      icon: <HealthAndSafety />,
      path: "/safety-training",
    },
     {
      title: "Permit to Work",
      icon: <ReceiptLongIcon />,
      path: "/permit-to-work",
    },
    {
      title: "Safety Programs",
      icon: <School />,
      path: "/safety-programs",
    },
     {
      title: "Compliance",
      icon: <MenuBook />,
      path: "/compliance",
    },
     {
      title: "Reports",
      icon: <Assessment />,
      path: "/reports",
    },
    {
      title: "Walkthrough",
      icon: <DirectionsWalkIcon />,
      path: "/walkthrough",
    },
   ];

   const menuItems2 = [
    {
      title: "Employees",
      icon: <People />,
      path: "/employees",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
    {
      title: "Training Materials",
      icon: <MenuBookIcon />,
      path: "/training-materials",
    },
    {
      title: "My Progress",
      icon: <SignalCellularAltIcon />,
      path: "/my-progress",
    },
    {
      title: "Favorites",
      icon: <StarIcon />,
      path: "/favorites",
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

              overflowY: "auto",
              overflowX: "hidden",

              boxSizing: "border-box",

               scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255,255,255,0.35)",
                borderRadius: "10px",
              },
              
            }}
          >
               <Stack direction="column" spacing={-2} sx={{ mt:{xs:-1,sm:-3,},}}>
                  <Typography variant="h2" noWrap color="white" className="logo-2go" sx={{ color:"#ffff", fontFamily: '"Akzidenz-Grotesk"',}}>
                    2GO
                  </Typography>
                  <Typography variant="caption" noWrap sx={{color:"#ffff",fontWeight:750}}>
                    Safety First Always
                  </Typography>
                </Stack>
            <Box
              className="menu"
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                width: "100%",
                minWidth: 0,
                mt:6,
                overflow: "visible",
                gap: 0,
              }}
            >        

        { menuItems.map((item) => {
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

        <Divider direction="horizontal" variant="middle" textAlign="center" sx={{my:1,bgcolor:"white"}}/>

            { menuItems2.map((item,index)=>{
              const isActive = location.pathname === item.path;
                  return(
                     <Box
              key={item.path}
              className={`menu-item ${isActive ? "active" : ""}`}
              onClick={() => navigate(item.path)}
              role="button"
              tabIndex={index + 1}
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
                  )

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
