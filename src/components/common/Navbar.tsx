import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavListItem from "./NavListItem";
import { Breakpoint, WindowContext } from "../../context/WindowContext";

import Logo from "../../assets/webps/common/logo.webp";
import { CustomThemeContext } from "../../context/CustomThemeContext";

interface INavItem {
  title: string;
  to: string;
}

// TODO(Miyuru): Nav item paths should be replaced witih correct paths.
const navItems: INavItem[] = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "SERVICES",
    to: "/service"
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

// TODO(Miyuru): Make a mobile nav option as a drawer that slides from 
//               right to left.
export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const navigate = useNavigate();
  const windowContext = useContext(WindowContext);
  const customThemecontext = useContext(CustomThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // NOTE(Miyuru): Set the nav item index when the route is loaded.
  useEffect(() => {
    navItems.forEach((navItem: INavItem, index: number) => {
      if (navItem.to === window.location.pathname) {
        setActiveNavItem(index);
      }
    });
  }, []);

  const handleClickLogIn = () => {
    navigate("/sign-in");
  };

  const handleClickSignUp = () => { };

  const getContainerLeftPadding = (windowWidth: number): number => {
    if (windowWidth > 830) {
      return 34 / 8;
    } else {
      return 17 / 8;
    }
  };

  const getContainerRightPadding = (windowWidth: number): number => {
    if (windowWidth > 830) {
      return 30 / 8;
    } else {
      return 15 / 8;
    }
  };

  const getLogoWidth = (windowWidth: number): number => {
    if (windowWidth > 970) {
      return 224;
    } else {
      return 180;
    }
  };

  const getGapBetweenNavItemsAndButtons = (windowWidth: number): number => {
    if (windowWidth > 1120) {
      return 89 / 8;
    } else if (windowWidth > 890) {
      return 60 / 8;
    } else {
      return 20 / 8;
    }
  };

  const getNavbarItemGap = (windowWidth: number): number => {
    if (windowWidth > 1026) {
      return 40 / 8;
    } else if (windowWidth > 985) {
      return 30 / 8;
    } else {
      return 20 / 8;
    }
  };

  const getButtonSize = (windowWidth: number): "medium" | "small" => {
    if (windowWidth > 1120) {
      return "medium";
    } else {
      return "small";
    }
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          bgcolor={customThemecontext!.colors.black}
          height="100%"
        >
          <List
            sx={{
              color: customThemecontext!.colors.white,
            }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText>Services</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText>Bookings</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText>About Us</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemText>Contact Us</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor={customThemecontext!.colors.primary}
        paddingLeft={getContainerLeftPadding(windowContext!.windowProps.width)}
        paddingRight={getContainerRightPadding(windowContext!.windowProps.width)}
      >
        <img
          src={Logo}
          width={getLogoWidth(windowContext!.windowProps.width)}
        />

        {windowContext!.windowProps.width > Breakpoint.Tablet ?
          <Stack
            flex={1}
            direction="row"
            alignItems="center"
            marginLeft="auto"
            gap={getGapBetweenNavItemsAndButtons(windowContext!.windowProps.width)}
          >
            <Stack
              flex={1}
              direction="row"
              justifyContent="flex-end"
              gap={getNavbarItemGap(windowContext!.windowProps.width)}
              color={customThemecontext!.colors.white}
              sx={{
                transform: "translateY(-5px)"
              }}
            >
              {navItems.map((item, index) =>
                <NavListItem
                  key={index}
                  title={item.title}
                  onClick={() => setActiveNavItem(index)}
                  isActive={index === activeNavItem} to={item.to}
                />
              )}
            </Stack>

            <Stack direction="row" gap={7 / 8}>
              <Button
                size={getButtonSize(windowContext!.windowProps.width)}
                onClick={handleClickLogIn}
                variant="outlined"
                disableElevation
                sx={{
                  color: customThemecontext!.colors.white,
                  border: 1,
                  borderColor: customThemecontext!.colors.white,
                  borderRadius: 10 / 8
                }}
              >
                Log In
              </Button>

              <Button
                size={getButtonSize(windowContext!.windowProps.width)}
                onClick={handleClickSignUp}
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: customThemecontext!.colors.secondary,
                  color: customThemecontext!.colors.white
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
          :
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon color="secondary" />
          </IconButton>
        }
      </Stack>
    </>
  );
}