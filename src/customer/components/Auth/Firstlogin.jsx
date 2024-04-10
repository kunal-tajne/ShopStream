import * as React from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../../Redux/Auth/Action";
import { useEffect, useState, useRef } from "react";
import { Close } from "@mui/icons-material";

export default function Firstlogin({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar = () => setOpenSnackBar(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user]);

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    setShowPopup(false);
  };

  return (
    <React.Fragment>
      {showPopup && (
        <Box
          ref={boxRef}
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: "90%",
            minWidth: "300px",
            zIndex: 9999,
          }}
        >
          {/* Close icon */}
          <IconButton
            aria-label="close"
            onClick={() => setShowPopup(false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "gray",
            }}
          >
            <Close />
          </IconButton>

          <form className="w-full" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email / Username"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="given-name"
                  type="password"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0" }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
            <div className="py-3 flex items-center">
              <p>
                Don't have account ? Just click Create Account on top right hand
                corner
              </p>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <div class="flex-1 mr-4">
              <p>Just wanna explore? No problem! Use our Demo Login</p>
            </div>
            <div class="flex-none">
              <p>
                <u>Username</u> : <b>Shopstream</b>
              </p>
              <p>
                <u>Password</u> : <b>Iloveshopping</b>
              </p>
            </div>
          </div>

          <Snackbar
            open={openSnackBar}
            autoHideDuration={6000}
            onClose={handleCloseSnakbar}
          >
            <Alert
              onClose={handleCloseSnakbar}
              severity="success"
              sx={{ width: "100%" }}
            >
              {auth.error ? auth.error : auth.user ? "Register Success" : ""}
            </Alert>
          </Snackbar>
        </Box>
      )}
    </React.Fragment>
  );
}
