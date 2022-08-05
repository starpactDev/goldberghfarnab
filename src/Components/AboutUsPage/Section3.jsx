import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styled from '@emotion/styled';
import { Box } from '@mui/system';

const BigText3 = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    background: "-webkit-linear-gradient(#ff6f91, #473906)",
    textAlign: "left",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

}));

const sections = [
    {
        "heading": "Direct Funder",
        "subHeading": "In-house funds for all the contracts that we close."
    },
    {
        "heading": "We Believe in Customer Service",
        "subHeading": "We’re always here, whether you’re an existing client or look-ing to apply for funding for your business. All clients are as-signed an account manager who they can reach out for any-thing they may need. Call, text or email. Whatever is con-venient for you."
    },
    {
        "heading": "Financing Options to Fit Your Needs",
        "subHeading": "Whether your business needs invoice financing, a Merchant Cash Advance, equipment financing, the ability to accept cre-dit card payments, or you just need to consult your options with one of our specialists, we are here to help."
    },
    {
        "heading": "Have You Been Denied by a Bank or Lender Before?",
        "subHeading": "Most of our clients have applied through a bank or a lender before applying through us. Do you want to know the dif-ference between a bank or big lender and the Goldbergs? Goldberg HedgeFunds specializes in funding small/medium businesses. We make smart human decisions, and we don’t have non sensical rules which alienate the market."
    }
];

function Section3() {
    return (
        <div>
            <Container sx={{ mt: 18 }}>
                <Paper sx={{ pb: 6 }}>
                    <Grid container spacing={6} sx={{ textAlign: "left", px: 8 }}>
                        {sections.map((section, key) => {
                            return (
                                <Grid item sm={6} sx={12}>
                                    <Box sx={{ display: "flex" }}>
                                        <KeyboardDoubleArrowRightIcon sx={{ mt: "2px", color: "#D86B79" }} />
                                        <BigText3 variant="h5">
                                            {section.heading}
                                        </BigText3>
                                    </Box>

                                    <Typography sx={{ mt: 2, textAlign: "justify" }} >
                                        {section.subHeading}
                                    </Typography>

                                </Grid>
                            )
                        })
                        }

                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Section3