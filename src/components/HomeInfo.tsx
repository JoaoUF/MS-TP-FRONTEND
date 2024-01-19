import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//https://github.com/googlemaps/js-samples/blob/sample-circle-simple/index.ts
//https://www.youtube.com/watch?v=6mFaeJ4JfVM&ab_channel=scriptpapi

const HomeInfo = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Descripción lugar de vivienda
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3, width:'100%' }}>
        <Grid  container spacing={2}>
          <Grid item sm={12}>
            <TextField
              fullWidth
                required
                id="outlined-required"
                label="Required"
              />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="With normal TextField"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">km</InputAdornment>,
              }}
            />
          </Grid> */}
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default HomeInfo
