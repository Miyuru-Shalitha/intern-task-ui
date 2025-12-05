import { useContext, useEffect, useState } from "react";
import { Alert, Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

import { Breakpoint, WindowContext } from "../../context/WindowContext";
import LabeldOutlinedInputField from "../../components/common/LabeledOutlinedInputField";
import { CustomThemeContext } from "../../context/CustomThemeContext";

import BackgroundImage from "../../assets/webps/contact_us_page/background.webp";

const emailJsAccountPublicId = "yaXxmplrmwejKtmos";
const emailServiceId = "service_wc6hrhq";
const templateId = "template_s23s3mp";

export default function ContactUsSection() {
  const windowContext = useContext(WindowContext);
  const customeThemeContext = useContext(CustomThemeContext);
  const [contactUsFormData, setContactUsFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSevirity, setAlertSevirity] = useState<"success" | "warning" | "error">("success");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initEmailJs = () => {
      emailjs.init(emailJsAccountPublicId);
    };

    return initEmailJs;
  }, []);

  const getFormPadding = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Laptop) {
      return 64 / 8;
    } else if (windowWidth > Breakpoint.MobileMedium) {
      return 32 / 8;
    } else {
      return 16 / 8;
    }
  };

  const getFormHorizontalMargin = (windowWidth: number): number => {
    if (windowWidth < 420) {
      return 2;
    } else if (windowWidth < 640) {
      return 8;
    } else {
      return 0;
    }
  };

  const getSectionVerticalPadding = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.Tablet) {
      return 80 / 8;
    } else if (windowWidth > Breakpoint.MobileLarge) {
      return 60 / 8;
    } else {
      return 40 / 8;
    }
  };

  const getBackgroundImageWidth = (windowWidth: number): number => {
    if (windowWidth > Breakpoint.LaptopLarge) {
      return 661;
    } else {
      return 400;
    }
  };

  const handleClickSubmit = async () => {
    setIsLoading(true);

    // NOTE(Miyuru): Maybe we do not need to check the length of each fields 
    //               weather it is zero or not, because if any of those are
    //               zero, "Submit" button is disabled. But I check those
    //               anyways for extra safety.
    if (contactUsFormData.fullName.length === 0) {
      setAlertSevirity("warning");
      showAlertPopUp("Please enter the full name!");
      setIsLoading(false);
    } else if (contactUsFormData.email.length === 0) {
      setAlertSevirity("warning");
      showAlertPopUp("Please enter an email address!");
      setIsLoading(false);
    } else if (!contactUsFormData.email.includes("@") || !contactUsFormData.email.includes(".com")) {
      setAlertSevirity("warning");
      showAlertPopUp("Please enter a valid email address!");
      setIsLoading(false);
    }
    else if (contactUsFormData.message.length === 0) {
      setAlertSevirity("warning");
      showAlertPopUp("Please enter a message!");
      setIsLoading(false);
    } else {
      try {
        const response = await emailjs.send(
          emailServiceId,
          templateId,
          {
            email: contactUsFormData.email,
            message: contactUsFormData.message,
            fullName: contactUsFormData.fullName
          }
        );

        if (response.status) {
          setContactUsFormData({
            fullName: "",
            email: "",
            message: ""
          });
          setAlertSevirity("success");
          showAlertPopUp("Email sent successful!");
          setIsLoading(false);
        }
      } catch (error: any) {
        console.error(error);
        setAlertSevirity("error");
        showAlertPopUp("Email sent failed!");
        setIsLoading(false);
      }
    }
  };

  const showAlertPopUp = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
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
      >
        <Alert severity={alertSevirity}>
          {alertMessage}
        </Alert>
      </Snackbar>

      <Box
        display="flex"
        justifyContent="center"
        gap={32 / 8}
        py={getSectionVerticalPadding(windowContext!.windowProps.width)}
      >
        <Box
          maxWidth={1440}
          flex={1}
          display="flex"
          justifyContent="center"
          pl={windowContext!.windowProps.width > Breakpoint.Tablet ? 32 / 8 : 0}
        >
          <Box
            p={getFormPadding(windowContext!.windowProps.width)}
            mx={getFormHorizontalMargin(windowContext!.windowProps.width)}
            sx={{
              border: 3,
              borderColor: "#D8D8D8",
              borderRadius: 25 / 8
            }}
            maxWidth={519}
          >
            <Typography
              fontSize={35}
              color={customeThemeContext!.colors.secondary}
              fontWeight={600}
            >
              CONTACT US
            </Typography>

            <Typography
              fontSize={14}
              color="#757575"
              paddingBottom={25 / 8}
              textAlign={windowContext!.windowProps.width > Breakpoint.MobileLarge ? "start" : "justify"}
            >
              Reach out to us for bookings, service inquiries, or assistance — our team is ready to provide quick and reliable support to keep your vehicle running smoothly.
            </Typography>

            <Stack
              gap={windowContext!.windowProps.width > Breakpoint.MobileLarge ? 12 / 8 : 8 / 8}
              mb={25 / 8}
            >
              <LabeldOutlinedInputField
                label="Full Name"
                value={contactUsFormData.fullName}
                onChange={(e) => setContactUsFormData({ ...contactUsFormData, fullName: e.target.value })}
              />

              <LabeldOutlinedInputField
                label="Email Address"
                value={contactUsFormData.email}
                onChange={(e) => setContactUsFormData({ ...contactUsFormData, email: e.target.value })}
              />

              <LabeldOutlinedInputField
                label="Message"
                value={contactUsFormData.message}
                onChange={(e) => setContactUsFormData({ ...contactUsFormData, message: e.target.value })}
              />
            </Stack>

            <Button
              disabled={!(contactUsFormData.fullName.length > 0
                && contactUsFormData.email.length > 0
                && contactUsFormData.message.length > 0)}
              loading={isLoading}
              onClick={handleClickSubmit}
              variant="contained"
              disableElevation
              fullWidth
              sx={{
                fontSize: 20,
                bgcolor: customeThemeContext!.colors.secondary
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        {windowContext!.windowProps.width > Breakpoint.Tablet &&
          <img
            src={BackgroundImage}
            width="100%"
            style={{
              maxWidth: getBackgroundImageWidth(windowContext!.windowProps.width),
              objectFit: "contain",
              marginTop: "auto"
            }}
          />
        }
      </Box>
    </>
  );
}