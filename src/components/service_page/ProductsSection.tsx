import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Breakpoint, WindowContext } from "../../context/WindowContext";
import ProductCard from "./ProductCard";

import prodct1Image1 from "../../assets/webps/service_page/product_1.webp";
import prodct1Image2 from "../../assets/webps/service_page/product_2.webp";
import prodct1Image3 from "../../assets/webps/service_page/product_3.webp";
import prodct1Image4 from "../../assets/webps/service_page/product_4.webp";
import prodct1Image5 from "../../assets/webps/service_page/product_5.webp";
import prodct1Image6 from "../../assets/webps/service_page/product_6.webp";

export default function ProductSection() {
  const windowContext = useContext(WindowContext);

  const getInnerContainerVerticalPadding = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Tablet) {
      return 94 / 8;
    } else if (windowWidth > Breakpoint.MobileLarge) {
      return 40 / 8;
    } else {
      return 20 / 8;
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
          Products
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={windowContext!.windowProps.width > 835 ? 48 / 8 : 28 / 8}
        >
          <ProductCard
            imageUrl={prodct1Image1}
            title="PNEU XP Street Grip"
            description="Perfect for urban driving. Delivers excellent wet handling and low road noise."
            quantity={1}
            price={30000}
          />

          <ProductCard
            imageUrl={prodct1Image2}
            title="Bridgestone Dueler A/T"
            description="All-terrain toughness meets on-road comfort. Built for SUVs and pickups."
            quantity={1}
            price={30000}
          />

          <ProductCard
            imageUrl={prodct1Image3}
            title="Desert Rider Series"
            description="Designed for hot, sandy environments. Exceptional durability and traction."
            quantity={1}
            price={30000}
          />

          <ProductCard
            imageUrl={prodct1Image4}
            title="NextGen Eco Tread"
            description="Long-lasting performance with precision handling. Ideal for everyday travel."
            quantity={1}
            price={30000}
          />

          <ProductCard
            imageUrl={prodct1Image5}
            title="Performance Pro Sport"
            description="High-speed stability with advanced cornering control. For performance vehicles."
            quantity={1}
            price={30000}
          />

          <ProductCard
            imageUrl={prodct1Image6}
            title="PNEU XP Silent Drive"
            description="Enjoy a smooth, quiet ride. Engineered for reduced road noise and vibration."
            quantity={1}
            price={30000}
          />
        </Stack>
      </Stack>
    </Box>
  );
}