import MyCard from "../Card/MyCard";
import MyInfo from "../MyInfo/MyInfo";
import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const About = ({ info }) => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={6}>
        <MyCard i {...info}></MyCard>
      </Grid>
      <Grid xs={6} md={6}>
        <MyInfo {...info}></MyInfo>
      </Grid>
    </Grid>
    // <>
    //   <MyCard></MyCard>
    //   <MyInfo></MyInfo>
    // </>
  );
};

export default About;
