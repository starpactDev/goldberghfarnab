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
      <Services title="Merchant Cash Advance" title1="Merchant Cash Advance (MCA)" text="A revenue-based funding option that’s great if you need
same day funding, your business is new, your
personal/business credit is less than stellar, and in many
other scenarios."/>
      <Services title="Equipment Financing" title1="Equipment Financing" text="Financing your
equipment can be an
affordable and easy
way to get the
commercial equipment
you need for your
business." />
      <Services title="Invoice Factoring" title1="Invoice Factoring" text="If you are waiting on
your customers to pay
you, why not factor
those invoices. This
basically means we buy
your invoices and issue
you money now instead
of waiting on your
customers to pay you." />
      <Services title="Real Estate Financing" title1="Real Estate Financing" text="Whether you need to purchase a commercial property or refinance an existing loan, look no further. Our team has a combined
amount of 50+ years in the real estate financing business." />
    </div>
  )
}

export default FinancialServicesPage