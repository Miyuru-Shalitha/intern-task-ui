import { useContext } from "react";
import { Stack, Typography } from "@mui/material";

import { CustomThemeContext } from "../../context/CustomThemeContext";

export default function ServiceCard({
  imageUrl,
  title,
  children
}: {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
}) {
  const customThemeContext = useContext(CustomThemeContext);

  return (
    <Stack
      width={295}
      bgcolor={customThemeContext!.colors.surface}
      px={32 / 8}
      pt={37 / 8}
      pb={33 / 8}
      borderRadius={10 / 8}
      alignItems="center"
    >
      <img
        style={{
          width: 80,
          height: 80
        }}
        src={imageUrl}
      />

      <Typography
        fontWeight={600}
        mt={22 / 8}
        mb={30 / 8}
        fontFamily="Poppins"
      >
        {title}
      </Typography>

      {children}
    </Stack>
  );
}