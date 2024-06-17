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
  //   validations states
  const [isUserNameInputValid, setIsUserNameInputValid] = useState(true);
  const [isNameInputValid, setIsNameInputValid] = useState(true);
  const [isLastNameInputValid, setIsLastNameInputValid] = useState(true);
  const [isEmailInputValid, setIsEmailInputValid] = useState(true);
  const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
  const [isNationalityInputValid, setIsNationalityInputValid] = useState(true);
  const [isPhoneNumberInputValid, setIsPhoneNumberInputValid] = useState(true);
  const [isAddressInputValid, setIsAddressInputValid] = useState(true);
  const [isIdDocumentInputValid, setIsIdDocumentInputValid] = useState(true);

  //   input errors messages
  const [userNameInputErrorText, setUserNameInputErrorText] = useState("");
  const [nameInputErrorText, setNameInputErrorText] = useState("");
  const [lastNameInputErrorText, setLastNameInputErrorText] = useState("");
  const [emailInputErrorText, setEmailInputErrorText] = useState("");
  const [passwordInputErrorText, setPasswordInputErrorText] = useState("");
  const [nationalityInputErrorText, setNationalityInputErrorText] =
    useState("");
  const [phoneNumberInputErrorText, setPhoneNumberInputErrorText] =
    useState("");
  const [addressInputErrorText, setAddressInputErrorText] = useState("");
  const [idDocumentInputErrorText, setIdDocumentInputErrorText] = useState("");

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
    const { value } = event.target;
    setUsername(value);
    if (value === "" || validateUserName(value)) {
      setIsUserNameInputValid(true);
      setUserNameInputErrorText("");
    } else {
      setIsUserNameInputValid(false);
      setUserNameInputErrorText(
        "Nombre de usuario solo debería contener valores alfanuméricos"
      );
    }
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    if (value === "" || validateName(value)) {
      setIsNameInputValid(true);
      setNameInputErrorText("");
    } else {
      setIsNameInputValid(false);
      setNameInputErrorText("Introduzca un Nombre real");
    }
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
    if (value === "" || validateLastName(value)) {
      setIsLastNameInputValid(true);
      setLastNameInputErrorText("");
    } else {
      setIsLastNameInputValid(false);
      setLastNameInputErrorText("Introduzca un Apellido real");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (value === "" || validateEmail(value)) {
      setIsEmailInputValid(true);
      setEmailInputErrorText("");
    } else {
      setIsEmailInputValid(false);
      setEmailInputErrorText("Correo electrónico no es válido");
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    if (value === "" || validatePassword(value)) {
      setIsPasswordInputValid(true);
      setPasswordInputErrorText("");
    } else {
      setIsPasswordInputValid(false);
      setPasswordInputErrorText("Introduzca un mejor password");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleNationalityChange = (event) => {
    const { value } = event.target;
    setNationality(value);

    if (value === "" || validateNationality(value)) {
      setIsNationalityInputValid(true);
      setNationalityInputErrorText("");
    } else {
      setIsNationalityInputValid(false);
      setNationalityInputErrorText("Introduzca una Nacionalidad real");
    }
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
    if (value === "" || validatePhoneNumber(value)) {
      setIsPhoneNumberInputValid(true);
      setPhoneNumberInputErrorText("");
    } else {
      setIsPhoneNumberInputValid(false);
      setPhoneNumberInputErrorText("Introduzca uno válido");
    }
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    setAddress(value);
    if (value === "" || validateAddress(value)) {
      setIsAddressInputValid(true);
      setAddressInputErrorText("");
    } else {
      setIsAddressInputValid(false);
      setAddressInputErrorText("Introduce dirección real");
    }
  };

  const handleIdDocumentChange = (event) => {
    const { value } = event.target;
    setIdDocument(value);
    if (value === "" || validateIdDocument(value)) {
      setIsIdDocumentInputValid(true);
      setIdDocumentInputErrorText("");
    } else {
      setIsIdDocumentInputValid(false);
      setIdDocumentInputErrorText("Introduzca uno correcto");
    }
  };

  //   validating entries
  const validateUserName = (username) => {
    // no signos
    const userNameRegex = /^[a-zA-Z0-9]*$/;
    return userNameRegex.test(username);
  };
  const validateName = (name) => {
    // Solo admite letras, no números ni caracteres especiales
    const nameRegex = /^[a-zA-Z ]*$/;
    return nameRegex.test(name);
  };
  const validateLastName = (lastName) => {
    const lastNameRegex = /^[a-zA-Z ]*$/;
    return lastNameRegex.test(lastName);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]*$/;
    return passwordRegex.test(password);
  };
  const validateNationality = (nationality) => {
    const nationalityRegex = /^[a-zA-Z]*$/;
    return nationalityRegex.test(nationality);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]*$/;
    return phoneNumberRegex.test(phoneNumber);
  };
  const validateAddress = (address) => {
    const addressRegex = /^[a-zA-Z0-9]*$/;
    return addressRegex.test(address);
  };
  const validateIdDocument = (idDocument) => {
    const idDocumentRegex = /^[0-9]*$/;
    return idDocumentRegex.test(idDocument);
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
                  error={!isUserNameInputValid}
                  helperText={userNameInputErrorText}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  error={!isNameInputValid}
                  helperText={nameInputErrorText}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido"
                  error={!isLastNameInputValid}
                  helperText={lastNameInputErrorText}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Correo electrónico"
                  error={!isEmailInputValid}
                  helperText={emailInputErrorText}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Contraseña"
                  error={!isPasswordInputValid}
                  helperText={passwordInputErrorText}
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
                <TextField
                  fullWidth
                  label="Nacionalidad"
                  error={!isNationalityInputValid}
                  helperText={nationalityInputErrorText}
                  onChange={handleNationalityChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Número de celular"
                  error={!isPhoneNumberInputValid}
                  helperText={phoneNumberInputErrorText}
                  onChange={handlePhoneNumberChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Dirección"
                  error={!isAddressInputValid}
                  helperText={addressInputErrorText}
                  onChange={handleAddressChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Documento de identidad"
                  error={!isIdDocumentInputValid}
                  helperText={idDocumentInputErrorText}
                  onChange={handleIdDocumentChange}
                />
              </Grid>
            </Grid>

            <FormControlLabel
              control={<Checkbox name="terms" color="primary" />}
              label="Yo acepto los Términos y Condiciones"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
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
