import { useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { CustomThemeContext } from "../../context/CustomThemeContext";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

export default function ProductCard({
  imageUrl,
  title,
  description,
  quantity,
  price
}: {
  imageUrl: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
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

  return (
    <Box
      maxWidth={getContainerMaxWidth(windowContext!.windowProps.width)}
      borderRadius={20 / 8}
      overflow="hidden"
      bgcolor="#F3F3F3"
    >
      <img
        src={imageUrl}
        width="100%"
      />

      <Stack
        px={14 / 8}
        pb={14 / 8}
        gap={8 / 8}
      >
        <Typography
          fontSize={20}
          fontWeight={600}
        >
          {title}
        </Typography>

        <Typography
          color="#757575"
          fontSize={14}
          fontWeight={500}
          lineHeight={1.3}
        >
          {description}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            justifyContent="center"
          >
            <Typography
              color="#757575"
              fontSize={14}
              fontWeight={500}
            >
              Qty:
            </Typography>

            <Typography
              color="#757575"
              fontSize={14}
              fontWeight={500}
            >
              <span>-</span>
              <span>{quantity}</span>
              <span>+</span>
            </Typography>
          </Stack>

          <Typography
            fontSize={14}
            fontWeight={500}
          >
            LKR {price}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          disableElevation
          sx={{
            bgcolor: customThemeContext!.colors.secondary,
            borderRadius: 5 / 8
          }}
        >
          Buy Now
        </Button>
      </Stack>
    </Box>
  );
}