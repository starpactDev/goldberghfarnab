import React from 'react'
import { Container, Grid, Paper } from '@mui/material'
import MultipleStepper from "../AllComponents/MultipleStepper"

function FormSection() {
    return (
        <div>
            <Container>
                <Paper sx={{mt: 12, py: 12, px:12, backgroundImage: " linear-gradient(45deg, rgba(255,255,255,1) 80%, rgba(228,255,143,1) 97%, rgba(249,248,113,1) 100%) " }}>
                    <Grid container>
                        <Grid item sm={12} xs={12} >
                            <MultipleStepper></MultipleStepper>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </div>
    )
}

export default FormSection