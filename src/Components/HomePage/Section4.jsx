import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import SectionHeading from '../AllComponents/SectionHeading'
import image1 from "../../images/image1.jpg"

function Section4() {

    const text = {
        "headingText" : "Lorem ipsum dolor sit amet",
        "subHeading" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }

  return (
    <div>
        <Box sx={{ pt: 8, mt : 6,  }} >
            <Container>
                <SectionHeading heading={text.headingText} subheading = { text.subHeading }/>
                <Grid container >
                    <Grid sm = { 4 } xs = { 12 } sx = {{}}>
                        <Box sx = {{  ml: "100px",  py:12, width: "100%", position: "relative" }}>
                            
                            <img src={image1} alt=""  style={{width: "100%", zIndex: 8, position:"absolute", left: 0,  width: "inherit" }}/>
                        </Box>
                    </Grid>
                    <Grid sm = { 8 } xs = { 12 }>
                        <Paper sx={{ background: "white", zIndex: "99", pl: "132px", pr: 6, py: 12}}>
                            <Typography variant='h4' component="div">
                                Lorem ipsum dolor sit amet consectetur 
                            </Typography>
                            <Typography variant = " h8 " component="div" mt = {4} sx = {{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae minus. Eius ad, voluptates molestiae vitae magnam obcaecati possimus placeat, impedit, voluptatibus unde doloribus quia sequi alias sint officia ea.
                            </Typography>

                            <Typography variant = " h8 " component="div" mt = {4} sx = {{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae minus. Eius ad, voluptates molestiae vitae magnam obcaecati possimus placeat, impedit, voluptatibus unde doloribus quia sequi alias sint officia ea.
                            </Typography>

                            <Typography variant = " h8 " component="div" mt = {4} sx = {{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae minus. Eius ad, voluptates molestiae vitae magnam obcaecati possimus placeat, impedit, voluptatibus unde doloribus quia sequi alias sint officia ea.
                            </Typography>

                            <Typography variant = " h8 " component="div" mt = {4} sx = {{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae minus. Eius ad, voluptates molestiae vitae magnam obcaecati possimus placeat, impedit, voluptatibus unde doloribus quia sequi alias sint officia ea.
                            </Typography>

                            <Typography variant = " h8 " component="div" mt = {4} sx = {{ textAlign: "justify" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae minus. Eius ad, voluptates molestiae vitae magnam obcaecati possimus placeat, impedit, voluptatibus unde doloribus quia sequi alias sint officia ea.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>                      
            </Container>
        </Box>
    </div>
  )
}

export default Section4