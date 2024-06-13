import React, { useState } from "react";
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
// import logo from "../../assets/images1.jpg";
import logo from "../../assets/trc_logo_negro 1.png";

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
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [idDocument, setIdDocument] = useState("");

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    // Solo admite letras y números, no debe estar vacío
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setUsername(value);
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    // Solo admite letras, no números ni caracteres especiales
    if (/^[a-zA-Z ]*$/.test(value)) {
      setName(value);
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    // Solo admite letras, no números ni caracteres especiales
    if (/^[a-zA-Z ]*$/.test(value)) {
      setLastName(value);
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    // Validación básica de formato de correo electrónico
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    // Puedes agregar lógica adicional de validación de contraseña aquí si es necesario
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    // Puedes agregar lógica adicional de validación de confirmación de contraseña aquí si es necesario
    setConfirmPassword(value);
  };

  const handleNationalityChange = (event) => {
    const value = event.target.value;
    // Solo admite letras, no números ni caracteres especiales
    if (/^[a-zA-Z ]*$/.test(value)) {
      setNationality(value);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    // Solo admite números
    if (/^[0-9]*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    // Puedes agregar validación adicional para la dirección si es necesario
    setAddress(value);
  };

  const handleIdDocumentChange = (event) => {
    const value = event.target.value;
    // Solo admite números, no letras ni caracteres especiales
    if (/^[0-9]*$/.test(value)) {
      setIdDocument(value);
    }
  };

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
                <TextField
                  fullWidth
                  label="Nombre de usuario"
                  error={!username}
                  helperText={!username ? "Este campo es obligatorio y debe contener solo letras y números" : ""}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  error={!name}
                  helperText={!name ? "Este campo es obligatorio y debe contener solo letras" : ""}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido"
                  error={!lastName}
                  helperText={!lastName ? "Este campo es obligatorio y debe contener solo letras" : ""}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Correo electrónico"
                  error={!email || !/^\S+@\S+\.\S+$/.test(email)}
                  helperText={!email ? "Este campo es obligatorio" : "Debe ser un correo electrónico válido"}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Contraseña"
                  error={!password}
                  helperText={!password ? "Este campo es obligatorio" : ""}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirmar Contraseña"
                  error={password !== confirmPassword}
                  helperText={
                    password !== confirmPassword
                      ? "Las contraseñas no coinciden"
                      : ""
                  }
                  onChange={handleConfirmPasswordChange}
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
                        {[...Array(2024 - 1905 + 1)
                      .keys()]
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
            <TextField
              fullWidth
              label="Nacionalidad"
              error={!nationality}
              helperText={!nationality ? "Este campo es obligatorio" : ""}
              onChange={handleNationalityChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Número de celular"
              error={!phoneNumber}
              helperText={!phoneNumber ? "Este campo es obligatorio" : ""}
              onChange={handlePhoneNumberChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Dirección"
              error={!address}
              helperText={!address ? "Este campo es obligatorio" : ""}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Documento de identidad"
              error={!idDocument}
              helperText={!idDocument ? "Este campo es obligatorio" : ""}
              onChange={handleIdDocumentChange}
            />
          </Grid>
        </Grid>

        <FormControlLabel
          control={<Checkbox name="terms" color="primary" />}
          label="Yo acepto los Términos y Condiciones"
        />

        <Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'none' }}>
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
