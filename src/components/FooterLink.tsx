import { Typography } from "@mui/material";

export default function FooterLink({
  title
}: {
  title: string;
}) {
  return (
    <Typography
      fontSize={14}
      color="#BDBDBD"
    >
      {title}
    </Typography>
  );
}