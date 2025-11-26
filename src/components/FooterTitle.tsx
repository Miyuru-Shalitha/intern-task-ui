import { Typography } from "@mui/material";

export default function FooterGroupTitle({
  title
}: {
  title: string;
}) {
  return (
    <Typography
      fontFamily="Poppins"
      fontSize={17}
      fontWeight={600}
    >
      {title}
    </Typography>
  );
}