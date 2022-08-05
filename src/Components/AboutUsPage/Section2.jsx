import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'


function Section2() {
    return (
        <>
            <Container sx={{  mt: 12 }}>
                <Paper elevation={4} sx = {{ backgroundImage: "linear-gradient(to right top, #700d74, #8c3593, #a855b2, #c575d3, #e396f4)" }}>
                    <Grid container >
                        <Grid item md = { 8 } xs = { 12 } sx = {{ py : 8, px:8, textAlign: "left" }}>
                            <Typography variant = "h4" color="#ffffff">
                                Let’s get your business the capital it needs, to-day!
                            </Typography>
                        </Grid>
                        <Grid item md = { 4 } xs = { 12 } sx = {{ py : 8, px:8 }}>
                            <Button variant="bold" > 
                                Apply Online
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}

export default Section2