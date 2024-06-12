import React from "react";
import { styled } from "@mui/system";

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
import logo from "../../assets/images1.jpg";
// import logo from "../../assets/trc_logo_negro 1.png";

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
          colorRendering: "yellow",
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "16px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "gray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "gray",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "gray",
          "&.Mui-focused": {
            color: "gray",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray", // Borde cian cuando no está enfocado
          },
        },
      },
    },
  },
});

const Rectangle18 = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "#a40000",
  marginBottom: "50px",
}));

const CreateAccount = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box>
          <img
            src={logo}
            alt="TRC Logo"
            style={{
              width: "189.75px",
              height: "91px",
              marginBottom: "50px",
              marginTop: "20px",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontFamily: "Century Gothic",
              fontWeight: 700,
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            Crea tu cuenta
          </Typography>

          <Rectangle18 />
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Nombre de usuario" />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField fullWidth label="Nombre" />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField fullWidth label="Apellido" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Correo electrónico" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth type="password" label="Contraseña" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirmar Contraseña"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid item xs={12} sm={12}>
                  <Grid item xs={12} textAlign="left">
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ fontSize: "14px", color: "gray" }}
                    >
                      Fecha de nacimiento
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
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

                    <Grid item xs={4}>
                      <Select fullWidth displayEmpty defaultValue="">
                        <MenuItem value="" disabled>
                          Mes
                        </MenuItem>
                        {[
                          "Enero",
                          "Febrero",
                          "Marzo",
                          "Abril",
                          "Mayo",
                          "Junio",
                          "Julio",
                          "Agosto",
                          "Septiembre",
                          "Octubre",
                          "Noviembre",
                          "Diciembre",
                        ].map((month, index) => (
                          <MenuItem key={index + 1} value={month}>
                            {month}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item xs={4}>
                      <Select fullWidth displayEmpty defaultValue="">
                        <MenuItem value="" disabled>
                          Año
                        </MenuItem>
                        {[...Array(2024 - 1905 + 1).keys()]
                          .map((i) => 1905 + i)
                          .reverse()
                          .map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Nacionalidad" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Número de celular" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Dirección" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Documento de identidad" />
              </Grid>
            </Grid>

            <FormControlLabel
              control={<Checkbox name="terms" color="primary" />}
              label="Yo acepto los Términos y Condiciones"
            />

            <Button fullWidth variant="contained" color="primary" sx={{textTransform :'none'}}>
              Registrarse
            </Button>

            <Typography
              variant="body2"
              sx={{ fontFamily: "Century Gothic", fontSize: "14px" }}
            >
              ¿Ya tienes una cuenta?{" "}
              <a
                href="/login"
                style={{
                  color: "rgba(2, 136, 209, 1)",
                  fontWeight: "bold",
                  fontFamily: "Century Gothic",
                  fontSize: "14px",
                }}
              >
                Iniciar sesión
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateAccount;
