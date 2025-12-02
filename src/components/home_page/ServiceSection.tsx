import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import ServiceCard from "./ServiceCard";

import WheelImage from "../../assets/webps/home_page/wheel.webp";
import SteeringWheelImage from "../../assets/webps/home_page/steering_wheel.webp";
import OxigenTankImage from "../../assets/webps/home_page/oxygen_tank.webp";
import CarEngineImage from "../../assets/webps/home_page/car_engine.webp";
import { useContext } from "react";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

export default function ServiceSection() {
  const windowContext = useContext(WindowContext);

  return (
    <Stack alignItems="center">
      <Stack
        alignItems="center"
        pt={52 / 8}
        pb={37 / 8}
      >
        <Typography
          color="#9F9F9F"
          fontFamily="Poppins"
        >
          OUR SERVICES
        </Typography>

        <Typography
          fontFamily="Poppins"
          color="#000"
          fontWeight={600}
          fontSize={25}
          textAlign="center"
        >
          Your One-Stop Wheel & Tire Service Center
        </Typography>
      </Stack>

      <Stack
        direction={windowContext!.windowProps.width > 1400 ? "row" : "column"}
        gap={19 / 8}
      >
        <Stack
          direction={windowContext!.windowProps.width > Breakpoint.Tablet ? "row" : "column"}
          gap={19 / 8}
        >
          <ServiceCard
            imageUrl={WheelImage}
            title="Tire Ordering"
          >
            <Typography
              color="#757575"
              textAlign="center"
            >
              Browse a wide range of tire brands, sizes, and models to suit your vehicle. With real-time stock updates, expert recommendations, and easy online ordering, you can schedule installation at your convenience — fast, simple, and reliable.
            </Typography>
          </ServiceCard>

          <ServiceCard
            imageUrl={SteeringWheelImage}
            title="Wheel Balancing"
          >
            <Typography
              color="#757575"
              textAlign="center"
            >
              Eliminate vibrations and extend tire life with our precision wheel balancing service. Using industry-grade equipment, we ensure smoother rides, better handling, and improved tire performance.
            </Typography>
          </ServiceCard>
        </Stack>

        <Stack
          direction={windowContext!.windowProps.width > Breakpoint.Tablet ? "row" : "column"}
          gap={19 / 8}
        >
          <ServiceCard
            imageUrl={OxigenTankImage}
            title="Nitrogen Filling"
          >
            <Typography
              color="#757575"
              textAlign="center"
            >
              Get improved fuel efficiency and tire life with our nitrogen filling service — safer, more stable, and better for performance, especially on long drives and varying road conditions
            </Typography>
          </ServiceCard>

          <ServiceCard
            imageUrl={CarEngineImage}
            title="Part Replacement"
          >
            <Typography
              color="#757575"
              textAlign="center"
            >
              We offer genuine part replacements for tires, valves, sensors, and more. With transparent pricing and expert installation, we keep your vehicle safe, reliable, and ready for the road
            </Typography>
          </ServiceCard>
        </Stack>
      </Stack>
    </Stack>
  );
}