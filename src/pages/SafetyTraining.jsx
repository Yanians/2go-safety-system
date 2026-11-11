import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardMedia,} from "@mui/material";
import { Routes, Route,useNavigate } from "react-router-dom"
import BannerTraining from '../banner/BannerTraining';

const images = [
  { id:1, src: "/safety-training/menu1.png"},
  { id: 2, src: "/safety-training/menu2.png"},
  { id:3, src: "/safety-training/menu3.png"},
  { id:4, src: "/safety-training/menu4.png"},
  { id:5, src: "/safety-training/menu5.png"},
  { id:6, src: "/safety-training/menu6.png"},
];

export default function SafetyTraining(){
  
 const navigate = useNavigate();
  return (
    <>
      <Box 
         component="main"
        className="main-content"
           sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "auto",
                mx: 0,
                mt: 1,
                gap: 2,
            }}
      >
         <BannerTraining />
         <Box
  sx={{
    display: "grid",
    width: "100%",
    minWidth: 0,
    gridTemplateColumns: {
      // xs: "minmax(0, 1fr)",
       xs: "repeat(2, minmax(0, 1fr))",
      sm: "repeat(2, minmax(0, 1fr))",
      md: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
    },
    gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
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
        src={image.src}
        alt={`Training image ${image.id}`}
        loading="lazy"
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
       
        </>
  )
}