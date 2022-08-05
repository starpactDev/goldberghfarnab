import React, { useEffect } from 'react'
import Homebanner from '../Components/HomePage/Homebanner'
import Section1 from "../Components/HomePage/Section1"
import Section1A from '../Components/HomePage/Section1A'
import Section2 from '../Components/HomePage/Section2'
import Section3 from "../Components/HomePage/Section3"
import Section4 from '../Components/HomePage/Section4'


function HomePage() {

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | Home "
  }, [])
  

  return (
    <div>        
        <Homebanner/>
        <Section1A/>
        <Section1/>
        <Section2/>
        <Section4/>
        <Section3/>
        
    </div>
  )
}

export default HomePage