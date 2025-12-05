import { useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { CustomThemeContext } from "../../context/CustomThemeContext";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

import CalenderIcon from "../../assets/svgs/individual_service_page/calendar.svg";
import ClockIcon from "../../assets/svgs/individual_service_page/clock.svg";

export default function ServiceDetailSection({
  imageUrl,
  title,
  description1,
  description2
}: {
  imageUrl: string;
  title: string;
  description1: string;
  description2: string;
}) {
  const customThemeContext = useContext(CustomThemeContext);
  const windowContext = useContext(WindowContext);

  const getImageWidth = (windowWidth: number): number | "100%" => {
    if (windowWidth > Breakpoint.Laptop) {
      return 472;
    } else {
      return "100%";
    }
  };

  const getImageHeight = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Laptop) {
      return 472;
    } else {
      return 372;
    }
  };


  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Stack
        direction={windowContext!.windowProps.width > Breakpoint.Tablet ? "row" : "column"}
        pt={73 / 8}
        pb={94 / 8}
        px={windowContext!.windowProps.width > Breakpoint.MobileLarge ? 32 / 8 : 16 / 8}
        maxWidth={1440}
        gap={54 / 8}
      >
        <img
          src={imageUrl}
          width={getImageWidth(windowContext!.windowProps.width)}
          height={getImageHeight(windowContext!.windowProps.width)}
          style={{
            objectFit: "cover",
            borderRadius: 16
          }}
        />

        <Stack
          gap={18 / 8}
        >
          <Typography
            fontWeight={600}
            fontSize={25}
            lineHeight={1.3}
            textAlign={windowContext!.windowProps.width > Breakpoint.MobileLarge ? "start" : "center"}
          >
            {title}
          </Typography>

          <Stack
            gap={7 / 8}
          >
            <Typography
              color="#757575"
              fontWeight={500}
              textAlign={windowContext!.windowProps.width > Breakpoint.MobileLarge ? "start" : "justify"}
            >
              {description1}
            </Typography>

            <Typography
              color="#757575"
              fontWeight={500}
              textAlign={windowContext!.windowProps.width > Breakpoint.MobileLarge ? "start" : "justify"}
            >
              {description2}
            </Typography>
          </Stack>

          <Stack
            gap={8 / 8}
          >
            <Typography
              color="#757575"
              fontWeight={500}
            >
              Book your Time slot now
            </Typography>

            <Stack
              direction={windowContext!.windowProps.width > 1040 ? "row" : "column"}
              gap={19 / 8}
            >
              <Stack
                direction="row"
                p={8 / 8}
                borderRadius={5 / 8}
                sx={{
                  bgcolor: "#F3F3F3",
                  alignItems: "center"
                }}
              >
                <input
                  placeholder="Select Your Date"
                  style={{
                    flex: 1,
                    backgroundColor: "#F3F3F3",
                    color: "#A4A4A4",
                    border: "none",
                    outline: "none",
                    fontFamily: "poppins",
                    fontSize: 14,
                    fontWeight: 500
                  }}
                />

                <img
                  src={CalenderIcon}
                  width={20}
                  height={20}
                />
              </Stack>

              <Stack
                direction="row"
                p={8 / 8}
                borderRadius={5 / 8}
                sx={{
                  bgcolor: "#F3F3F3",
                  alignItems: "center"
                }}
              >
                <input
                  placeholder="Select Your Time"
                  style={{
                    flex: 1,
                    backgroundColor: "#F3F3F3",
                    color: "#A4A4A4",
                    border: "none",
                    outline: "none",
                    fontFamily: "poppins",
                    fontSize: 14,
                    fontWeight: 500
                  }}
                />

                <img
                  src={ClockIcon}
                  width={20}
                  height={20}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            gap={22 / 8}
          >
            <Stack
              direction="row"
              gap={8 / 8}
              alignItems="center"
            >
              <Typography
                fontWeight={500}
                fontSize={25}
              >
                LKR 30,000
              </Typography>

              <Typography
                color="#757575"
                fontSize={16}
                fontWeight={500}
              >
                Estimated Time : 2h
              </Typography>
            </Stack>

            <Button
              variant="contained"
              disableElevation
              sx={{
                fontSize: 25,
                bgcolor: customThemeContext!.colors.secondary
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}