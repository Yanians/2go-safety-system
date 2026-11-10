
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Security, LocalShipping, WorkspacePremium, HealthAndSafety, MenuBook, People } from '@mui/icons-material';
import {
  Box,
} from "@mui/material";

import MainContent from "./pages/MainContent";
import ImageDetails from "./pages/ImageLink";
import SideBars from './pages/SideBar';
import SafetyTraining from './pages/SafetyTraining';
import AppBars from './pages/AppBars';
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
 
  return (
    <Box className="app-layout">

      {/* STICKY FULL-WIDTH APP BAR */}
         <AppBars />
     


      {/* SIDEBAR AND MAIN CONTENT */}
      
       <Box className="content-layout">
         
        {/* SIDEBAR */}
           <SideBars />

            {/* MAIN CONTENT */}
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/:id" element={<SafetyTraining />} />
                <Route path="/:id" element={<ImageDetails />} />
              </Routes>
       </Box>
      </Box>
  );
}

export default App;
