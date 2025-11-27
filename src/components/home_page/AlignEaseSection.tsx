import { Box, Stack, Typography } from "@mui/material";

import AlignEaseBackgroundImage from "../../assets/webps/home_page/align_ease_background.webp";

export default function AlignEaseSection() {
  return (
    <Stack
      mt={172 / 8}
      bgcolor="#000"
      color="#FFF"
      direction="row"
      justifyContent="center"
      pt={79 / 8}
      pb={59 / 8}
    >
      <Box
        flex={1}
        display="flex"
        justifyContent="flex-end"
      >
        <Stack
          gap={28 / 8}
          maxWidth={552}
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
        position="relative"
        justifyContent="center"
        flex={1}
      >
        <img
          style={{
            width: 755,
            position: "absolute",
            bottom: -59, // NOTE(Miyuru): This is the exact bottom padding of the top most parent element.
          }}
          src={AlignEaseBackgroundImage}
        />
      </Stack>
    </Stack>
  );
}