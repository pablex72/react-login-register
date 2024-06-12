import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import logo from '../../assets/images1.jpg';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: 'white',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          marginTop: '40px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          marginTop: '20px',
        },
        subtitle1: {
          fontWeight: 'bold',
          color: 'blue',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: '24px',
          backgroundColor: '#000',
        },
      },
    },
  },
});

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box>
          <img src={logo} alt="TRC Logo" style={{ width: '150px', marginBottom: '20px' }} />
          <Typography variant="h5" component="h1" gutterBottom>
            Bienvenido
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Correo electrónico" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth type="password" label="Contraseña" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Olvidó su contraseña?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary">
                  Iniciar sesión
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  No tienes una cuenta? <b>Regístrate</b>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
