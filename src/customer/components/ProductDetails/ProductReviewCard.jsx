import { Avatar, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = ({ review }) => {
  return (
    <div className="p-2">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Avatar
            className="text-white"
            sx={{ width: 40, height: 40, bgcolor: "#9155fd"}}
          >
            {review.intial}
          </Avatar>
        </Grid>
        <Grid item xs={10}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="opacity-75">{review.date}</p>
            </div>
          </div>
          <Rating
            name="half-rating-read"
            defaultValue={review.rating}
            precision={0.5}
            readOnly
          />
          <div className=" text-lg">{review.description}</div>
        </Grid>

        <Grid item={5}>
        


        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
