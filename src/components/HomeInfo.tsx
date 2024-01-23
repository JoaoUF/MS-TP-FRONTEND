import React, { useCallback, useMemo, useRef, useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  useLoadScript,
} from "@react-google-maps/api";
import { Place } from '@mui/icons-material';

type LatLogLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const HomeInfo = () => {
  const [location, setLocation] = useState<LatLogLiteral>()
  const mapRef = useRef<GoogleMap>()
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries:['places'],
  });
  const center = useMemo<LatLogLiteral>(() => ({lat:-12.103321431813999, lng:-76.96337168465614}), [])
  const options = useMemo<MapOptions>(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
  }), [])
  const onLoad = useCallback((map: any) => (mapRef.current = map), [])

  if (!isLoaded) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Descripción lugar de vivienda
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3, width:'100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              variant="outlined"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1 }}
            >
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          {/* <Grid item xs={12} sx={{ height:'400px'}}>
            <Paper 
              sx={{bgcolor:'red', width:1, height:1}}
              elevation={0}>
              <GoogleMap 
                zoom={16} 
                center={center} 
                options={options}
                onLoad={onLoad}
                mapContainerClassName='map-container'/>
            </Paper>
          </Grid> */}
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default HomeInfo
