import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import cardImage from "../../../assets/bryan2.jpg";

export default function MyCard({ names, profile, city, state, number, email }) {
  return (
    <Card sx={{ maxWidth: 430 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={cardImage}
          alt="Usuario Bryan Tevillo"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {names}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {profile}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.primary">
            Ciudad: {city}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.primary">
            Estado: {state}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.primary">
            Telefono: {number}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.primary">
            Correo: {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
