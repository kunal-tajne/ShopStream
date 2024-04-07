import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import HorizontalLinearStepper from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../Redux/Customers/Order/Action";


const DeliveryAddressForm = ({ handleNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  const [formData, setFormData] = useState({
    phoneNumber: "",
    phoneNumberAlternate: "",
    phoneNumberError: false, // State to track if there's an error
    phoneNumberAlternateError: false,
  });

  
  const handleSubmission = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
      alternatePhone: data.get("phoneNumberAlternate"),
      referal: data.get("referalcode"),
    };

    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    handleNext();
  };



  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address: item, jwt, navigate }));
    handleNext();
  };

 

  return (
    <div>
      <Grid container spacing={4} className="px-20 py-10">
        <Grid
          item
          xs={12}
          lg={3}
          className="border rounded-e-lg h-[30.5rem] overflow-y-scroll"
        >
          {auth.user?.addresses.map((item) => (
            <div
              onClick={() => setSelectedAdress(item)}
              className="p-3 py-2 border-b cursor-pointer"
            >
              {" "}
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                onClick={()=>handleCreateOrder(item)}
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      bgcolor: "rgb(24,128,61)",
                    },
                  }}
                  size="large"
                  variant="contained"
                >
                  Deliver Here
                </Button>
              )}
            </div>
          ))}
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box className=" rounded-s-md ">
            <form onSubmit={handleSubmission}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    inputProps={{ pattern: "[A-Za-z ]*" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                    inputProps={{ pattern: "[A-Za-z ]*" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                    inputProps={{ pattern: "[A-Za-z ]*" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                    inputProps={{ pattern: "[A-Za-z ]*" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    fullWidth
                    autoComplete="given-name"
                    inputProps={{ pattern: "[A-Za-z ]*" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    type="text" 
                    autoComplete="shipping postal-code"
                    inputProps={{ pattern: "[0-9]*" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    inputProps={{ pattern: "[0-9]*" }}
                    type="number"
                    
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="phoneNumberAlternate"
                    name="phoneNumberAlternate"
                    label="Alternate Phone Number"
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    id="referalcode"
                    name="referalcode"
                    label="Referal Code"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    sx={{
                      mt: 2,
                      width: 400,
                      fontSize: 16,
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "rgb(24,128,61)",
                      },
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
