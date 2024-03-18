import { Avatar, Grid } from '@mui/material'
import React from 'react'

const ProductReviewClass = () => {
  return (
    <div>
    <Grid container spacing={2} gap={3}>
    <Grid item xs={1}>
        <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
        R
        </Avatar>
    </Grid>
    <Grid>
        
    </Grid>

    </Grid>
    
    </div>
  )
}

export default ProductReviewClass