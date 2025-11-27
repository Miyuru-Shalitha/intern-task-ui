import { Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import { useContext, useId, useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInImage from "../assets/webps/sign_in_page/sign_in_image.png";
import { WindowContext } from "../context/WindowContext";

export default function SignInPage() {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const windowContext = useContext(WindowContext);
  const emailId = useId();
  const passwordId = useId();

  const handleSignIn = () => {
    setIsLoading(true);

    // NOTE(Miyuru): Maybe we do not need to check the length of the email and 
    //               password weather it is zero or not, because if any of those 
    //               are zero, "Proceed" button is disabled. But I check those
    //               anyways for extra safety.
    if (signInFormData.email.length === 0) {
      showAlertPopUp("Please enter an email address!");
      setIsLoading(false);
    } else if (!signInFormData.email.includes("@")) {
      showAlertPopUp("Please enter a valid email address!");
      setIsLoading(false);
    }
    else if (signInFormData.password.length === 0) {
      showAlertPopUp("Please enter a password!");
      setIsLoading(false);
    } else if (signInFormData.password.length < 8) {
      showAlertPopUp("Password must be at least 8 characters!");
      setIsLoading(false);
    } else {
      setSignInFormData({
        email: "",
        password: ""
      });
      showAlertPopUp("Sign in successful!");
      setShowAlert(true);

      // TODO(Miyuru): This is just for simulating a network delay.
      //               Remove this later when integrating with the backend.
      setTimeout(() => {
        setIsLoading(false);
        navigate("/", { replace: true });
      }, 3000);
    }
  };

  const showAlertPopUp = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const getFormPadding = () => {
    if (windowContext!.windowProps.width < 420) {
      return 2;
    } else if (windowContext!.windowProps.width < 640) {
      return 4;
    } else {
      return 8;
    }
  };

  const getFormHorizontalMargin = () => {
    if (windowContext!.windowProps.width < 420) {
      return 2;
    } else if (windowContext!.windowProps.width < 640) {
      return 8;
    } else {
      return 0;
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
            p={getFormPadding()}
            mx={getFormHorizontalMargin()}
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
                  htmlFor={emailId}
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
                  id={emailId}
                  type="email"
                  value={signInFormData.email}
                  onChange={(e) => setSignInFormData({ ...signInFormData, email: e.target.value })}
                />
              </Stack>

              <Stack gap={12 / 8}>
                <label
                  htmlFor={passwordId}
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
                  id={passwordId}
                  type="password"
                  value={signInFormData.password}
                  onChange={(e) => setSignInFormData({ ...signInFormData, password: e.target.value })}
                />
              </Stack>
            </Stack>

            <Button
              disabled={!(signInFormData.email.length > 0 && signInFormData.password.length > 0)}
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

        {windowContext!.windowProps.width > 1440 &&
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
