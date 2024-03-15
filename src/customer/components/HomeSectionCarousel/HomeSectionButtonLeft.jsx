import React from "react";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function HomeSectionButtonLeft() {
  return (
    <Button
      variant="contained"
      className="z-10"
      sx={{
        position: "absolute",
        top: "8rem",
        left: "-2.0rem",
        transform: "translateX(50%) rotate(90deg)",
        bgcolor: "white",
        "&:hover": {color: "white", bgcolor:"white"},
      }}
      aria-label="next"
    >
      <NavigateBeforeIcon
        sx={{
          transform: "rotate(-90deg)",
          color: "black",
          ":hover": { color: "blue" },
        }}
      />
    </Button>
  );
}