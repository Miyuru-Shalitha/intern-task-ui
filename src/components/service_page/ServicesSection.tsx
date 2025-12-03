import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import ServiceCard from "./ServiceCard";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

import ServiceCardImage1 from "../../assets/webps/service_page/service_card_1_background.webp";
import ServiceCardImage2 from "../../assets/webps/service_page/service_card_2_background.webp";
import ServiceCardImage3 from "../../assets/webps/service_page/service_card_3_background.webp";
import ServiceCardImage4 from "../../assets/webps/service_page/service_card_4_background.webp";
import ServiceCardImage5 from "../../assets/webps/service_page/service_card_5_background.webp";

export default function ServiceSection() {
  const windowContext = useContext(WindowContext);
  
  const getInnerContainerVerticalPadding = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Tablet) {
      return 94 / 8;
    } else if (windowWidth > Breakpoint.MobileLarge) {
      return 60 / 8;
    } else {
      return 40 / 8;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Stack
        flex={1}
        maxWidth={1440}
        py={getInnerContainerVerticalPadding(windowContext!.windowProps.width)}
        px={32 / 8}
        gap={40 / 8}
      >
        <Typography
          fontSize={30}
          fontWeight={600}
          lineHeight={1}
        >
          Services
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={windowContext!.windowProps.width > 835 ? 48 / 8 : 28 / 8}
        >
          <ServiceCard
            title="Tire Ordering"
            imageUrl={ServiceCardImage1}
          />

          <ServiceCard
            title="Wheel Balancing"
            imageUrl={ServiceCardImage2}
          />

          <ServiceCard
            title="Nitrogen Filling"
            imageUrl={ServiceCardImage3}
          />

          <ServiceCard
            title="Tire patching and vulcanizing"
            imageUrl={ServiceCardImage4}
          />

          <ServiceCard
            title="Parts Replacement"
            imageUrl={ServiceCardImage5}
          />
        </Stack>
      </Stack>
    </Box>
  );
}