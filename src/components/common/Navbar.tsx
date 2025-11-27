import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavListItem from "./NavListItem";

import Logo from "../../assets/webps/common/logo.webp";

// TODO(Miyuru): Nav item paths should be replaced witih correct paths.
const navItems = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "SERVICES",
    to: "/"
  },
  {
    title: "BOOKINGS",
    to: "/"
  },
  {
    title: "ABOUT US",
    to: "/"
  },
  {
    title: "CONTACT US",
    to: "/"
  }
];

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const navigate = useNavigate();

  const handleClickLogIn = () => {
    navigate("/sign-in");
  };

  const handleClickSignUp = () => { };

  return (
    <Stack
      direction="row"
      alignItems="center"
      bgcolor="#000"
      paddingLeft={34 / 8}
      paddingRight={40 / 8}
    >
      <img src={Logo} width={224} />

      <Stack
        direction="row"
        alignItems="center"
        marginLeft="auto"
        gap={89 / 8}
      >
        <Stack
          direction="row"
          color="#FFF"
          gap={40 / 8}
          sx={{
            transform: "translateY(-5px)"
          }}
        >
          {navItems.map((item, index) =>
            <NavListItem
              title={item.title}
              onClick={() => setActiveNavItem(index)}
              isActive={index === activeNavItem} to={item.to}
            />
          )}
        </Stack>

        <Stack direction="row" gap={7 / 8}>
          <Button
            onClick={handleClickLogIn}
            variant="outlined"
            disableElevation
            sx={{
              color: "#FFF",
              border: 1,
              borderColor: "#FFF",
              borderRadius: 10 / 8
            }}
          >
            Log In
          </Button>

          <Button
            onClick={handleClickSignUp}
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#DB002B"
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}