import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import placeholdImg from "../../assets/img/clases-guitar.jpg";
import productDetail from "./fakeData"; // Importa los datos ficticios

const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "50px 64px",
  position: "absolute",
  width: "100%",
  height: "auto",
  left: 0,
  top: "95px",
  background: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "20px",
    top: "50px",
  },
}));

const ImageSide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2px",
  width: "50%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Detail = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "32px",
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const DetailColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "50%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Design = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
  width: "100%",
  height: "auto",
  background: "#ffffff",
}));

const Rectangle18 = styled(Box)(({ theme }) => ({
  width: "459px",
  height: "2px",
  background: "#a40000",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

const DetailRating = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  gap: "4px",
  height: "20px",
}));

const DetailDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 0 30px",
  gap: "21px",
  width: "100%",
  height: "auto",
}));

const Rectangle18Vertical = styled(Box)(({ theme }) => ({
  width: "2px",
  height: "240px",
  background: "#a40000",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Description = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "21px",
  width: "100%",
  height: "auto",
}));

const DetailDate = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "44px",
}));

const DetailFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "0 185px 20px 0",
  gap: "8px",
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    padding: "0 20px 20px 0",
  },
}));

const DetailFooterPrice = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: "70px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: "auto",
  },
}));

const Frame26Footer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "159px",
  height: "70px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

const DetailFooterPriceChild = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
  width: "481px",
  height: "45px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "flex-start",
  },
}));

const DetailComponent = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <DetailContainer>
      <Detail>
        <ImageSide>
          <Box
            component="img"
            src={placeholdImg}
            alt="picadaImage"
            sx={{
              width: "100%",
              height: isSmDown ? "auto" : "588px",
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />
        </ImageSide>
        <DetailColumn>
          <Design>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Chakra Petch",
                fontWeight: 500,
                fontSize: isSmDown ? "32px" : "48px",
              }}
            >
              {productDetail.title}
            </Typography>
            <Rectangle18 />
          </Design>
          <DetailRating>
            <Typography
              sx={{
                fontFamily: "Century Gothic",
                fontWeight: 400,
                fontSize: isSmDown ? "12px" : "16px",
              }}
            >
              Calificación:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Century Gothic",
                fontWeight: 400,
                fontSize: isSmDown ? "12px" : "16px",
              }}
            >
              {productDetail.rating}/5
            </Typography>
          </DetailRating>
          <DetailDescription>
            <Rectangle18Vertical />
            <Description>
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: isSmDown ? "14px" : "16px",
                }}
              >
                {productDetail.mealTimes}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: isSmDown ? "18px" : "24px",
                }}
              >
                {productDetail.description}
              </Typography>
              <DetailDate>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Century Gothic",
                      fontWeight: 400,
                      fontSize: isSmDown ? "10px" : "12px",
                    }}
                  >
                    Desde:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Century Gothic",
                      fontWeight: 400,
                      fontSize: isSmDown ? "10px" : "12px",
                    }}
                  >
                    Hasta:
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Century Gothic",
                      fontWeight: 700,
                      fontSize: isSmDown ? "10px" : "12px",
                    }}
                  >
                    {productDetail.availableFrom}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Century Gothic",
                      fontWeight: 700,
                      fontSize: isSmDown ? "10px" : "12px",
                    }}
                  >
                    {productDetail.availableTo}
                  </Typography>
                </Box>
              </DetailDate>
            </Description>
          </DetailDescription>
          <DetailFooter>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "4px",
                height: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: isSmDown ? "12px" : "16px",
                }}
              >
                Horario de atención:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: isSmDown ? "12px" : "16px",
                }}
              >
                {productDetail.hours}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Century Gothic",
                fontWeight: 400,
                textAlign: "center",
                fontSize: isSmDown ? "10px" : "12px",
              }}
            >
              {productDetail.restaurant}
            </Typography>
          </DetailFooter>
          <DetailFooterPrice>
            <Frame26Footer>
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 700,
                  fontSize: isSmDown ? "24px" : "32px",
                  lineHeight: "120%",
                }}
              >
                {productDetail.currency}
                {productDetail.price.toLocaleString()}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: isSmDown ? "10px" : "12px",
                  lineHeight: "180%",
                }}
              >
                {productDetail.pricePerPerson}
              </Typography>
            </Frame26Footer>
            <DetailFooterPriceChild>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  left: "0px",
                  width: isSmDown ? "100%" : "109px",
                  height: "45px",
                  borderColor: "blue", // Color del borde para el botón blanco
                  color: "blue", // Color del texto para el botón blanco
                }}
              >
                Comprar
              </Button>

              <Button
                variant="contained"
                sx={{
                  fontSize: "14px",
                  left: "0px",
                  width: isSmDown ? "100%" : "169px",
                  height: "45px",
                  backgroundColor: "#000", // Color de fondo para el botón negro
                  color: "#fff", // Color del texto para el botón negro
                }}
              >
                Agregar al carrito
              </Button>
            </DetailFooterPriceChild>
          </DetailFooterPrice>
        </DetailColumn>
      </Detail>
    </DetailContainer>
  );
};

export default DetailComponent;
