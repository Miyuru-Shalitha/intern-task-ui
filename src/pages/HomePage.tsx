import styles from "../styles/home-page.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import HomeHeaderBackgroundImage from "../assets/pngs/home-header-background.png";
import WheelImage from "../assets/pngs/wheel.png";
import SteeringWheelImage from "../assets/pngs/steering-wheel.png";
import OxigenTankImage from "../assets/pngs/oxygen-tank.png";
import CarEngineImage from "../assets/pngs/car-engine.png";
import ServiceCard from "../components/ServiceCard";

export default function HomePage() {
  return (
    <Box>
      {/* TODO(Miyuru): Header */}
      <Box
        height={638}
        position="relative"
        overflow="hidden"
      >
        <img
          className={styles.headerBackgroundImage}
          src={HomeHeaderBackgroundImage}
        />

        <Box
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          maxWidth={1440}
        >
          <Stack
            width={610}
            position="absolute"
            right={66}
            top={160.5}
          >
            <Stack gap={20 / 8} mb={40 / 8}>
              <Typography
                fontSize={50}
                color="#FFF"
                fontWeight={600}
                lineHeight={1.2}
                fontFamily="Poppins"
              >
                <span className={styles.headerHeroTitleHighlight}>Precision</span> That <span className={styles.headerHeroTitleHighlight}>Drives</span> <br />Confidence
              </Typography>

              <Typography color="#FFF" fontFamily="Poppins">
                From tire alignment to complete wheel care, Align Ease delivers fast, reliable, and professional services that keep your vehicle running smoothly. Book online, track your service history, and stay informed every step of the way.
              </Typography>
            </Stack>

            <Button
              variant="contained"
              disableElevation
              sx={{
                fontSize: 16,
                bgcolor: "#DB002B",
                alignSelf: "flex-start",
                width: 145,
                fontFamily: "Poppins"
              }}
            >
              Let's Go !
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* TODO(Miyuru):  */}
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
          >
            Your One-Stop Wheel & Tire Service Center
          </Typography>
        </Stack>

        <Stack direction="row" gap={19 / 8}>
          <ServiceCard
            imageUrl={WheelImage}
          >
            Browse a wide range of tire brands, sizes, and models to suit your vehicle. With real-time stock updates, expert recommendations, and easy online ordering, you can schedule installation at your convenience — fast, simple, and reliable.
          </ServiceCard>

          <ServiceCard
            imageUrl={SteeringWheelImage}
          >
            Eliminate vibrations and extend tire life with our precision wheel balancing service. Using industry-grade equipment, we ensure smoother rides, better handling, and improved tire performance.
          </ServiceCard>

          <ServiceCard
            imageUrl={OxigenTankImage}
          >
            Get improved fuel efficiency and tire life with our nitrogen filling service — safer, more stable, and better for performance, especially on long drives and varying road conditions
          </ServiceCard>

          <ServiceCard
            imageUrl={CarEngineImage}
          >
            We offer genuine part replacements for tires, valves, sensors, and more. With transparent pricing and expert installation, we keep your vehicle safe, reliable, and ready for the road
          </ServiceCard>
        </Stack>
      </Stack>
    </Box>
  );
}