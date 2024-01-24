import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function MyInfo({ info }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#EAE0C8" }}>
      <CardContent>
        <Typography variant="h5" component="div" color="red">
          Sobre Mi
        </Typography>
        <Divider></Divider>

        {info.split(".").map((texto, index) => (
          <Typography
            sx={{ fontSize: 16 }}
            textAlign="left"
            key={index}
            component="div"
          >
            {" "}
            {texto}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
