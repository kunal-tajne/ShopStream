import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import RegisterUserForm from "../Auth/RegisterForm";
import { useEffect, useState } from "react";
import LoginUserForm from "../Auth/LoginForm";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Provider } from 'react-redux';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (auth.user) handleClose();
  }, [auth.user]);
  return (
   <>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    size="large"
  >
    <Box
      className="rounded-md"
      sx={{
        ...style,
        maxWidth: "90vw", // Set maximum width to 90% of viewport width
        maxHeight: "90vh", // Set maximum height to 90% of viewport height
        width: "auto", // Allow width to adjust automatically
        height: "auto", // Allow height to adjust automatically
        overflowY: "auto", // Add vertical scrollbar if content exceeds container height
        // Additional responsive styles based on screen size
        "@media (max-width: 768px)": {
          // Styles for screens smaller than 768px (e.g., mobile devices)
          maxWidth: "95vw", // Increase maximum width for smaller screens
          maxHeight: "95vh", // Increase maximum height for smaller screens
        },
      }}
    >
      {location.pathname === "/login" ? <LoginUserForm /> : <RegisterUserForm />}
    </Box>
  </Modal>
</>
    
  );
}
