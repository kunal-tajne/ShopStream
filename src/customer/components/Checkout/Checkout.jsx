import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactsIcon from "@mui/icons-material/Contacts";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = [
  "Add Items to Cart",
  "Delivery Address",
  "Order Summary",
  "Payment",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");
  const navigate=useNavigate();


  const handleNext = () => {
    let newSkipped = skipped;
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    navigate(`/checkout?step=${step-1}`)
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  const handlePayment=()=>{
    console.log("handle payment")
  }

  return (
    <div>
      <Box sx={{ width: "100%", paddingY: 3, paddingX: 4.5 }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  {index === 0 && <ShoppingBagIcon />}{" "}
                  {index === 1 && <ContactsIcon />}
                  {index === 2 && <ReceiptIcon />}
                  {index === 3 && <CreditScoreIcon />}
                  {label}{" "}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, p: 2 }}>
              You are all set! We will ring your door bell soon with your order
              - Keep Shopping At ShopStream
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, p: 1 }}>
              Step {step} of 4
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                pt: 2,
                px: 5,
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <div>
      {step == 2 && <DeliveryAddressForm handleNext={handleNext} />}
      {step == 3 && <OrderSummary />}
      </div>
    </div>
  );
}
