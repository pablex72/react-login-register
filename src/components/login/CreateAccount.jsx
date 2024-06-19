import React, { useEffect, useState } from "react";
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

const CreateAccount = () => {
  const [isApproved, setIsApproved] = useState(false);
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
  //variables de form
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [idDocument, setIdDocument] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [bornError, setBornError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [inputForm, setInputForm] = useState({
    userName: userName,
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    nationality: nationality,
    phoneNumber: phoneNumber,
    address: address,
    idDocument: idDocument,
  });
  ////////////////////////
  // Funcion para validar todos los campos
  const validateForm = () => {
    return (
      userName.trim() !== "" && validateUserName(userName) &&
      name.trim() !== "" && validateName(name) &&
      lastName.trim() !== "" && validateLastName(lastName) &&
      email.trim() !== "" && validateEmail(email) &&
      password.trim() !== "" && validatePassword(password) &&
      confirmPassword.trim() !== "" && password === confirmPassword &&
      nationality.trim() !== "" && validateNationality(nationality) &&
      phoneNumber.trim() !== "" && validatePhoneNumber(phoneNumber) &&
      address.trim() !== "" && validateAddress(address) &&
      idDocument.trim() !== "" && validateIdDocument(idDocument) &&
      day.toString().trim() !== "" &&
      month.toString().trim() !== "" &&
      year.toString().trim() !== "" &&
      termsAccepted
    );
  };

  // useEffect para actualizar el estado de isApproved basado en la validacion
  useEffect(() => {
    setInputForm({
      userName,
      name,
      lastName,
      email,
      password,
      confirmPassword,
      nationality,
      phoneNumber,
      address,
      idDocument,
      birthDate: handleBornChange(), // Agregar fecha de nacimiento al formulario
    });

    if (validateForm()) {
      setIsApproved(true);
    } else {
      setIsApproved(false);
      //   console.log("Todos los campos son obligatorios llenar");
    }
  }, [
    userName,
    name,
    lastName,
    email,
    password,
    confirmPassword,
    nationality,
    phoneNumber,
    address,
    idDocument,
    day,
    month,
    year,
    termsAccepted,
  ]);

  // Manejadores de cambios individuales para cada campo
  const handleUserNameChange = (event) => {
    const { value } = event.target;
    setUserName(value);

    if (value === "" || !validateUserName(value)) {
      setIsUserNameInputValid(false);
      setUserNameInputErrorText(
        value === ""
          ? "El nombre de usuario es obligatorio"
          : "Nombre de usuario solo debería contener valores alfanuméricos"
      );
    } else {
      setIsUserNameInputValid(true);
      setUserNameInputErrorText("");
    }

    // Actualizar isApproved basado en la validación
    setIsApproved(validateForm());
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);

    if (value === "") {
      setIsNameInputValid(false);
      setNameInputErrorText("El nombre es obligatorio");
    } else if (validateName(value)) {
      setIsNameInputValid(true);
      setNameInputErrorText("");
    } else {
      setIsNameInputValid(false);
      setNameInputErrorText("Introduzca un Nombre real");
    }

    // Actualizar isApproved basado en la validación
    setIsApproved(validateForm());
  };

  // Manejadores de cambios para otros campos seguirían el mismo patrón...
  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
    if (value === "") {
      setIsLastNameInputValid(false);
      setLastNameInputErrorText("El Apellido es Obligatorio");
      setIsApproved(false);
    } else if (validateLastName(value)) {
      setIsLastNameInputValid(true);
      setLastNameInputErrorText("");
      setIsApproved(true);
    } else {
      setIsLastNameInputValid(false);
      setLastNameInputErrorText("Introduzca un Apellido real");
      setIsApproved(false);
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (value === "") {
      setIsEmailInputValid(false);
      setEmailInputErrorText("El correo es obligatorio");
      setIsApproved(false);
    } else if (validateEmail(value)) {
      setIsEmailInputValid(true);
      setEmailInputErrorText("");
      setIsApproved(true);
    } else {
      setIsEmailInputValid(false);
      setEmailInputErrorText("Correo electrónico no es válido");
      setIsApproved(false);
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    if (value === "") {
      setIsPasswordInputValid(false);
      setPasswordInputErrorText("La Contraseña es obligatoria");
      setIsApproved(false);
    } else if (validatePassword(value)) {
      setIsPasswordInputValid(true);
      setPasswordInputErrorText("");
      setIsApproved(true);
    } else {
      setIsPasswordInputValid(false);
      setPasswordInputErrorText(
        "Las contraseñas deben tener 8 caracteres como mínimo y contener al menos mayúsculas, minúsculas, números y símbolos."
      );
      setIsApproved(false);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsApproved(true);
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

  //   Born date

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // Funcion para manejar los cambios de fecha de nacimiento
  const handleBornChange = () => {
    if (day && month && year) {
      setBornError("");
      //   return `${day}-${month}-${year}`;
      return `${day.toString().padStart(2, "0")}-${month
        .toString()
        .padStart(2, "0")}-${year}`;
    }
    else if (day ===""&& month==="" && year===""){
        setBornError("");
    }
    else {
      setBornError("La fecha de nacimiento es obligatoria");
      return "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //To view the details of output
    console.log(inputForm);
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
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\;:'",.<>/?`~])[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:'",.<>/?`~]{8,}$/;

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
    const addressRegex = /^[a-zA-Z0-9+\- ]*$/;
    return addressRegex.test(address);
  };
  const validateIdDocument = (idDocument) => {
    const idDocumentRegex = /^[0-9]*$/;
    return idDocumentRegex.test(idDocument);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{paddingBottom:"50px", paddingTop:"20px"}}>
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}> 
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
            Crea tu cuenta
          </Typography>

          <Rectangle18 />
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Nombre de usuario"
                  error={!isUserNameInputValid}
                  helperText={userNameInputErrorText}
                  onChange={handleUserNameChange}
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
                      <Select
                        fullWidth
                        displayEmpty
                        value={day}
                        onChange={handleDayChange}
                      >
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
                      <Select
                        fullWidth
                        displayEmpty
                        value={month}
                        onChange={handleMonthChange}
                      >
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
                      <Select
                        fullWidth
                        displayEmpty
                        value={year}
                        onChange={handleYearChange}
                      >
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
                  {bornError && (
                    <Typography color="error" variant="caption">
                      {bornError}
                    </Typography>
                  )}
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
              control={
                <Checkbox
                  name="terms"
                  color="primary"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              }
              label="Yo acepto los Términos y Condiciones"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
              type="submit"
              disabled={!isApproved}
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
