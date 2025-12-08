import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { WindowContext } from "../../context/WindowContext";

import CalenderIcon from "../../assets/svgs/common/calendar.svg";
import ClockIcon from "../../assets/svgs/common/clock.svg";

interface IActivity {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  date: string;
  time: string;
}

export default function ActivityCard({
  imageUrl,
  title,
  description,
  price,
  date,
  time
}: IActivity) {
  const windowContext = useContext(WindowContext);

  return (
    <Stack
      direction={windowContext!.windowProps.width > 570 ? "row" : "column"}
      gap={windowContext!.windowProps.width > 570 ? 24 / 8 : 0}
      bgcolor="#F3F3F3"
      borderRadius={10 / 8}
      height="100%"
      overflow="hidden"
    >
      <Box
        my={windowContext!.windowProps.width > 570 ? 6 / 8 : 17 / 8}
        px={windowContext!.windowProps.width > 570 ? 8 / 8 : 17 / 8}
        width={windowContext!.windowProps.width > 570 ? 125 : "100%"}
        height={windowContext!.windowProps.width > 570 ? 113 : undefined}
        overflow="hidden"
      >
        <img
          src={imageUrl}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            borderRadius: "0.4375rem" // 7px
          }}
        />
      </Box>

      <Stack
        flex={1}
        justifyContent="space-between"
        py={17 / 8}
        pr={17 / 8}
        pl={windowContext!.windowProps.width > 570 ? 0 : 17 / 8}
        gap={7 / 8}
      >
        <Stack
          gap={7 / 8}
        >
          <Typography
            fontWeight={600}
            fontSize={20}
            lineHeight={1}
          >
            {title}
          </Typography>

          <Typography
            fontSize={14}
            lineHeight={1.2}
          >
            {description}
          </Typography>
        </Stack>

        <Stack
          direction={windowContext!.windowProps.width > 540 ? "row" : "column"}
          justifyContent="space-between"
          gap={8 / 8}
        >
          <Typography
            fontSize={14}
            lineHeight={1.2}
            fontWeight={500}
          >
            LKR {price}
          </Typography>

          <Stack
            direction="row"
            gap={9 / 8}
          >
            <Stack
              direction="row"
              gap={9 / 8}
            >
              <img
                src={CalenderIcon}
                width={20}
                height={20}
              />

              <Typography
                color="#757575"
                fontSize={14}
                fontWeight={500}
              >
                {date}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              gap={9 / 8}
            >
              <img
                src={ClockIcon}
                width={20}
                height={20}
              />

              <Typography
                color="#757575"
                fontSize={14}
                fontWeight={500}
              >
                {time}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}