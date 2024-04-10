import React, { useEffect, useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Redux/Auth/Action";
import Firstlogin from "./Firstlogin"; // Import the Firstlogin component

const FirstLoginAuthModal = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user]);

  const handleCloseSnakbar = () => setOpenSnackBar(false);

  return (
    <React.Fragment>
      {/* Conditionally render the Firstlogin component based on the authentication state */}
      {!auth.user && <Firstlogin handleCloseSnakbar={handleCloseSnakbar} />}
      {/* Render the Snackbar */}
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: "100%" }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default FirstLoginAuthModal;
