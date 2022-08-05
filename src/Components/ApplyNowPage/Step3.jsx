import React, { useState } from 'react'
import { Autocomplete, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import States from '../../Data/States'

function Step3() {
  const [wirelessTerminal, setWirelessTerminal] = useState("")
  const [posSystem, setPosSystem] = useState("")

  return (
    <div>

      <Grid container spacing={6} sx={{ mt: 6 }}>
        <Grid item xs={12} sm={6} sx={{ textAlign: "left" }} >
          {/* TODO: use state */}
          <Typography variant='caption'>Keep in mind most businesses use a wired terminal</Typography>
          {/* <TextField id="filled-basic" label="Will you need a wireless terminal for your business ? *" variant="filled" fullWidth /> */}
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-filled-label"> Will you need a wireless terminal for your business ? * </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={wirelessTerminal}
              fullWidth
              sx={{ textAlign: "left" }}
              onChange={(e) => { setWirelessTerminal(e.target.value) }}
            >
              <MenuItem value="">
                <em>Select One</em>
              </MenuItem>
              <MenuItem value="Yes">Yes, I need</MenuItem>
              <MenuItem value="No">No, I don't.</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: "left" }} >
          {/* TODO: use state */}
          <Typography variant='caption'>Keep in mind most businesses, even restaurants, will not require this</Typography>
          {/* <TextField id="filled-basic" label="Will you need a wireless terminal for your business ? *" variant="filled" fullWidth /> */}
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-filled-label"> We provide a free basic terminal. Will You need a POS system ? * </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={posSystem}
              fullWidth
              sx={{ textAlign: "left" }}
              onChange={(e) => { setPosSystem(e.target.value) }}
            >
              <MenuItem value="">
                <em>Select One</em>
              </MenuItem>
              <MenuItem value="Yes">Yes, I need</MenuItem>
              <MenuItem value="No">No, I don't.</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} sx={{ textAlign: "left", mb: -4 }} >
          <Typography variant="subtitle1" fontSize="large">
           If we need to contact you regarding this application, who we may contact ? *
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} >
          <TextField id="filled-basic" label="Firstname *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} >
          <TextField id="filled-basic" label="Lastname *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={4} >
          <TextField id="filled-basic" label="Position *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }} >
          <TextField id="filled-basic" label="Phone Number *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ textAlign: "left" }} >
          <TextField id="filled-basic" label="Email *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={12} sx={{ textAlign: "left", mb: -4 }} >
          <Typography variant="subtitle1" fontSize="large">
           Where should we ship the merchant ? *
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} >
          <TextField id="filled-basic" label="Street *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} >
          <TextField id="filled-basic" label="City *" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <Autocomplete
                        disablePortal
                        id="size-small-filled-multi"
                        options={States}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} variant="filled" label="States" />}
                    />
          </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: "left" }} >
          <TextField id="filled-basic" label="ZIP *" variant="filled" fullWidth />
        </Grid>

        

      </Grid>
    </div>
  )
}

export default Step3