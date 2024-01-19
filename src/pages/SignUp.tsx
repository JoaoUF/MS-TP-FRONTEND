import * as React from 'react';
import dayjs from 'dayjs';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  Link as RouterLink,
} from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApelllido] = React.useState('')
  const [correo, setCorreo] = React.useState('')
  const [fecha, setFecha] = React.useState('')
  const [genero, setGenero] = React.useState('')
  const [universidad, setUniversidad] = React.useState('')
  const [carrera, setCarrera] = React.useState('')
  const [contrasenia, setContrasenia] = React.useState('')
  const [confirmarContrasenia, setConfirmarContrasenia] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      fecha: fecha,
      genero: genero,
      universidad: universidad,
      carrera: carrera,
      contrasenia: contrasenia,
      confirmarContrasenia: confirmarContrasenia,
    });


  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="nombre"
                  name="nombre"
                  label="Nombre"
                  autoComplete="nombre"
                  onChange={e=>setNombre(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="apellido"
                  label="Apellido"
                  name="apellido"
                  autoComplete="family-name"
                  onChange={e=>setApelllido(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="correo"
                  label="Correo"
                  name="correo"
                  autoComplete="email"
                  onChange={e=>setCorreo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider 
                  dateAdapter={AdapterDayjs}>
                  <DatePicker sx={{ width: "100% " }} value={fecha} onChange={e=>setFecha(dayjs(e).format('YYYY-MM-DD 00:00'))} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-gender">Genero</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="demo-simple-select-gender"
                    id="gender"
                    value={genero}
                    label="Genero"
                    onChange={e=>setGenero(e.target.value as string)}
                  >
                    <MenuItem value={1}>Masculino</MenuItem>
                    <MenuItem value={2}>Femenino</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-university">Universidad</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="demo-simple-select-university"
                    id="university"
                    value={universidad}
                    label="Universidad"
                    onChange={e=>setUniversidad(e.target.value as string)}
                  >
                    <MenuItem value={1}>Universidad Peruana de Ciencias Aplicadas</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-career">Carrera</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="demo-simple-select-career"
                    id="career"
                    value={carrera}
                    label="Carrera"
                    onChange={e=>setCarrera(e.target.value as string)}
                  >
                    <MenuItem value={1}>Ingenieria de Sistemas de información</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contrasenia"
                  label="Constraseña"
                  type="password"
                  id="contrasenia"
                  autoComplete="contrasenia"
                  onChange={e=>setContrasenia(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmarContrasenia"
                  label="Confirmar constraseña"
                  type="password"
                  id="confirmarContrasenia"
                  autoComplete="confirmarContrasenia"
                  onChange={e=>setConfirmarContrasenia(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link component={RouterLink} to="/" variant="body2"> */}
                <Link variant="body2">
                    ¿Ya tienes una cuenta?  Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}