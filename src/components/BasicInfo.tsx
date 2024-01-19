import React from 'react'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/joy/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const BasicInfo = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Analisis de personalidad
      </Typography>
      <Grid
        container 
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ width: 1, minHeight:'450px' }}>
        <Grid item xs={12} sx={{mb:3, mt:3}}>
          <Avatar
            size="lg"
            variant="solid"
            sx={{"--Avatar-size": "130px", bgcolor: '#e0e0e0'}}
          />
        </Grid>
        <Grid item xs={12} sx={{width: 1}}>
          <TextField
            fullWidth
            id="filled-multiline-static"
            label="Describete a ti mismo en más de 100 palabras"
            multiline
            rows={10}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default BasicInfo
