import React from 'react'
import { Box, Typography } from '@mui/material'
import { grey } from "@mui/material/colors"

function SectionHeading( {heading, subheading} ) {
  return (
    <Box pb = { 12 }>
        <Typography variant='h3' fontWeight = { "bold" } >
            {heading}
        </Typography>
        <Typography py = { 2 } variant="h6" color = { grey[600] } px = { { sm:2, md:32 } }>
            {subheading}
        </Typography>
        
    </Box> 
  )
}

export default SectionHeading