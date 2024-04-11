import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div className="">
      <Grid
        className="bg-black text-white text-center mt-10 border"
        container
        sx={{ bgcolor: "white", color: "black", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 pt-3" variant="h6" style={{ fontWeight: 'bold' }}>
            Quick Links
          </Typography>
          <div>
            <Button variant="h6" onClick={"/"}>
            <a href="https://shopstream-by-kunaltajne.vercel.app/contact">Contact</a> 
            </Button>
          </div>
          <div>
            <Button variant="h6">
            <a href="https://shopstream-by-kunaltajne.vercel.app/about-us">About Us</a> 
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 pt-3" variant="h6" style={{ fontWeight: 'bold' }}>
            Online Shopping
          </Typography>
          <div>
            <Button variant="h6">
              Men
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Women
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Beauty
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 pt-3" variant="h6" style={{ fontWeight: 'bold' }}>
            Policies
          </Typography>
          <div>
            <Button variant="h6">
              Disclaimer
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Privacy Policy
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Terms Of Use
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Cancellation and Returns
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3 pt-3" variant="h6" style={{ fontWeight: 'bold' }}>
            Connect Here
          </Typography>
          <div>
            <Button variant="h6">
              Instagram
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Facebook
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Twitter
            </Button>
          </div>
          <div>
            <Button variant="h6">
              Pinterest
            </Button>
          </div>
        </Grid>
      </Grid>

      <div className="py-5 text-center text-white font-bold bg-black">
        ©2024 ShopStream. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
