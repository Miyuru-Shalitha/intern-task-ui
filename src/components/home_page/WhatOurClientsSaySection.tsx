import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import ClientFeedbackCard from "./ClientFeedbackCard";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

import ClientProfileAvatar1 from "../../assets/webps/home_page/client_feedback_image_1.webp";
import ClientProfileAvatar2 from "../../assets/webps/home_page/client_feedback_image_2.webp";
import ClientProfileAvatar3 from "../../assets/webps/home_page/client_feedback_image_3.webp";
import ForwardArrowIcon from "../../assets/svgs/home_page/forward_arrow.svg";
import BackwardArrowIcon from "../../assets/svgs/home_page/backward_arrow.svg";
import { CustomThemeContext } from "../../context/CustomThemeContext";

export default function WhatOurClientsSaySection() {
  const windowContext = useContext(WindowContext);
  const customThemeContext = useContext(CustomThemeContext);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      pt={52 / 8}
      pb={46 / 8}
    >
      <Stack
        maxWidth={1440}
        alignItems="center"
        px={32 / 8}
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
          {/* <Box
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
              style={{
                width: 12.22,
                height: 14
              }}
              src={BackwardArrowIcon}
            />
          </Box> */}

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

            {windowContext!.windowProps.width > Breakpoint.Tablet &&
              <ClientFeedbackCard
                imageUrl={ClientProfileAvatar2}
                ratings={4}
                description="Impressed with the user-friendly interface. Navigation was intuitive, and everything felt organized and aligned perfectly. Booking took less than a minute!"
              />
            }

            {windowContext!.windowProps.width > Breakpoint.Laptop &&
              <ClientFeedbackCard
                imageUrl={ClientProfileAvatar3}
                ratings={5}
                description="Great experience! The layout was clear, and the whole process was effortless. I really appreciated the attention to design and usability"
              />
            }
          </Stack>

          {/* <Box
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
              style={{
                width: 12.22,
                height: 14
              }}
              src={ForwardArrowIcon}
            />
          </Box> */}
        </Stack>
      </Stack>
    </Stack>
  );
}