import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardMedia,} from "@mui/material";
import { Routes, Route,useNavigate } from "react-router-dom"

import FontComparison from "./FontComparison";

const images = [
  { id:1, src: "/dashboard/Picture1.png"},
  { id: 2, src: "/dashboard/Picture2.png"},
  { id:3, src: "/dashboard/Picture3.png"},
  { id:4, src: "/dashboard/Picture4.png"},
  { id:5, src: "/dashboard/Picture5.png"},
  { id:6, src: "/dashboard/Picture6.png"},
];

export default function MainContent(){
 const navigate = useNavigate();
	return (
        <Box component="main" className="main-content">
          <Grid container spacing={4}>
            {images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card onClick={() => navigate(`/${image.id}`)}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: "100%",
                     borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer", // Changes cursor to hand
                    transition: "0.3s",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.title}
                    sx={{
                      height: 220,
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <FontComparison />
        </Box>
	)
}