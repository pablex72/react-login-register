import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
// import logo from "../../assets/trc_logo_negro 1.png";
import logo from "../../assets/images1.jpg";

import { styled } from "@mui/system";

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
            borderColor: "gray",
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [inputErrorText, setInputErrorText] = useState("");

  const [inputLogin, setInputLogin] = useState({
    email: email,
    password: password,
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (value === "" || validateEmail(value)) {
      setIsInputValid(true);
      setInputErrorText("");
    } else {
      setIsInputValid(false);
      setInputErrorText("Correo electrónico no es válido");
    }
    setInputLogin((prevInputLogin) => ({
        ...prevInputLogin,
        email:value
    }))
  };
  const handleInputPasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setInputLogin((prevInputLogin) => ({
        ...prevInputLogin,
        password: value,
      }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email === "" && password === "") {
      setIsInputValid(false);
      setInputErrorText("Complete ambos campos");
    } else if (!validateEmail(email)) {
      setIsInputValid(false);
      setInputErrorText("Correo electrónico no es válido");
    } else {
      setIsInputValid(true);
      setInputErrorText("");
      console.log(inputLogin);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box>
          <img
            src={logo}
            alt="TRC Logo"
            style={{ width: "150px", marginBottom: "20px" }}
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
            Bienvenido
          </Typography>
          <Rectangle18 />
          <Box component="form" noValidate onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Correo electrónico"
                  error={!isInputValid}
                  helperText={inputErrorText}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Contraseña"
                  onChange={handleInputPasswordChange}
                />
              </Grid>
              <Grid item xs={12} textAlign="left">
                <a
                  href="/login"
                  style={{
                    color: "rgba(2, 136, 209, 1)",
                    fontWeight: "bold",
                    fontFamily: "Century Gothic",
                    fontSize: "14px",
                  }}
                >
                  ¿Olvidó su contraseña?
                </a>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none", marginTop: 0 }}
                  type="submit"
                >
                  Iniciar sesión
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Century Gothic", fontSize: "14px" }}
                >
                  ¿No tienes una cuenta?{" "}
                  <a
                    href="/login"
                    style={{
                      color: "rgba(2, 136, 209, 1)",
                      fontWeight: "bold",
                      fontFamily: "Century Gothic",
                      fontSize: "14px",
                    }}
                  >
                    Regístrate
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
