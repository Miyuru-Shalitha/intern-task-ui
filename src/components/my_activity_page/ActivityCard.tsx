import { Box, Stack, Typography } from "@mui/material";

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
  return (
    <Stack
      direction="row"
      gap={24 / 8}
      bgcolor="#F3F3F3"
      borderRadius={10 / 8}
      height="100%"
    >
      <Box
        my={6 / 8}
        mx={8 / 8}
        width={125}
        height={113}
        borderRadius={7 / 8}
        overflow="hidden"
      >
        <img
          src={imageUrl}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover"
          }}
        />
      </Box>

      <Stack
        justifyContent="space-between"
        py={17 / 8}
        pr={17 / 8}
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
          direction="row"
          justifyContent="space-between"
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