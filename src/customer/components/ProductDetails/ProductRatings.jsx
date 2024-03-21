import React from "react";
import { Avatar, Box, Grid, LinearProgress, Rating } from "@mui/material";

function ProductRatings({rating, value, color}) {
  return (
    <div>
      <Box className="mt-5 space-y-5">
        <Grid container alignItems="center" gap={2}>
          <Grid item xs={2}>
            <p>{rating}</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={value}
              color={color}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProductRatings;
