import { Box, Button, Snackbar, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInImage from "../assets/webps/sign_in_page/sign_in_image.png";

export default function SignInPage() {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);

    if (signInFormData.email.length === 0) {
      setAlertMessage("Please enter an email address!");
      setShowAlert(true);
      setIsLoading(false);
    } else if (!signInFormData.email.includes("@")) {
      setAlertMessage("Please enter a valid email address!");
      setShowAlert(true);
      setIsLoading(false);
    }
    else if (signInFormData.password.length === 0) {
      setAlertMessage("Please enter a password!");
      setShowAlert(true);
      setIsLoading(false);
    } else if (signInFormData.password.length < 8) {
      setAlertMessage("Password must be at least 8 characters!");
      setShowAlert(true);
      setIsLoading(false);
    } else {
      setSignInFormData({
        email: "",
        password: ""
      });
      setAlertMessage("Sign in successful!");
      setShowAlert(true);

      // TODO(Miyuru): This is just for simulating a network delay.
      //               Remove this later when integrating with the backend.
      setTimeout(() => {
        setIsLoading(false);
        navigate("/", { replace: true });
      }, 3000);
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={showAlert}
        onClose={() => setShowAlert(false)}
        message={alertMessage}
      />

      <Box
        display="flex"
        flexDirection="row"
        height="100vh"
        overflow="hidden"
      >
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            padding={!sm ? 8 : 4}
            sx={{
              border: 3,
              borderColor: "#D8D8D8",
              borderRadius: 25 / 8
            }}
            maxWidth={519}
          >
            <Typography
              fontSize={35}
              color="#DB002B"
              fontWeight={600}
            >
              SIGN IN
            </Typography>

            <Typography
              fontSize={14}
              color="#757575"
              paddingBottom={25 / 8}
            >
              Access your personalized dashboard to manage your bookings, view service history, report issues, and receive real-time updates. Choose your user type to get started.
            </Typography>

            <Stack
              gap={12 / 8}
              mb={25 / 8}
            >
              <Stack gap={12 / 8}>
                <label
                  htmlFor="sign-in-email"
                  style={{
                    fontSize: 16,
                    fontWeight: 600
                  }}
                >
                  Email Address
                </label>

                <input
                  style={{
                    border: "1px solid #D8D8D8",
                    borderRadius: 5,
                    height: 40,
                    padding: 8
                  }}
                  id="sign-in-email"
                  type="email"
                  value={signInFormData.email}
                  onChange={(e) => setSignInFormData({ ...signInFormData, email: e.target.value })}
                />
              </Stack>

              <Stack gap={12 / 8}>
                <label
                  htmlFor="sign-in-password"
                  style={{
                    fontSize: 16,
                    fontWeight: 600
                  }}
                >
                  Password
                </label>

                <input
                  style={{
                    border: "1px solid #D8D8D8",
                    borderRadius: 5,
                    height: 40,
                    padding: 8
                  }}
                  id="sign-in-password"
                  type="password"
                  value={signInFormData.password}
                  onChange={(e) => setSignInFormData({ ...signInFormData, password: e.target.value })}
                />
              </Stack>
            </Stack>

            <Button
              loading={isLoading}
              onClick={handleSignIn}
              variant="contained"
              disableElevation
              fullWidth
              sx={{
                fontSize: 20,
                bgcolor: "#DB002B"
              }}
            >
              Proceed
            </Button>

            <Typography textAlign="center" mt={17 / 8} color="#757575">
              If you don’t have an account? <span style={{
                color: "#DB002B",
                fontWeight: 500
              }}>
                Register
              </span>
            </Typography>
          </Box>
        </Box>

        {!md &&
          <Box flex={1}>
            <img
              src={SignInImage}
              width="100%"
              height="100%"
              style={{
                objectFit: "cover"
              }}
            />
          </Box>
        }
      </Box >
    </>
  );
}
