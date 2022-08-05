import React from 'react'
import { Box, Grid, Paper, Typography, Container } from '@mui/material'

import MediaCard from './MediaCard'
import Card1 from "../../images/card1.jpg"
import SectionHeading from '../AllComponents/SectionHeading'

const text = {
    "headingText": "Lorem ipsum dolor sit amet",
    "subHeading": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
function Section2() {
    // lg: "10%", md: "10%", sm: "0%", xs: "0%" ==== px padding
    return (

        <Box sx={{ pt: 8, my : 6 }}>
            <Container>
                <SectionHeading heading={text.headingText} subheading={text.subHeading} />
                <Divs />
                <Divs />
                <Divs />
            </Container>
        </Box>

    )
}



function Divs() {

    return (

        <Grid container  spacing = { 4 } pt = { 2 }>
            <Grid item xs = { 12 } sm = { 5 } md = { 4 } sx = {{ py : 2, }}>
                <Paper sx={{ position : "sticky", top : "12vh", py : 6 }}> {/*TODO: check for small devices */}
                    <Typography variant = 'h6'>Some text Content</Typography>
                </Paper>
            </Grid>

            <Grid container item spacing={4} xs={12} sm={7} md={8} sx={{ py: 2, }}>

                <MediaCard image={Card1} />
                <MediaCard image={Card1} />
                <MediaCard image={Card1} />
                <MediaCard image={Card1} />

            </Grid>

        </Grid>

    )

}

export default Section2