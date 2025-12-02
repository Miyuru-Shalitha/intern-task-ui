import { Box, Stack, Typography } from "@mui/material";

import AlignEaseBackgroundImage from "../../assets/webps/home_page/align_ease_background.webp";
import { useContext } from "react";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

export default function AlignEaseSection() {
  const windowContext = useContext(WindowContext);

  return (
    <Stack
      mt={172 / 8}
      pt={79 / 8}
      pb={59 / 8}
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
          >
            Trusted maintenance and diagnostics for smooth, reliable driving every mile.
          </Typography>

          <Typography
            fontFamily="Poppins"
            fontWeight={500}
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