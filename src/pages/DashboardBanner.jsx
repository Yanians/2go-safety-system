
import React from "react";

import {
  Box,
  Typography,
  Stack,
} from "@mui/material";

import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BannerTraining() {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        p: { xs: 1.2, sm: 2 },
        borderRadius: 2,
        overflow: "hidden",

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
        gap: 1,
      }}
    >
      {/* LEFT SECTION: ICON + TEXT */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.8, sm: 2 },

          flex: "1 1 0%",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* ICON */}
        <CampaignIcon
          sx={{
            fontSize: { xs: 28, sm: 42, md: 52 },
            color: "#fff",
            flexShrink: 0,
          }}
        />

        {/* TITLE + CAPTION */}
        <Stack
          spacing={0}
          sx={{
            flex: "1 1 0%",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {/* TITLE */}
          <Typography
             noWrap
      sx={{
        fontSize: { xs: 13, sm: 18, md: 24 },
        fontWeight: 900,
        color: "#fce4ec",
        textShadow: "0.5px 1px 0.5px rgba(255,255,255,0.90)",
        textAlign: "left",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
            }}
          >
            Dashboard
          </Typography>

          {/* CAPTION */}
          <Typography
            noWrap
            variant="caption"
            sx={{
              display: "block",
              fontSize: {
                xs: 9,
                sm: 11,
                md: 12,
              },
              fontWeight: 700,
              color: "#ffffff",
              overflow: "hidden",
              textAlign:"left",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: 1.4,
            }}
          >
            Access your safety training materials and stay informed
          </Typography>
        </Stack>
      </Box>

      {/* RIGHT SECTION: VIEW ALL */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.3, sm: 0.5 },
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        <Typography
          noWrap
          sx={{
            fontSize: { xs: 10, sm: 12, md: 14 },
            fontWeight: 700,
            color: "#ffffff",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            whiteSpace: "nowrap",
          }}
        >
          View All
        </Typography>

        <ArrowForwardIcon
          sx={{
            fontSize: { xs: 15, sm: 18, md: 20 },
            color: "#ffffff",
            flexShrink: 0,
          }}
        />
      </Box>
    </Box>
  );
}
