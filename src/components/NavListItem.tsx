import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavListItem({
  to,
  title,
  onClick,
  isActive = false
}: {
  to: string;
  title: string;
  onClick: () => void;
  isActive?: boolean;
}) {
  return (
    <Stack
      alignItems="center"
      gap={15 / 8}
      position="relative"
      component={Link}
      onClick={onClick}
      to={to}
      sx={{
        textDecoration: "none",
        color: "#FFF"
      }}
    >
      <Typography fontWeight={600}>{title}</Typography>

      {isActive &&
        <Box
          position="absolute"
          bottom={0}
          bgcolor="red"
          height={5}
          width={26}
          borderRadius={1000}
          sx={{
            transform: "translateY(15px)"
          }}
        />
      }
    </Stack>
  );
}