import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { CustomThemeContext } from "../../context/CustomThemeContext";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

// TODO(Miyuru): Convert this to webp and import that instead.
import HeaderImage from "../../../../Temporary/Group 14.png";

export default function HeaderSection() {
  const customThemeContext = useContext(CustomThemeContext);
  const windowContext = useContext(WindowContext);

  const getHeroFontSize = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Laptop) {
      return 60;
    } else if (windowWidth > Breakpoint.Tablet) {
      return 50;
    } else {
      return 40;
    }
  };
  
  const getHeroOffsetFromTop = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Tablet) {
      return 168;
    } else if (windowWidth > Breakpoint.MobileLarge) {
      return 140;
    } else {
      return 100;
    }
  };

  return (
    <Box
      height={438}
      position="relative"
    >
      <img
        src={HeaderImage}
        width="100%"
        height="100%"
        style={{
          objectFit: "cover"
        }}
      />

      <Stack
        alignItems="center"
        gap={13 / 8}
        width="100%"
        px={windowContext!.windowProps.width > 620 ? 0 : 32 / 8}
        position="absolute"
        left="50%"
        top={getHeroOffsetFromTop(windowContext!.windowProps.width)}
        sx={{
          transform: "translateX(-50%)"
        }}
      >
        <Typography
          fontSize={getHeroFontSize(windowContext!.windowProps.width)}
          fontWeight={600}
          lineHeight={1}
          textAlign="center"
          color={customThemeContext!.colors.white}
        >
          OUR SERVICES &<br /> PRODUCTS
        </Typography>

        <Typography
          fontSize={16}
          fontWeight={500}
          lineHeight={1.3}
          color={customThemeContext!.colors.white}
          maxWidth={629}
          textAlign="center"
        >
          Reliable care, effortless service, and peace of mind—drive worry-free.Schedule with ease, get expert attention, and keep your vehicle in top shape wherever the road takes
        </Typography>
      </Stack>
    </Box>
  );
}