import styles from "./sign-in-page.module.css"
import { Box, Button, Stack, Typography } from "@mui/material";
import SignInBackground from "../assets/pngs/sign-in-background.png";
import SignInForground from "../assets/pngs/sign-in-forground.png";
import { useState } from "react";

export default function SignInPage() {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: ""
  });

  const handleSignIn = () => {
    if (signInFormData.email.length === 0) {
      alert("Please enter an email address!");
    } else if (!signInFormData.email.includes("@")) {
      alert("Please enter a valid email address!");
    }
    else if (signInFormData.password.length === 0) {
      alert("Please enter a password!");
    } else if (signInFormData.password.length < 8) {
      alert("Password must be at least 8 characters!");
    } else {
      setSignInFormData({
        email: "",
        password: ""
      });
      // TODO(Miyuru): Navigate to the relavent page.
      alert("SIGN IN SICCESSFUL!");
    }
  };

  return (
    <Box display="flex" flexDirection="row" height="100vh" overflow="hidden">
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Box padding={8} sx={{
          border: 3,
          borderColor: "#D8D8D8",
          borderRadius: 25 / 8
        }}
          maxWidth={519}
        >
          <Typography fontSize={35} color="#DB002B" fontWeight={600}>SIGN IN</Typography>

          <Typography fontSize={14} color="#757575" paddingBottom={25 / 8}>
            Access your personalized dashboard to manage your bookings, view service history, report issues, and receive real-time updates. Choose your user type to get started.
          </Typography>

          <Stack gap={12 / 8} mb={25 / 8}>
            <Stack gap={12 / 8}>
              <label
                className={styles.inputFieldLabel}
                htmlFor="sign-in-email"
              >
                Email Address
              </label>

              <input
                className={styles.inputField}
                id="sign-in-email"
                type="email"
                value={signInFormData.email}
                onChange={(e) => setSignInFormData({ ...signInFormData, email: e.target.value })}
              />
            </Stack>

            <Stack gap={12 / 8}>
              <label
                className={styles.inputFieldLabel}
                htmlFor="sign-in-password"
              >
                Password
              </label>

              <input
                className={styles.inputField}
                id="sign-in-password"
                type="password"
                value={signInFormData.password}
                onChange={(e) => setSignInFormData({ ...signInFormData, password: e.target.value })}
              />
            </Stack>
          </Stack>

          <Button
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
            If you don’t have an account? <span className={styles.registerLink}>Register</span>
          </Typography>
        </Box>
      </Box>

      <Box flex={1} position="relative">
        <img className={styles.signInBackgroundImage} src={SignInBackground} />

        <img className={styles.signInForgroundImage} src={SignInForground} width="100%" />
      </Box>
    </Box>
  );
}
