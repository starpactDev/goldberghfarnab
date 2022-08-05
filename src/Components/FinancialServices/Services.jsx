import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import MediaCard from '../HomePage/MediaCard'
import Card1 from "../../images/card1.jpg"

function Services() {
  return (
    <div>
        <Container>
        <Grid container  spacing = { 4 } pt = { 2 }>
            <Grid item xs = { 12 } sm = { 5 } md = { 4 } sx = {{ py : 2, }}>
                <Paper sx={{ position : "sticky", top : "10vh", py : 6 }}> {/*TODO: check for small devices */}
                    <Typography variant = 'h6'>Some text Content</Typography>
                </Paper>
            </Grid>

            <Grid container item spacing={4} xs={12} sm={8} md={8} sx={{ py: 2, }}>

                <MediaCard image={Card1} smW = {12} />
                
                

            </Grid>

        </Grid>
        </Container>
    </div>
  )
}

export default Services