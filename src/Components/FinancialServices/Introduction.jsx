import styled from '@emotion/styled';
import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const BigText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    background: "-webkit-linear-gradient(#f7c202, #473906)",
    textAlign: "center",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  
  }));

function Introduction() {
  return (
    <div>
        <Container>
            <Paper sx = {{ px : 12, py : 12, my : 12 }}>
                <Grid container>
                    <Grid item xs = { 12 } sm = { 12 }>
                        <BigText variant="h2">
                            Financial Options
                        </BigText>
                        
                    </Grid>
                    <Grid item xs = { 12 } sm = { 12 } sx = {{ pt: 6 }}>
                    <Typography variant="h8" >
                    {/* Financial Options */}
                    We offer a range of financial options for your business. Whether your business needs a Merchant Cash Ad-vance, Invoice Factoring, or an equipment loan, we got your business covered!
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Paper>
        </Container>
    </div>
  )
}

export default Introduction