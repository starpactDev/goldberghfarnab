import styled from '@emotion/styled';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit'
import FlipCard from './FlipCard';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
}));

const BigText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    background: "-webkit-linear-gradient(#f7c202, #473906)",
    textAlign: "center",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

}));

function Section1() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "62px" }}>
            <Paper elevation="2" sx={{ width: "92%", pt: 12 }}>
                {/* Big Text */}
                <Grid container sx={{ paddingLeft: { md: 18, lg: 28, xs: 0 }, paddingRight: { md: 24, lg: 36, xs: 0 } }}>

                    <Grid item xs={12} sm={4} md={4} sx={{ py: 2 }}>
                        <Item elevation={0} >
                            <BigText variant="h1">
                                76+
                            </BigText>
                            <Typography variant="body1">
                                Companies in Funded
                            </Typography>

                        </Item>

                    </Grid>

                    <Divider orientation='verticle' flexItem sx={{ borderWidth: "thin", marginLeft: "-2px" }} />

                    <Grid item xs={12} sm={4} md={4} sx={{ py: 2 }}>
                        <Item elevation={0} >
                            <BigText variant="h1">
                                76+
                            </BigText>
                            <Typography variant="body1">
                                Happy Clients
                            </Typography>
                        </Item>
                    </Grid>

                    <Divider orientation='verticle' flexItem sx={{ borderWidth: "1px", marginLeft: "-2px" }} />

                    <Grid item xs={12} sm={4} md={4} sx={{ py: 2 }}>
                        <Item elevation={0} >
                            <BigText variant="h1">
                                76+
                            </BigText>
                            <Typography variant="body1">
                                Countries Accross the world
                            </Typography>
                        </Item>
                    </Grid>

                </Grid>
                {/* Big Text */}

                {/* Flip Card Section */}

                <Grid container spacing={12} alignItems={"center"} justifyContent={"center"} sx={{ py: 12, px: { md: 8, lg: 12, sm: 8, xs: 6 } }}>

                    <Grid item xs={12} sm={5} md={5} px={2}>
                        {/* TODO: Adjust the size of the card */}
                        <Paper elevation={2} sx={{ width: "100%", height: "462px" }}>
                            <FlipCard></FlipCard>
                        </Paper>
                    </Grid>

                    <Grid container item spacing={4} xs={12} sm={7} md={7} px={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item elevation={0} sx={{ textAlign: "left" }}>

                                <DashboardCustomizeIcon fontSize='large' sx= {{ color: "#f7c202" }} />
                                
                                <Typography variant='h6' pt={1} pb={2} fontWeight={"bolder"} >
                                    Custom Design
                                </Typography>
                                <Typography variant='body2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item elevation={0} sx={{ textAlign: "left" }}>
                                <DesignServicesIcon fontSize='large' sx= {{ color: "#f7c202" }} />
                                <Typography variant='h6' pt={1} pb={2}  fontWeight={"bolder"}>
                                    Build From Scratch
                                </Typography>
                                <Typography variant='body2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item elevation={0} sx={{ textAlign: "left" }}>
                                <ImportantDevicesIcon fontSize='large' sx= {{ color: "#f7c202" }} />
                                <Typography variant='h6' pt={1} pb={2} fontWeight={"bolder"}>
                                    Responsive Design
                                </Typography>
                                <Typography variant='body2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item elevation={0} sx={{ textAlign: "left" }}>
                                <VerticalSplitIcon fontSize='large' sx= {{ color: "#f7c202" }}/>
                                <Typography variant='h6' pt={1} pb={2} fontWeight={"bolder"}>
                                    Unique Design
                                </Typography>
                                <Typography variant='body2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Flip Card Section */}

            </Paper>
        </div>
    )
}

export default Section1