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
          <Typography
            className="pb-3 pt-3"
            variant="h6"
            style={{ fontWeight: "bold" }}
          >
            Quick Links
          </Typography>
          <div>
            <Button variant="h6" onClick={"/"}>
              <a href="https://shopstream-by-kunaltajne.vercel.app/contact">
                Contact
              </a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="https://shopstream-by-kunaltajne.vercel.app/about-us">
                About Us
              </a>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pb-3 pt-3"
            variant="h6"
            style={{ fontWeight: "bold" }}
          >
            Online Shopping
          </Typography>
          <div>
            <Button variant="h6">
              <a href="https://shopstream-by-kunaltajne.vercel.app/men/clothing/browse-all">
                Men
              </a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="https://shopstream-by-kunaltajne.vercel.app/women/clothing/browseall">
                Women
              </a>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pb-3 pt-3"
            variant="h6"
            style={{ fontWeight: "bold" }}
          >
            <a href="/">Policies</a>
          </Typography>
          <div>
            <Button variant="h6">
              <a href="/">Disclaimer</a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="/">Privacy Policy</a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="/">Terms Of Use</a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="/">Cancellation and Returns</a>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pb-3 pt-3"
            variant="h6"
            style={{ fontWeight: "bold" }}
          >
            <a href="/">Connect Here</a>
          </Typography>
          <div>
            <Button variant="h6">
              <a href="/">Instagram</a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="/">Facebook</a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="/">Twitter</a>
            </Button>
          </div>
          <div>
            <Button variant="h6">
              <a href="/">Pinterest</a>
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
