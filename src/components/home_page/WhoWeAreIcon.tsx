import { Box } from "@mui/material";
import { useContext } from "react";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

export default function WhoWeAreIcon({
  imageUrl
}: {
  imageUrl: string;
}) {
  const windowContext = useContext(WindowContext);
  
  const getContainerSize = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.MobileLarge) {
      return 70;
    } else {
      return 56;
    }
  };

  return (
    <Box
      bgcolor="#F3F3F3"
      width={getContainerSize(windowContext!.windowProps.width)}
      height={getContainerSize(windowContext!.windowProps.width)}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={15 / 8}
    >
      <img src={imageUrl} />
    </Box>
  );
}