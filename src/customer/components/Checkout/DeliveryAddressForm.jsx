import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4} className="px-20 py-10">
        <Grid
          item
          xs={12}
          lg={3}
          className="border rounded-e-lg h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-3 py-2 border-b cursor-pointer">
            <AddressCard />
            <Button
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
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box className=" rounded-s-md ">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
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
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="phoneNumberAlternate"
                    name="phoneNumberAlternate"
                    label="Alternate Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
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
                      width:400,
                      fontSize:16,
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
