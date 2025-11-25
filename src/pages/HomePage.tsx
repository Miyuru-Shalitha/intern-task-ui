import styles from "../styles/home-page.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import HomeHeaderBackgroundImage from "../assets/pngs/home-header-background.png";

export default function HomePage() {
  return (
    <Box>
      <Box
        height={638}
        position="relative"
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
    </Box>
  );
}