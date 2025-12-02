import { useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { Breakpoint, WindowContext } from "../../context/WindowContext";
import { CustomThemeContext } from "../../context/CustomThemeContext";

import HomeHeaderBackgroundImage from "../../assets/webps/home_page/header_background.webp";

export default function HeaderSection() {
  const windowContext = useContext(WindowContext);
  const customThemeContext = useContext(CustomThemeContext);

  return (
    <Box
      height={638}
      position="relative"
      overflow="hidden"
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
        src={HomeHeaderBackgroundImage}
      />

      <Box
        width="100%"
        height="100%"
        position="absolute"
        left="50%"
        top={0}
        maxWidth={1440}
        sx={{
          transform: "translateX(-50%)"
        }}
      >
        <Stack
          width={windowContext!.windowProps.width > Breakpoint.Tablet ? 610 : "100%"}
          position="absolute"
          right={windowContext!.windowProps.width > Breakpoint.Tablet ? 66 : 0}
          top="50%"
          textAlign={windowContext!.windowProps.width > Breakpoint.Tablet ? "start" : "center"}
          sx={{
            transform: "translateY(-50%)"
          }}
        >
          <Stack
            gap={20 / 8}
            mb={40 / 8}
            px={windowContext!.windowProps.width > Breakpoint.Tablet ? 0 : 16 / 8}
          >
            <Typography
              fontSize={windowContext!.windowProps.width > Breakpoint.Tablet ? 50 : 40}
              color="#FFF"
              fontWeight={600}
              lineHeight={1.2}
            >
              <span style={{
                color: "red"
              }}>Precision</span> That <span style={{
                color: "red"
              }}>Drives</span> <br />Confidence
            </Typography>

            <Typography
              color="#FFF"
              fontFamily="Poppins"
            >
              From tire alignment to complete wheel care, Align Ease delivers fast, reliable, and professional services that keep your vehicle running smoothly. Book online, track your service history, and stay informed every step of the way.
            </Typography>
          </Stack>

          <Button
            variant="contained"
            disableElevation
            sx={{
              fontSize: 16,
              bgcolor: customThemeContext!.colors.secondary,
              alignSelf: windowContext!.windowProps.width > Breakpoint.Tablet ? "flex-start" : "center",
              width: 145,
              fontFamily: "Poppins"
            }}
          >
            Let's Go !
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}