import React from 'react'
import { Box, Container, Grid, Link, Paper, styled, Typography } from '@mui/material'
import Logo from "../../images/logo.png"
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Footer.css"
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import FooterBackground from "../../images/footerBackground.png"
import NewsLetter from './NewsLetter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';



const color = "#6a070c";

const Link1 = styled(Link)(({ theme }) => ({
    color: color,
    cursor: "pointer",
    textDecoration: "none"
}));



function Footer() {
    return (
        // background: "rgb(71,57,6)", background: "linear-gradient(0deg, rgba(71,57,6,1) 18%, rgba(94,76,20,1) 34%, rgba(255,209,117,1) 81%)"
        <Box sx={{ py: 0, backgroundColor: "#2a2b2b", backgroundImage: `url(${FooterBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "luminosity" }}>
            <Container>
                <Grid container >

                    {/* 1st Column */}
                    <Grid item xs={12} sm={4} textAlign="left" >
                        <Paper elevation={0} sx={{ border: "none", background: "transparent", py: 6, px: 6 }} >
                            <img src={Logo} alt="Logo of Goldberg Hedgefunds" style={{ height: "62px" }} />

                            {/* Address */}

                            <Box sx={{ display: "flex", pt: 4 }} color={color} fontWeight="bold">
                                <Box width="15%" >
                                    <BusinessIcon />
                                </Box>
                                <Box>
                                    <Typography variant='h8' pt={2}>
                                        201 Laurence Drive, Suite 203, <br /> Heath, Texas 75032
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Phone */}

                            <Box sx={{ display: "flex", pt: 2 }} color={color}>
                                <Box width="15%" >
                                    <LocalPhoneIcon />
                                </Box>
                                <Box>
                                    <Typography variant='h8' pt={2}>
                                        (212) 537-6588
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Mail */}

                            <Box sx={{ display: "flex", pt: 2 }} color={color}>
                                <Box width="15%" >
                                    <MailIcon />
                                </Box>
                                <Box>
                                    <Typography variant='h8' pt={2}>
                                        contact@goldberghedgefunds.com
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Website */}

                            <Box sx={{ display: "flex", pt: 2 }} color={color}>
                                <Box width="15%" >
                                    <LanguageIcon />
                                </Box>
                                <Box>

                                    <Typography variant='h8' pt={2}>
                                        <Link>
                                            <a href="https://goldbergpay.com" target="_blank">
                                            www.goldberghedgefunds.com
                                            www.goldbergpay.com
                                            </a>
                                        </Link>

                                    </Typography>

                                </Box>
                            </Box>

                        </Paper>
                    </Grid>

                    {/* 1st Column */}

                    {/* Second Column */}

                    <Grid container xs={12} sm={5} py={6} color="black">
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" >
                                Quick Links
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ textAlign: "left", pl: 8, pr: { sm: 4, xs: 8 } }}>
                            <Typography pt={1}>
                                <Link1 to="" >Home Page</Link1>
                            </Typography>

                            <Typography pt={1}>
                                <Link1 to="" >About Us</Link1>
                            </Typography>

                            <Typography pt={1}>
                                <Link1 to="" >Services</Link1>
                            </Typography>

                            <Typography pt={1}>
                                <Link1 to="" >Blog</Link1>
                            </Typography>


                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: "left", pl: { sm: 2, xs: 8 }, pr: { sm: 4, xs: 8 } }}>
                            <Typography pt={1}>
                                <Link1 to="" >Terms & Conditons</Link1>
                            </Typography>

                            <Typography pt={1}>
                                <Link1 to="" >Privacy Policy</Link1>
                            </Typography>

                            <Typography pt={1}>
                                <Link1 to="" >General Public Interest</Link1>
                            </Typography>

                            <Typography pt={1}>
                                <Link1 to="" >Blog</Link1>
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Second Column */}

                    {/* 3rd Column */}

                    <Grid container xs={12} sm={3} py={6} >
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h6" color="black">
                                Subscribe Our News Letter
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <NewsLetter />
                        </Grid>

                        <Grid item xs={12} sm={12} textAlign="left" sx = {{ pt : { xs: 2 } }}>
                            <Box sx={{ backgroundColor: "rgba(252, 252, 252, 0.4)", backdropFilter: "blur(8px)", px: 4, py: 2, borderRadius: "12px" }}>
                                <Typography variant="h8" fontWeight="bold"> We are Social</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
                                    <FacebookRoundedIcon className='icon-grow' sx={{ color: "#4064AC", fontSize: "32px" }} />
                                    <InstagramIcon className="icon-grow" sx={{ color: "#A233AB", fontSize: "32px" }} />
                                    <LinkedInIcon className="icon-grow" sx={{ color: "#0C63BC", fontSize: "32px" }} />
                                    <YouTubeIcon className="icon-grow" sx={{ color: "#FF0000", fontSize: "32px" }} />
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                    {/* 3rd Column */}

                </Grid>
            </Container>

            <Box sx={{ py: 2, backgroundColor: "#141202", display: "flex", justifyContent: "center", alignItems: "center" }}>
                
                    <Typography color = "#d9d8d4">
                        All rights reserved. Goldberg Hedge Funds &copy; 2022. 
                    </Typography>
                
                    <Typography color = "#d9d8d4" pl = { 1 }>
                        Build By <a href="https://starpactglobal.com" target = "_blank" style = {{ textDecoration : "none", color: "inherit" }}> Starpact Global Services </a>
                    </Typography>
            
            </Box>
        </Box>

    )
}

export default Footer