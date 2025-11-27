import { Stack } from "@mui/material";
import type { ReactNode } from "react";

export default function FooterIconLink({
  iconUrl,
  children
}: {
  iconUrl: string;
  children: ReactNode;
}) {
  return (
    <Stack
      direction="row"
      gap={15 / 8}
    >
      <img
        style={{
          width: 18
        }}
        src={iconUrl}
      />

      {children}
    </Stack>
  );
}