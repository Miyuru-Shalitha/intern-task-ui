import type { ReactNode } from "react";
import { Stack } from "@mui/material";

export default function FooterIconLink({
  iconUrl,
  children
}: {
  iconUrl: string;
  children: ReactNode;
}) {
  return (
    <a
      href="mailto:alignease@gmail.com"
    >
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
    </a>
  );
}