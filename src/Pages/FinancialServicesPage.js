import React, { useEffect } from 'react'
import HeroBanner from '../Components/AllComponents/HeroBanner'
import Introduction from '../Components/FinancialServices/Introduction'
import Services from '../Components/FinancialServices/Services'

const pageName = "Financial Services"
const breadCrumb = ["Home", "Financial Services"]

function FinancialServicesPage() {

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | Financial Services "
  }, [])

  return (
    <div>
      <HeroBanner pageName={pageName} breadCrumb={breadCrumb}/>
      <Introduction />
      <Services/>
      <Services/>
      <Services/>
      <Services/>
    </div>
  )
}

export default FinancialServicesPage