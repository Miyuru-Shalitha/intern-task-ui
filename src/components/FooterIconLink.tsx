import styles from "../styles/footer-icon-link.module.css";
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
    <Stack direction="row" gap={15 / 8}>
      <img className={styles.footerLinkIcon} src={iconUrl} />

      {children}
    </Stack>
  );
}