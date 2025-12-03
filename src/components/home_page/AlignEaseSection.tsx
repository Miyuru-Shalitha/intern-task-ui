import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Breakpoint, WindowContext } from "../../context/WindowContext";

import AlignEaseBackgroundImage from "../../assets/webps/home_page/align_ease_background.webp";

export default function AlignEaseSection() {
  const windowContext = useContext(WindowContext);
  
  const getContainerVerticalPadding = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Tablet) {
      return 80 / 8;
    } else if (windowWidth > Breakpoint.MobileLarge) {
      return 40 / 8;
    } else {
      return 26 / 8;
    }
  };

  return (
    <Stack
      mt={70 / 8}
      py={getContainerVerticalPadding(windowContext!.windowProps.width)}
      px={32 / 8}
      bgcolor="#000"
      color="#FFF"
      direction="row"
      justifyContent="center"
    >
      <Box
        flex={1}
        display="flex"
        justifyContent={windowContext!.windowProps.width > 1120 ? "flex-end" : "flex-start"}
      >
        <Stack
          gap={28 / 8}
          maxWidth={windowContext!.windowProps.width > 1120 ? 552 : undefined}
        >
          <Typography
            fontFamily="Poppins"
            fontWeight={600}
            fontSize={30}
            lineHeight={windowContext!.windowProps.width > Breakpoint.MobileLarge ? 1.4 : 1.3}
          >
            Trusted maintenance and diagnostics for smooth, reliable driving every mile.
          </Typography>

          <Typography
            fontFamily="Poppins"
            fontWeight={500}
            textAlign={windowContext!.windowProps.width > Breakpoint.MobileLarge ? "left" : "justify"}
          >
            Reliable care, effortless service, and peace of mind—drive worry-free.Schedule with ease, get expert attention, and keep your vehicle in top shape wherever the road takes you. <br />From routine tune-ups to advanced diagnostics, we deliver quality and convenience that keeps you moving forward confidently.
          </Typography>
        </Stack>
      </Box>

      <Stack
        display={windowContext!.windowProps.width > 1120 ? "flex" : "none"}
        position="relative"
        justifyContent="center"
        flex={1}
        maxWidth={755}
      >
        <img
          style={{
            width: "100%",
            position: "absolute",
            bottom: -59, // NOTE(Miyuru): This is the exact bottom padding of the top most parent element.
          }}
          src={AlignEaseBackgroundImage}
        />
      </Stack>
    </Stack>
  );
}