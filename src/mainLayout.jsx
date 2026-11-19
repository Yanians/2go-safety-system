import React from "react";
import { Box } from "@mui/material";

import Sidebars from "./pages/SideBar";
import AppBarHeader from "./pages/AppBars";
import MainContent from "./pages/MainContent";
import "./App.css";

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        gap: { xs: 1, sm: 2 },
        p: { xs: 1, sm: 2 },
        background:"#c90058",
        boxSizing: "border-box",
        alignItems: "stretch",
      }}
    >
        <Sidebars />

      {/* MAIN CONTAINER - 8/12 */}
      <Box className="main-layout"
        sx={{
          flex: "1 1 66.667%",
          minWidth: 0,
           bgcolor:"white",
          display: "flex",
          flexDirection: "column",
           m: { xs: 1, sm: 2, md:0 },
          borderRadius: "25px",
          overflow: "visible",
        }}
      >

        {/* APPBAR INSIDE MAIN CONTAINER */}
        <Box
          sx={{
            position: "sticky",
            top: { xs: 8, sm:16, },
            zIndex: 1200,

            borderRadius: "25px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <AppBarHeader />
       </Box>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            p: { xs: 1, sm: 2, md: 2 },
          }}
        >
          <MainContent />
        </Box>

      </Box>
    </Box>
  );
}