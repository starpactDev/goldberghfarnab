import { Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import "../../Home.css"
import Homeslider from './Homeslider'
import bg1 from "../../images/bg1.png"


function Homebanner() {
  return (    
    <div className="HomeBannerBackground" >
      <div style={{ position: "absolute", height: "inherit", width: "100%", backgroundImage: `url(${bg1})`, top: 0, left :0 }}>
        
      </div>
      <Homeslider/>
             
    </div>
  )
}

export default Homebanner