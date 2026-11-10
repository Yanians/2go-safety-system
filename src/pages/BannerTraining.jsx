
import React from "react";

import { Box, Typography, IconButton,Stack,Divider, } from "@mui/material";

import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function BannerTraining(){

  return(
      <>
     
        <Box
          sx={{
            width: "100%",
            p: 2,
            borderRadius: 2,
            background: `
                repeating-linear-gradient(
                -45deg,
                transparent 0px,
                transparent 48px,
                rgba(255,255,255,0.09) 49px,
                rgba(255,255,255,0.05) 50px
              ),
              linear-gradient(
                -104deg,
                rgba(201, 0, 88, 0.55) 0%,
                rgba(201, 0, 88, 0.70) 35%,
                rgba(201, 0, 88, 0.85) 70%,
                rgba(201, 0, 88, 1) 100%
              )
              `,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          {/* LEFT SECTION: ICON + TITLE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* ICON SPACE */}
            <CampaignIcon size="large"
              sx={{
                fontSize: 52,
                color: "#fff",
              }}
            />

            {/* MIDDLE: TITLE */}
            <Stack spacing={-0.5} direction="column">
                <Typography noWrap
                  sx={{
                    whiteSpace: "nowrap",
                    fontSize: { xs: 16, sm: 24 },
                    fontWeight: 900,
                    color: "#e91e63",
                     textShadow: "0.5px 1px 0.5px rgba(255,255,255,0.90)",
                  }}
                >
                  Featured Training Materials
                </Typography>

                 <Typography noWrap
                  variant="caption"
                  sx={{
                    whiteSpace: "nowrap",
                    display: "block",
                    color: "#ffffff",
                    fontSize: { xs: 10, sm: 12 },
                    fontWeight: 700,
                    mt: 0.3,
                  }}
                >
                  Click on any category to view the related materials
                </Typography>
          </Stack>
          </Box>
          
          {/* RIGHT SECTION: VIEW ALL */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                 textDecoration: "underline",
              }}
            >
              View All
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 20 }} />
          </Box>
        </Box>
    
    </>
  )
}
