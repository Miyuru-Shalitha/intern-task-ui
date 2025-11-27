import { Box } from "@mui/material";

export default function WhoWeAreIcon({
  imageUrl
}: {
  imageUrl: string;
}) {
  return (
    <Box
      bgcolor="#F3F3F3"
      width={70}
      height={70}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={15 / 8}
    >
      <img src={imageUrl} />
    </Box>
  );
}