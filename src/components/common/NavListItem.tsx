import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WindowContext } from "../../context/WindowContext";

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
  const windowContext = useContext(WindowContext);

  const getFontSize = (windowWidth: number): number => {
    if (windowWidth > 1120) {
      return 16;
    } else {
      return 12;
    }
  };

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
      <Typography
        fontSize={getFontSize(windowContext!.windowProps.width)}
        fontWeight={600}
      >
        {title}
      </Typography>

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