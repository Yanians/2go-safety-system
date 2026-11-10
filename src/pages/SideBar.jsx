
import {Box,Typography, } from "@mui/material";
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
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

import { useNavigate } from 'react-router-dom';

export default function SideBar(){
 const navigate = useNavigate();

	return(
      <>

        {/* SIDEBAR */}
        <Box component="aside" className="sidebar">
          <Box className="menu">
            <Typography className="menu-label">
              MAIN MENU
            </Typography>

            <Box className="menu-item active"  onClick={() => navigate("/")}
      sx={{
        cursor: "pointer",}}>
              <Dashboard />
              <span>Dashboard</span>
            </Box>

            <Box className="menu-item">
              <School />
              <span>Training Programs</span>
            </Box>


            <Box className="menu-item">
              <ReceiptLongIcon />
              <span>Permit to Work</span>
            </Box>

            <Box className="menu-item">
              <MenuBook />
              <span>Learning Materials</span>
            </Box>

             <Box className="menu-item" onClick={() => navigate("/safety-training")}
             sx={{
                cursor: "pointer",}}>
              <HealthAndSafetyIcon />
              <span>Safety Training</span>
            </Box>

            <Box className="menu-item">
              <People />
              <span>Employees</span>
            </Box>


            <Box className="menu-item">
              <DirectionsWalkIcon />
              <span>Walkthrough</span>
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
       </>
	)
};