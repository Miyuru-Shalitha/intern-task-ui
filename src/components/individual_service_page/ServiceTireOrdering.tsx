import { Stack } from "@mui/material"
import { useContext } from "react";

import { WindowContext } from "../../context/WindowContext";
import ProductCard from "../service_page/ProductCard";

// TODO(Miyuru): Since these images will fetch from the backend I imported some 
//               images from service page.
import prodct1Image1 from "../../assets/webps/service_page/product_1.webp";
import prodct1Image2 from "../../assets/webps/service_page/product_2.webp";
import prodct1Image3 from "../../assets/webps/service_page/product_3.webp";
import prodct1Image4 from "../../assets/webps/service_page/product_4.webp";
import prodct1Image5 from "../../assets/webps/service_page/product_5.webp";
import prodct1Image6 from "../../assets/webps/service_page/product_6.webp";
import productImage7 from "../../assets/webps/individual_service_page/product_7.webp";
import productImage8 from "../../assets/webps/individual_service_page/product_8.webp";
import productImage9 from "../../assets/webps/individual_service_page/product_9.webp";

export default function ServiceTireOrdering() {
  const windowContext = useContext(WindowContext);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={windowContext!.windowProps.width > 835 ? 48 / 8 : 28 / 8}
      py={78 / 8}
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

      <ProductCard
        imageUrl={productImage7}
        title="NextGen Eco Tread"
        description="Long-lasting performance with precision handling. Ideal for everyday travel."
        quantity={1}
        price={30000}
      />

      <ProductCard
        imageUrl={productImage8}
        title="Performance Pro Sport"
        description="High-speed stability with advanced cornering control. For performance vehicles."
        quantity={1}
        price={30000}
      />

      <ProductCard
        imageUrl={productImage9}
        title="PNEU XP Silent Drive"
        description="Enjoy a smooth, quiet ride. Engineered for reduced road noise and vibration."
        quantity={1}
        price={30000}
      />
    </Stack>
  );
}
