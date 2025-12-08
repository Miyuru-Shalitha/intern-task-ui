import { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { Breakpoint, WindowContext } from "../context/WindowContext";
import ActivityCard from "../components/my_activity_page/ActivityCard";

import Activity1Image from "../assets/webps/my_activity_page/activity_1.webp";
import Activity2Image from "../assets/webps/my_activity_page/activity_2.webp";
import Activity3Image from "../assets/webps/my_activity_page/activity_3.webp";
import Activity4Image from "../assets/webps/my_activity_page/activity_4.webp";
import Activity5Image from "../assets/webps/my_activity_page/activity_5.webp";

interface IActivity {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  date: string;
  time: string;
}

const activites: IActivity[] = [
  {
    imageUrl: Activity1Image,
    title: "175/60R16 EP150 (JAPAN) wheel",
    description: "Lorem ipsum dolor sit amet consectetur. Risus ultrices nec nibh porttitor. Enim",
    price: 30000,
    date: "2025/05/25",
    time: "10:00 AM"
  },
  {
    imageUrl: Activity2Image,
    title: "175/60R16 EP150 (JAPAN) wheel",
    description: "Lorem ipsum dolor sit amet consectetur. Risus ultrices nec nibh porttitor. Enim ",
    price: 30000,
    date: "2025/05/25",
    time: "10:00 AM"
  },
  {
    imageUrl: Activity3Image,
    title: "Lorem lipsum lorem",
    description: "Lorem ipsum dolor sit amet consectetur. Risus ultrices nec nibh porttitor. Enim ",
    price: 30000,
    date: "2025/05/25",
    time: "10:00 AM"
  },
  {
    imageUrl: Activity4Image,
    title: "Lorem lipsum lorem",
    description: "Lorem ipsum dolor sit amet consectetur. Risus ultrices nec nibh porttitor. Enim ",
    price: 30000,
    date: "2025/05/25",
    time: "10:00 AM"
  },
  {
    imageUrl: Activity5Image,
    title: "Lorem lipsum lorem",
    description: "Lorem ipsum dolor sit amet consectetur. Risus ultrices nec nibh porttitor. Enim ",
    price: 30000,
    date: "2025/05/25",
    time: "10:45 AM"
  }
];

export default function MyActivityPage() {
  const windowContext = useContext(WindowContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      py={56 / 8}
    >
      <Stack
        maxWidth={1440}
        px={32 / 8}
        gap={27 / 8}
      >
        <Typography
          fontSize={25}
          fontWeight={600}
          lineHeight={1.4}
        >
          My Activity
        </Typography>

        <Grid
          container
          spacing={30 / 8}
        >
          {activites.map((activity: IActivity, index: number) =>
            <Grid
              key={index}
              size={windowContext!.windowProps.width > Breakpoint.Laptop ? 6 : 12}
            // height={125}
            >
              <ActivityCard
                imageUrl={activity.imageUrl}
                title={activity.title}
                description={activity.description}
                price={activity.price}
                date={activity.date}
                time={activity.time}
              />
            </Grid>
          )}
        </Grid>
      </Stack>
    </Box>
  );
}