import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
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

const ForgotPassword = () => {
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
            ¿Olvidó su contraseña?
          </Typography>
          <Rectangle18 />
          <Box component="form" noValidate>
            <Grid container spacing={2}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
                textAlign="left"
                paddingLeft={"15px"}
              >
                Introduzca el correo electrónico o número de teléfono asociado a
                tu cuenta para cambiar tu contraseña.
              </Typography>

              <Grid item xs={12}>
                <TextField fullWidth label="Correo electrónico" />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary"
                      sx={{textTransform :'none'} }
                      >
                  Enviar
                </Button>
              </Grid>

              <Grid item xs={12}>
  <Button
    fullWidth
    variant="contained"
    sx={{
        marginTop:'0px',
      backgroundColor: "#fff",
      color: "rgba(2, 136, 209, 1)",
      textTransform: 'none', 
    }}
  >
    Volver
  </Button>
</Grid>


            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
