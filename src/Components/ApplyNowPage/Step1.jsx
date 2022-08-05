import React, { Fragment, useState } from 'react'
import { Autocomplete, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import States from '../../Data/States';


function Step1() {
    const [businessName, setBusinessName] = useState("");
    const [legalName, setLegalName] = useState("");
    const [tradeName, setTradeName] = useState("");
    const [businessType, setBusinessType] = useState("")
    const [otherBusinessDescription, setOtherBusinessDescription] = useState("")

    function handleBusinessName(value, nameType) {

        if (nameType === "tradeName") {
            setTradeName(value)
            setBusinessName(value)
        }
        else {
            setLegalName(value)
            if (tradeName === "") {
                setBusinessName(value)
            }

        }

        // console.log(tradeName, legalName)

        // if( tradeName !== "" )
        //     setBusinessName( tradeName )
        // else
        //     setBusinessName( legalName )
    }

    const handleBusinessType = (value) => {
        setBusinessType(value)
    }

    const handleOtherBusinessDescription = (value) => {
        setOtherBusinessDescription(value)
        console.log(value.length)
    }

    return (
        <div>
            <Grid container spacing={6} sx={{ mt: 6 }}>
                <Grid item xs={12} sm={6} >
                    <TextField id="filled-basic" label="What is the legal name of your business ? *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "legalName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <TextField id="filled-basic" label="What is the trade name ? (name of your business, if any)" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <FormControl variant="filled" fullWidth>
                        <InputLabel  id="demo-simple-select-filled-label"> What type of business is {businessName} ?</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={businessType}
                            onChange={(e) => handleBusinessType(e.target.value)}
                            fullWidth
                            sx={{ textAlign: "left" }}

                        >
                            <MenuItem value="">
                                <em>Select One</em>
                            </MenuItem>
                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                            <MenuItem value="Retail">Retail</MenuItem>
                            <MenuItem value="Services">Services</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} >
                    {businessType === "Others" &&

                        <TextField id="filled-basic"
                            label="Describe your business"
                            variant="filled"
                            multiline rows={4}
                            onChange={(e) => handleOtherBusinessDescription(e.target.value)}
                            fullWidth
                            helperText={otherBusinessDescription === "" ? "Write within 50 characters" : `Remaining characters: ${50 - otherBusinessDescription.length}`}
                            inputProps={{
                                max: 50,
                            }}
                            error={otherBusinessDescription !== "" && otherBusinessDescription.length > 50} />

                    }
                </Grid>


                {/* Business Address */}

                <Grid item xs={12} sm={12} sx={{ mt: 4, textAlign: "left" }}>
                    {/* TODO: use state */}
                    <Typography variant="subtitle1" fontSize="large"> What is your main address of your business? </Typography>
                </Grid>

                <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label="Street" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label="City" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
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

                <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label="ZIP" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label="What is the EIN of Your Business ? *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label="What is the Business Phone Number ? *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={6} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label="What is the Business Webiste ? *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                {/* Business Address */}

                {/* Business Owner */}

                <Grid item xs={12} sm={12} sx={{ mt: 4, textAlign: "left" }}>
                    {/* TODO: use state */}
                    <Typography variant="subtitle1" fontSize="large"> Tell Us about the business owners </Typography>
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" First Name *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" Last Name * " variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" Phone Number * " variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" Email * " variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" Street *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" City *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" State *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" ZIP *" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")} fullWidth />
                </Grid>

                <Grid item xs={12} sm={4} >
                    {/* TODO: use state */}
                    <TextField id="filled-basic" label=" Ownership % *" type="number" variant="filled" onChange={(e) => handleBusinessName(e.target.value, "tradeName")}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            max: 100,
                            min : 0,
                        }}
                        
                        fullWidth />
                </Grid>


                {/* Business Owner */}




            </Grid>
        </div>
    )
}

export default Step1