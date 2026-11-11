
import React from "react";

import {
  Box,
  Card,
  CardMedia,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import DashboardBanner from "../banner/DashboardBanner";

const images = [
  { id: 1, src: "/dashboard/Picture1.png" },
  { id: 2, src: "/dashboard/Picture2.png" },
  { id: 3, src: "/dashboard/Picture3.png" },
  { id: 4, src: "/dashboard/Picture4.png" },
  { id: 5, src: "/dashboard/Picture5.png" },
  { id: 6, src: "/dashboard/Picture6.png" },
];

export default function MainContent() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        mx: 0,
        mt: 1,
        gap: 2,
      }}
    >
      {/* DASHBOARD BANNER */}
      <DashboardBanner />
      <Box
        sx={{
          width: "100%",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
      </Box>
         
      {/* DASHBOARD IMAGE CARDS */}

      <Box
        component="main"
        className="main-content"
        sx={{
          display: "grid",
          width: "100%",
          minWidth: 0,
          gridTemplateColumns: {
            // xs: "minmax(0, 1fr)",
            xs:"repeat(2, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
          boxSizing: "border-box",
        }}
      >

        {images.map((image) => (
          <Card
            key={image.id}
            onClick={() => navigate(`/pages/${image.id}`)}
            sx={{
              width: "100%",
                minWidth: 0,
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignSelf: "start",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                cursor: "pointer",
                transition: "0.3s ease",

              "&:hover": {
                transform: {
                  xs: "none",
                  sm: "translateY(-5px)",
                },
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              image={image.src}
              alt={`Dashboard image ${image.id}`}
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "contain",
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
}
