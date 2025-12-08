import { useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { CustomThemeContext } from "../../context/CustomThemeContext";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

export default function ServiceCard({
  title,
  imageUrl,
  href
}: {
  title: string;
  imageUrl: string;
  href: string;
}) {
  const customThemeContext = useContext(CustomThemeContext);
  const windowContext = useContext(WindowContext);

  const getContainerMaxWidth = (windowWidth: number): number => {
    if (windowWidth > 835) {
      return 360;
    } else {
      return 300;
    }
  };

  const getContainerHeight = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Tablet) {
      return 396;
    } else if (windowWidth > Breakpoint.MobileLarge) {
      return 300;
    } else {
      return 220;
    }
  };

  return (
    <Box
      maxWidth={getContainerMaxWidth(windowContext!.windowProps.width)}
      width="100%"
      height={getContainerHeight(windowContext!.windowProps.width)}
      borderRadius={20 / 8}
      position="relative"
      overflow="hidden"
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
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        gap={20 / 8}
        px={12 / 8}
        pb={21 / 8}
      >
        <Typography
          color={customThemeContext!.colors.white}
          fontWeight={600}
          fontSize={25}
          textAlign="center"
        >
          {title}
        </Typography>

        <Button
          href={href}
          variant="contained"
          disableElevation
          fullWidth
          sx={{
            bgcolor: customThemeContext!.colors.secondary,
          }}
        >
          View Details
        </Button>
      </Stack>
    </Box>
  );
}