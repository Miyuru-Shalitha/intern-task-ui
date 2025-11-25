import styles from "../styles/home-page.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import HomeHeaderBackgroundImage from "../assets/pngs/home-header-background.png";
import WheelImage from "../assets/pngs/wheel.png";
import SteeringWheelImage from "../assets/pngs/steering-wheel.png";
import OxigenTankImage from "../assets/pngs/oxygen-tank.png";
import CarEngineImage from "../assets/pngs/car-engine.png";
import ServiceCard from "../components/ServiceCard";
import CarRepairImage from "../assets/pngs/car-repair-image.png";
import DamperImage from "../assets/pngs/damper.png";
import BrakeImage from "../assets/pngs/brake.png";
import CarRepairImage1 from "../assets/pngs/car-repair (1).png";
import RepairShopImage from "../assets/pngs/repair-shop.png";
import FrontCarImage from "../assets/pngs/front-car.png";
import WhoWeAreIcon from "../components/WhoWeAreIcon";
import AlignEaseImage from "../assets/pngs/align-ease.png";
import ForgroundManImage from "../assets/pngs/sign-in-forground.png"; // TODO(Miyuru): Rename this png for more genaralized usage.
import ClientFeedbackCard from "../components/ClientFeedbackCard";
import ClientProfileAvatar1 from "../assets/pngs/client-feedback-image-1.png";
import ClientProfileAvatar2 from "../assets/pngs/client-feedback-image-2.png";
import ClientProfileAvatar3 from "../assets/pngs/client-feedback-image-3.png";
import ForwardIcon from "../assets/svgs/forward.svg";
import BackwardIcon from "../assets/svgs/backward.svg";

export default function HomePage() {
  return (
    <Box>
      {/* Header Section */}
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
          left="50%"
          top={0}
          maxWidth={1440}
          sx={{
            transform: "translateX(-50%)"
          }}
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

      {/* Service Section */}
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

      {/* Who We Are Section */}
      <Stack
        pt={133 / 8}
        alignItems="center"
      >
        <Stack
          direction="row"
          maxWidth={1440}>
          <Box flex={1}>
            <img src={CarRepairImage} />
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
              <WhoWeAreIcon imageUrl={CarRepairImage1} />
              <WhoWeAreIcon imageUrl={RepairShopImage} />
              <WhoWeAreIcon imageUrl={FrontCarImage} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Align Ease Section */}
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
            className={styles.alignEaseBackgroundImage}
            src={AlignEaseImage}
          />

          {/* TODO(Miyuru): This image should be properly clipped. */}
          {/* <img
            className={styles.alignEaseForegroundImage}
            src={ForgroundManImage}
          /> */}
        </Stack>
      </Stack>

      {/* What Our Client Say Section */}
      <Stack
        direction="row"
        justifyContent="center"
        pt={52 / 8}
        pb={46 / 8}
      >
        <Stack
          maxWidth={1440}
          alignItems="center"
        >
          <Typography
            fontFamily="Poppins"
            fontWeight={700}
            fontSize={25}
          >
            What Our Cliens Say
          </Typography>

          <Typography
            fontFamily="Poppins"
            color="#757575"
            fontWeight={500}
            textAlign="center"
          >
            Here's what our clients have to say about their<br /> experiences with us.
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            mt={80 / 8}
          >
            <Box
              width={50}
              height={50}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#F2F2F2"
              mr={28 / 8}
              borderRadius={1000}
              sx={{ cursor: "pointer" }}
            >
              <img
                className={styles.backwardIcon}
                src={BackwardIcon}
              />
            </Box>

            <Stack
              maxWidth={1440}
              direction="row"
              gap={25 / 8}
            >
              <ClientFeedbackCard
                imageUrl={ClientProfileAvatar1}
                ratings={5}
                description="Great experience! The layout was clear, and the whole process was effortless. I really appreciated the attention to design and usability"
              />

              <ClientFeedbackCard
                imageUrl={ClientProfileAvatar2}
                ratings={4}
                description="Impressed with the user-friendly interface. Navigation was intuitive, and everything felt organized and aligned perfectly. Booking took less than a minute!"
              />

              <ClientFeedbackCard
                imageUrl={ClientProfileAvatar3}
                ratings={5}
                description="Great experience! The layout was clear, and the whole process was effortless. I really appreciated the attention to design and usability"
              />
            </Stack>

            <Box
              width={50}
              height={50}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#F2F2F2"
              ml={28 / 8}
              borderRadius={1000}
              sx={{ cursor: "pointer" }}
            >
              <img
                className={styles.forwardIcon}
                src={ForwardIcon}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}