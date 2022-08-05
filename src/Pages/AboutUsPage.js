import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Section1 from '../Components/AboutUsPage/Section1'
import Section2 from '../Components/AboutUsPage/Section2'
import HeroBanner from '../Components/AllComponents/HeroBanner'
import SectionHeading from '../Components/AllComponents/SectionHeading'
import Mission from "../images/mission.png"
import Vision from "../images/vision.jpg"
import Brand1 from "../images/brand1.png"
import Brand2 from "../images/brand2.png"
import Section3 from '../Components/AboutUsPage/Section3'

const pageName = "About Us"
const breadCrumb = ["Home", "About Us"]

function AboutUsPage() {

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | About Us "
  }, [])

  return (
    <div>
        <HeroBanner  pageName={pageName} breadCrumb={breadCrumb}/>
        
        {/* Section 1 */}

        <Section1/>
        <Section2 />
        <Section3/>

        {/* Mission and Vision */}
        <Container  >
          <Grid container mt = { 2 } spacing = { 12 }>
            <Grid item sm = { 6 } xs = {12}>
              <img src={Mission} style={{maxWidth: "100%"}}></img>
            </Grid>
            <Grid item sm = { 6 } xs = { 12 }>              
              <SectionHeading heading="Our Mission" subheading=""/>
              <Typography variant='body1'>
              Our mission is to provide funding to small and medium businesses as needed, and to provide clarity to the business owner as to their financial options for the business.
              </Typography>
            </Grid>
          </Grid>

          <Grid container mt = { 2 } spacing = { 12 }>
            <Grid item sm = { 6 } xs = { 12 } order={{  xs : 2, sm: 1 }}>              
              <SectionHeading heading="Our Vision " subheading=""/>
              <Typography variant='body1'>
              We envision a system to where every small/medium business owner is offered a clear, easy, and compelling way to apply for business capital through their phone, tablet, computer, or any new technology. At Goldberg HedgeFunds we already have an easy online application, motivated and trained staff, and a guiding principle to help every business owner we meet providing the capital their business deserves.
              </Typography>
            </Grid>
            <Grid item sm = { 6 } xs = {12} order={{  xs : 1, sm: 2 }}>
              <img src={Vision} style={{maxWidth: "100%"}}></img>
            </Grid>
            
          </Grid>
        </Container>

        {/* Our Partners */}
{/* 
        <Grid container item >
            <Grid item mt = { 12 } sm = { 12 } xs = { 12 }>
              <SectionHeading heading="Our Partners" subheading="Brands that trust us"/>
            </Grid>
        </Grid>

        <Container>
        
        <Grid container spacing={6} mb={12}>
            
            
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%",  }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
            <Grid item sm = { 2 } xs = { 6 }>
              <img src={Brand2} alt=" brand 1 " style = {{ maxWidth: "100%" }}/>
            </Grid>
          </Grid>
        </Container> */}

        {/* Testimonials */}


    </div>
  )
}

export default AboutUsPage