import { Box, Stack, Typography } from "@mui/material";

import ProductCard from "./ProductCard";

// TODO(Miyuru): Convert these to webp and import those instead.
import prodct1Image1 from "../../../../Temporary/product_1.png";
import prodct1Image2 from "../../../../Temporary/product_2.png";
import prodct1Image3 from "../../../../Temporary/product_3.png";
import prodct1Image4 from "../../../../Temporary/product_4.png";
import prodct1Image5 from "../../../../Temporary/product_5.png";
import prodct1Image6 from "../../../../Temporary/product_6.png";

export default function ProductSection() {
  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Stack
        flex={1}
        maxWidth={1440}
        py={94 / 8}
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
          gap={48 / 8}
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