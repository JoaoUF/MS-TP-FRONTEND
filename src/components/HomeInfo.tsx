import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import {
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   Circle,
//   MarkerClusterer,
// } from "@react-google-maps/api";


const HomeInfo = () => {
  const defaultProps = {
    center: {
      //-12.10311162482252, -76.96371500740699
      lat: -12.10311162482252,
      lng: -76.96371500740699
    },
    zoom: 11
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Descripción lugar de vivienda
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3, width:'100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
                required
                id="outlined-required"
                label="Required"
              />
          </Grid>
          <Grid item xs={12} sx={{ height:'100px'}}>

          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default HomeInfo
