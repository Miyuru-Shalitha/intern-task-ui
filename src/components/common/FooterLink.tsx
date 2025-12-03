import { Link } from "react-router-dom";

export default function FooterLink({
  title,
  to
}: {
  title: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 14,
        color: "#BDBDBD",
        textDecoration: "none"
      }}
    >
      {title}
    </Link>
  );
}