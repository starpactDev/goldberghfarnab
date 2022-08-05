import React, { useEffect, useState } from 'react'
import { Grid, Typography, Container, Box, Paper, Card, CardContent, CardActions, Button } from '@mui/material'
import Typed from "react-typed"
import BusinessCard from "../../images/business_card.jpg"
import { Grid3x3Outlined } from '@mui/icons-material';

function Section1A() {
    const colors = ["#845ec2", "#d65db1", "#ff6f91", "#ff9671", "#ffc75f", "#f9f871"];
    const [color, setColor] = useState("");

    useEffect(() => {
        setInterval(async () => {
            let c = await Math.floor(Math.random() * colors.length)
            setColor(colors[c])

        }, 6000)
    }, [])


    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "62px" }}>
                <div style={{ width: "92%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: { sm: "100%", xs: "100%", md: "80%", lg: "60%" }, }}>

                        <Grid container>
                            {/* <Grid item sm={2} xs={4} >
                            <Typography variant='h3' component="span">
                                The 

                            </Typography>
                        </Grid> */}
                            <Grid item sm={5} xs={4} sx={{ textAlign: "right" }}>
                                <Typography variant='h3' component="span" color={color}>
                                    <Typed
                                        strings={["The Cash Flow", "The Funding", "The Checking"]}
                                        typeSpeed={180}
                                        backSpeed={50}
                                        backDelay={60}
                                        loop
                                        smartBackspace={true}

                                    />
                                </Typography>
                            </Grid>
                            <Grid item sm={7} xs={4} sx={{ textAlign: "left" }}>
                                <Typography variant='h3' component="span">
                                    &nbsp; tools you need
                                </Typography>
                            </Grid>

                        </Grid>

                        <Grid conatiner>
                            <Grid item sm={12} xs={12}>
                                <Typography variant='h3' component="h2">
                                    to help grow your business
                                </Typography>
                            </Grid>

                            <Grid item sm={12} xs={12} sx={{ mt: 4 }}>
                                <Typography variant='h6' component="h2" color="#757575">
                                    Do more with financial solutions designed for your small business.
                                </Typography>
                            </Grid>

                        </Grid>

                    </Box>

                </div>
            </div>
            <Container sx={{ mt: 8 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={4} >
                        <Paper elevation={2}>
                            <SingleCard image1={BusinessCard} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <Paper elevation={2}>
                            <SingleCard image1={BusinessCard} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <Paper elevation={2}>
                            <SingleCard image1={BusinessCard} />
                        </Paper>
                    </Grid>

                </Grid>

            </Container>

            <Grid conatiner>
                <Grid item xs={12} sm={12}>
                    <Box  sx={{ pt: 24, pb: 12, mx: "4%", mt: -12, borderRadius : "4px", backgroundImage: "linear-gradient(to right top, #700d74, #8c3593, #a855b2, #c575d3, #e396f4)" }}>
                        <Container>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography variant='h4' fontWeight="bold" fontStyle="italic" color="white">
                                        American Express
                                    </Typography>
                                </Grid>

                                <Grid item xs={8} sx={{ textAlign: "left" }}>
                                    <Typography variant='h6' fontWeight="bold" color="white">
                                        The benefits of Kabbage® with the power of American Express
                                    </Typography>

                                    <Typography variant='body1' mt = { 2 } lineHeight = { 1.2 } color="white">
                                        With the powerful backing of American Express, Kabbage offers a broader set of cash flow management tools to millions of businesses.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </div>

    )
}

function SingleCard({ image1 }) {

    return <Card width="120px" sx={{}}>
        {/* <CardMedia sx = {{ borderRadius: "100%" }}
            component="img"
            alt="green iguana"
            height="140"
            image={Face}
        /> */}


        <Box sx={{ display: "flex", width: "100%", py: "22px", alignItems: "center", justifyContent: "center" }} >
            <Box sx={{ backgroundColor: "blue", width: "100px", height: "100px", borderRadius: "50%", backgroundImage: `url(${image1})`, backgroundSize: "cover" }}></Box>
        </Box>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Lorem Ipsum
            </Typography>
            <Typography variant="body2" color="text.secondary" my={4} px={2} textAlign="justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus laboriosam voluptatibus minima libero pariatur
            </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 6 }}>
            <Button size="small" variant="bold">Learn  More</Button>

        </CardActions>

    </Card>
}

export default Section1A