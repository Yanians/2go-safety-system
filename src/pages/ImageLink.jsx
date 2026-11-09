import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function ImageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        sx={{ mb: 3 }}
      >
        Back to Dashboard
      </Button>

      <Typography variant="h4">
        This is the output number {id} content goes here
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Welcome to the content page for Image {id}.
      </Typography>
    </Box>
  );
}