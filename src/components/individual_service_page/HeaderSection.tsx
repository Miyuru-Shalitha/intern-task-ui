import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { CustomThemeContext } from "../../context/CustomThemeContext";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

export default function HeaderSection({
  imageUrl,
  title,
  description
}: {
  imageUrl: string;
  title: string;
  description: string;
}) {
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
        src={imageUrl}
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
          sx={{
            whiteSpace: "pre-line"
          }}
        >
          {title}
        </Typography>

        <Typography
          fontSize={16}
          fontWeight={500}
          lineHeight={1.3}
          color={customThemeContext!.colors.white}
          maxWidth={629}
          textAlign="center"
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}