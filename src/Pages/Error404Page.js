import styled from '@emotion/styled';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import HeroBanner from '../Components/AllComponents/HeroBanner';
import PageNotFound from "../images/404.gif"

function Error404Page() {

    const pageName = "404 Page Not Found"
    const breadCrumb = ["Home", "404 Page Not Found"]

    const BigText = styled(Typography)(({ theme }) => ({
        fontWeight: "bold",
        background: "-webkit-linear-gradient(#f7c202, #473906)",
        textAlign: "center",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",

    }));

    useEffect(() => {
        document.title = " Goldberg Hedge Funds | 404 Page Not Found "
      }, [])

    return (
        <div>
            <HeroBanner pageName={pageName} breadCrumb={breadCrumb} />
            <Container>
                <Paper sx={{ py: 12, my: 12 }}>
                    <Grid container>
                        <Grid item xs = { 12 }>
                            <img src={PageNotFound} alt="image page not found" />
                        </Grid>

                        <Grid item xs = { 12 } px = { 24 } sx={{my: 4}}>
                            <Typography variant='h4'>
                                Page you are looking for does not exist!!!
                            </Typography>
                        </Grid>

                        <Grid item xs = { 12 } px = { 24 } sx={{my: 4}}>
                            <Link to="/">                            
                                <Button variant="bold">Go back to Home</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Error404Page