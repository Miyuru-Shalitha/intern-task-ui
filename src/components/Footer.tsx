import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/pngs/logo.png";
import FacebookIcon from "../assets/svgs/facebook.svg";
import InstagramIcon from "../assets/svgs/instagram.svg";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import LocationIcon from "../assets/svgs/location.svg";
import PhoneIcon from "../assets/svgs/phone.svg";
import EmailIcon from "../assets/svgs/email.svg";
import FooterIconLink from "./FooterIconLink";

export default function Footer() {
  return (
    <Stack
      bgcolor="#000"
      color="#FFF"
      direction="row"
      justifyContent="center"
      pt={56 / 8}
      pb={32 / 8}
    >
      <Stack
        maxWidth={1440}
        width="80%"
        direction="row"
        justifyContent="space-between"
      >
        <Stack>
          <img
            style={{
              width: 224,
              height: 81
            }}
            src={Logo}
          />

          <Typography
            width={390}
            mt={25 / 8}
            mb={43 / 8}
          >
            Your trusted partner for smart, reliable vehicle maintenance—precision service, easy scheduling, and peace of mind every mile. Expert care with cutting-edge tech to keep you driving safely.
          </Typography>

          <Stack
            gap={14 / 8}
            direction="row"
          >
            <img
              style={{
                width: 30,
                height: 30
              }}
              src={FacebookIcon}
            />

            <Box
              style={{
                width: 30,
                height: 30
              }}
              bgcolor="#FFF"
              width={30}
              height={30}
              borderRadius={1000}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={InstagramIcon} />
            </Box>
          </Stack>
        </Stack>

        <Stack gap={24 / 8}>
          <FooterTitle title="USEFUL LINKS" />

          <Stack
            direction="column"
            gap={1}
          >
            <FooterLink title="Home" />
            <FooterLink title="Service" />
            <FooterLink title="Booking" />
            <FooterLink title="About Us" />
            <FooterLink title="Contact Us" />
          </Stack>
        </Stack>

        <Stack gap={24 / 8}>
          <FooterTitle title="CONTACTS" />

          <Stack
            direction="column"
            gap={19 / 8}
          >
            <FooterIconLink
              iconUrl={LocationIcon}
            >
              <Typography
                fontSize={14}
                color="#BDBDBD"
              >
                251 /A  Galle Road,<br />
                Bamblapitiya
              </Typography>
            </FooterIconLink>

            <FooterIconLink
              iconUrl={PhoneIcon}
            >
              <Typography
                fontSize={14}
                color="#BDBDBD"
              >
                +94 789 765 451
              </Typography>
            </FooterIconLink>

            <FooterIconLink
              iconUrl={EmailIcon}
            >
              <Typography
                fontSize={14}
                color="#BDBDBD"
              >
                alignease@gmail.com
              </Typography>
            </FooterIconLink>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}