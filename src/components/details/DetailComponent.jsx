import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import WhiteButton from "../buttons/buttonWhite";
import BlackButton from "../buttons/buttonBlack";
import placeholdImg from "../../assets/img/placehold_img.png";
import fakeData from "./fakeData"; // Importando los datos falsos

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
              {fakeData.picadaName} {/* Utilizando el nombre de la picada desde los datos falsos */}
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
              {fakeData.rating} {/* Utilizando la calificación desde los datos falsos */}
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
                {fakeData.description} {/* Utilizando la descripción desde los datos falsos */}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Century Gothic",
                  fontWeight: 400,
                  fontSize: isSmDown ? "18px" : "24px",
                }}
              >
                {fakeData.details} {/* Utilizando los detalles desde los datos falsos */}
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
                    {fakeData.startDate} {/* Utilizando la fecha de inicio desde los datos falsos */}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Century Gothic",
                      fontWeight: 700,
                      fontSize: isSmDown ? "10px" : "12px",
                    }}
                  >
                    {fakeData.endDate} {/* Utilizando la fecha de fin desde los datos falsos */}
                  </Typography>
                </Box>
              </DetailDate>
            </Description>
          </DetailDescription>
          {/* Resto del componente */}
        </DetailColumn>
      </Detail>
    </DetailContainer>
  );
};

export default DetailComponent;
