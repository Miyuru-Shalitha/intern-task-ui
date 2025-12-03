import { Stack } from "@mui/material";

import ContactUsSection from "../components/contact_us_page/ContactUsSection";
import MapSection from "../components/contact_us_page/MapSection";

export default function ContactUsPage() {
  return (
    <Stack>
      <ContactUsSection />
      <MapSection />
    </Stack>
  );
}