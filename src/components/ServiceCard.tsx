import styles from "../styles/service-card.module.css";
import { Stack, Typography } from "@mui/material";

export default function ServiceCard({
  imageUrl,
  children
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  return (
    <Stack
      width={295}
      bgcolor="#E9E9E9"
      px={32 / 8}
      pt={37 / 8}
      pb={33 / 8}
      borderRadius={10 / 8}
      alignItems="center"
    >
      <img className={styles.serviceCardImage} src={imageUrl} />

      <Typography
        fontWeight={600}
        mt={22 / 8}
        mb={30 / 8}
        fontFamily="Poppins"
      >
        Tire Ordering
      </Typography>

      <Typography
        fontFamily="Poppins"
        color="#757575"
      >
        {children}
      </Typography>
    </Stack>
  );
}