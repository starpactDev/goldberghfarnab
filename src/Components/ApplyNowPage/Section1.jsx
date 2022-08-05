import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Section1() {
    return (
        <div>
            <Container>
                <Paper sx = {{ mt : 12 }}>
                    <Grid container>
                        <Grid sm = { 12 } xs = { 12 } py = { 12 } px = { 12 }>
                            <Typography variant='h6'>
                                Apply Now Form
                            </Typography>
                            <Typography variant='body2' mt={4}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates eveniet fugiat corporis unde rem optio sapiente aliquam ducimus quos sunt consectetur laudantium deserunt voluptate corrupti, enim nostrum maiores ratione!
                            </Typography>

                        </Grid>
                    </Grid>
                </Paper>
               
            </Container>
        </div>
    )
}

export default Section1