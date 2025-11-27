import { Box, Stack, Typography } from "@mui/material";

import WhoWeAreIcon from "./WhoWeAreIcon";

import ReparingCarImage from "../../assets/webps/home_page/repairing_car.webp";
import DamperImage from "../../assets/svgs/home_page/damper.svg";
import BrakeImage from "../../assets/svgs/home_page/brake.svg";
import CarRepairImage from "../../assets/svgs/home_page/car_repair.svg";
import RepairShopImage from "../../assets/svgs/home_page/repair_shop.svg";
import FrontCarImage from "../../assets/svgs/home_page/front_car.svg";

export default function WhoWeAreSection() {
  return (
    <Stack
      pt={133 / 8}
      alignItems="center"
    >
      <Stack
        direction="row"
        maxWidth={1440}>
        <Box flex={1}>
          <img
            width={668}
            src={ReparingCarImage}
          />
        </Box>

        <Stack pl={33 / 8} flex={1}>
          <Typography
            color="#9F9F9F"
            fontSize={14}
            fontWeight={600}
            fontFamily="Poppins"
          >
            WHO WE ARE
          </Typography>

          <Typography
            fontSize={25}
            fontWeight={600}
            fontFamily="Poppins"
          >
            Dedicated to Keeping You on the Road
          </Typography>

          <Typography
            mt={18 / 8}
            color="#757575"
            fontFamily="Poppins"
            fontWeight={500}
          >
            At Align Ease, we combine years of mechanical expertise with digital convenience. Our web-based platform lets customers book services, track maintenance, and get real-time notifications — all in one place. With a focus on customer satisfaction, we deliver transparency, efficiency, and peace of mind
          </Typography>

          <Typography
            mt={12 / 8}
            color="#757575"
            fontFamily="Poppins"
            fontWeight={500}
          >
            Whether you need tire ordering, wheel balancing, nitrogen filling, or part replacement, Align Ease ensures every service is handled with precision and care. Our intuitive system empowers customers with real-time access to service updates, personalized recommendations, and a complete history of their vehicle maintenance
          </Typography>

          <Stack
            direction="row"
            gap={31 / 8}
            justifyContent="center"
            mt={25 / 8}
          >
            <WhoWeAreIcon imageUrl={DamperImage} />
            <WhoWeAreIcon imageUrl={BrakeImage} />
            <WhoWeAreIcon imageUrl={CarRepairImage} />
            <WhoWeAreIcon imageUrl={RepairShopImage} />
            <WhoWeAreIcon imageUrl={FrontCarImage} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}