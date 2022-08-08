import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import styled from '@emotion/styled';
import AboutUs from "../../images/about-us.jpeg"
import Counter from '../AllComponents/Counter';

const BigText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    background: "-webkit-linear-gradient(#f7c202, #473906)",
    textAlign: "center",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

}));

const BigText2 = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    background: "-webkit-linear-gradient(#ff6f91, #473906)",
    textAlign: "center",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

}));

function Section1() {
    return (
        <div>
            <Paper sx={{ mx: 10, mt: 20, pb: 8 }}>
                <Container>
                    <Grid container spacing={8}>
                        <Grid item md={6} xs={12} >
                            <img src={AboutUs} style={{ maxWidth: "100%" }} />
                        </Grid>

                        <Grid item md={6} xs={12} >
                            <BigText variant="h1"> About Us </BigText>
                            <Typography variant='body2' sx={{ mt: 4, textAlign: "justify" }}>
                                Goldberg HedgeFunds is all about providing funding to small and medium businesses who have been historically under-served by banks and so called “established lenders”. Most of our clients have been previously declined at least once by a bank, or an “established lender”. So, if you think your business doesn’t qualify for funding just because someone said no in the past, make sure you apply with Goldberg.
                            </Typography>
                        </Grid>


                    </Grid>

                    <Grid container mt={8}>
                        <Grid item md={4} xs={3} >
                            <BigText2 variant='h2'>
                                <Counter end="84" />%
                            </BigText2>
                            <Typography variant='h6' >
                                Approval Rate
                            </Typography>
                        </Grid>

                        <Grid item md={4} xs={3} >
                            <BigText2 variant='h2'>
                                <Counter end="95" />%
                            </BigText2>
                            <Typography variant='h6' >
                                Same day funding,
                            </Typography>
                            <Typography variant="body2" color="#9a9c9a">
                                when we receive all funding <br /> documents before 11:00 AM CST.
                            </Typography>
                        </Grid>

                        <Grid item md={4} xs={3} >
                            <BigText2 variant='h2'>
                                <Counter end="100" />%
                            </BigText2>
                            <Typography variant='h6' >
                                All online funding process available.
                            </Typography>
                            <Typography variant="body2" color="#9a9c9a">
                                Use your phone, tablet, or laptop to complete the application. It is that easy.
                            </Typography>

                        </Grid>


                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}

export default Section1