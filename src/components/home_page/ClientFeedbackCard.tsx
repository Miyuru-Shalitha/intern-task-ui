import { Box, Stack, Typography } from "@mui/material";

import StarActiveIcon from "../../assets/svgs/home_page/star_active.svg";
import StarInActiveIcon from "../../assets/svgs/home_page/star_inactive.svg";

export default function ClientFeedbackCard({
  imageUrl,
  ratings,
  description
}: {
  imageUrl: string;
  ratings: number;
  description: string;
}) {
  return (
    <Stack width={354}>
      <Box position="relative">
        <img
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            left: 17,
            bottom: -40
          }}
          src={imageUrl}
        />
      </Box>

      <Stack
        bgcolor="#F2F2F2"
        pt={22 / 8}
        pr={17 / 8}
        pb={46 / 8}
        pl={28 / 8}
        borderRadius={5 / 8}
      >
        <Stack
          direction="row"
          alignSelf="flex-end"
          pb={20 / 8}
          gap={5 / 8}
        >
          {Array.from({ length: ratings }).map((_, index) => (
            <img
              key={index}
              style={{
                width: 29,
                height: 29
              }}
              src={StarActiveIcon}
            />
          ))}
          {Array.from({ length: 5 - ratings }).map((_, index) => (
            <img
              key={index}
              style={{
                width: 29,
                height: 29
              }}
              src={StarInActiveIcon}
            />
          ))}
        </Stack>

        <Typography
          fontFamily="Poppins"
          fontSize={10}
          fontWeight={500}
          color="#757575"
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}