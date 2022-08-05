import React from 'react'
import { Box, styled } from "@mui/system";
import Paper from '@mui/material/Paper';
import "../../Home.css"
import bg1 from "../../images/bg1.png"
import { Link } from "react-router-dom"
import { Breadcrumbs,  Typography } from '@mui/material';


const TextBackground = styled(Paper)(({theme}) => ({
    height: "32vh",
    width: "90%",
    marginBottom: "62px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "rgba(252, 252, 252, 0.2)",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("sm")]:{
        width: "70%"
    }
  }));

  const LinkTo = styled(Link)(({theme}) => ({
     color: "#ffffff",
     textDecoration: "none",
     "&:hover": {
         textDecoration: "underline"
     }
  }));

function HeroBanner( { pageName, breadCrumb }) {
    return (
        <div className="HomeBannerBackground" style = {{ height: "60vh" }}>
            <div style={{ position: "absolute", height: "inherit", width: "100%", backgroundImage: `url(${bg1})`, top: 0, left: 0 }}>
                
            </div>
            <TextBackground>
                <Box>
                    <Typography variant="h3" >
                        { pageName }
                    </Typography>
                </Box>
                <br />
                <Box color="inherit">                    
                    <Breadcrumbs separator="›" aria-label="breadcrumb" color="inherit">
                        {/* <Link underline="hover" key="1" color="inherit" > */}
                            <LinkTo to="/" >
                                { breadCrumb[0] }
                            </LinkTo>
                           
                        {/* </Link> */}
                        <Typography key="2" color="inherit">
                            { breadCrumb[1] }
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </TextBackground>
        </div>
    )
}

export default HeroBanner