import React from 'react'
import { Box, Container } from '@mui/material'
import SectionHeading from '../AllComponents/SectionHeading'
import SliderGeneral from '../AllComponents/SliderGeneral'

const text = {
    "headingText" : "Lorem ipsum dolor sit amet",
    "subHeading" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

function Section3() {
  return (
    // lg: "10%", md: "10%", sm: "0%", xs: "0%" 
    
        <Box sx={{ pt: 8, mt : 6, mb: 12 }} >
            <Container>
                <SectionHeading heading={text.headingText} subheading = { text.subHeading }/>                      
                <SliderGeneral/>
            </Container>
        </Box>
    
  )
}

export default Section3