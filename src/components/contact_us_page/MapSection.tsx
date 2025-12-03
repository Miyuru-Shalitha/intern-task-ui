import { Box } from "@mui/material";

export default function MapSection() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      pb={77 / 8}
      px={16 / 8}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8400340633893!2d79.90417767456107!3d6.726463993269566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2470020e62b35%3A0x75057efc945cb737!2sRoodWave!5e1!3m2!1sen!2slk!4v1764752363703!5m2!1sen!2slk"
        width="100%"
        height="450"
        style={{
          maxWidth: 1440,
          border: 0
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </Box>
  );
}