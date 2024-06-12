import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
// import logo from "../../assets/trc_logo_negro 1.png";
import logo from "../../assets/images1.jpg";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          textAlign: "center",
          marginTop: "40px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginTop: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: "24px",
          backgroundColor: "#000",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          marginTop: "20px",
        },
      },
    },
  },
});

const CreateAccount = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box>
          <img
            src={logo}
            alt="TRC Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />
          <Typography variant="h5" component="h1" gutterBottom>
            Crea tu cuenta
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                {" "}
                {/* Ocupa toda la fila en dispositivos pequeños y grandes */}
                <TextField fullWidth label="Nombre de usuario" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Nombre" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Apellido" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Correo electrónico" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth type="password" label="Contraseña" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirmar Contraseña"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid container spacing={2}>
                  {" "}
                  {/* Fecha de nacimiento */}
                  <Grid item xs={12} sm={4}>
                    <Select fullWidth displayEmpty defaultValue="">
                      <MenuItem value="" disabled>
                        Día
                      </MenuItem>
                      {[...Array(31).keys()].map((day) => (
                        <MenuItem key={day + 1} value={day + 1}>
                          {day + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Select fullWidth displayEmpty defaultValue="">
                      <MenuItem value="" disabled>
                        Mes
                      </MenuItem>
                      {Array.from({ length: 12 }, (_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField fullWidth type="number" label="Año" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Nacionalidad" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Número de celular" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Dirección" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Documento de identidad" />
              </Grid>
            </Grid>

            <FormControlLabel
              control={<Checkbox name="terms" color="primary" />}
              label="Yo acepto los Términos y Condiciones"
            />

            <Button fullWidth variant="contained" color="primary">
              Registrarse
            </Button>

            <Typography variant="body2">
              ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateAccount;
