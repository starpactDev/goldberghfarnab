import React from 'react'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material'


function Step2() {
  return (
    <div>
      <Grid container spacing={6} sx={{ mt: 6 }}>




        {/* Bank Details */}
        <Grid item xs={12} sm={12} sx={{ textAlign: "left" }} >
          <Typography variant="subtitle1" fontSize="large">
            Where should your funds be deposited?
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="Acount Number *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="Routing Number *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="Bank Name *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={12} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="What is the average monthly amount you think you will charge using Goldberg Pay ? *" variant="filled"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            fullWidth />
        </Grid>

        <Grid item xs={12} sm={12} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="In a month with fantastic sales, what is the monthly amount you think you will charge using Goldberg Funds ? *" variant="filled"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            fullWidth />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="What is the average transaction amount ? *" variant="filled"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            fullWidth />
        </Grid>

        <Grid item xs={12} sm={8} sx={{ textAlign: "left" }} >
            <TextField id="filled-basic" label="What is the highest amount you would ever charge on a particular transaction ? *" variant="filled"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            fullWidth />
        </Grid>

        {/* Bank Details */}

      </Grid>
    </div>
  )
}

export default Step2