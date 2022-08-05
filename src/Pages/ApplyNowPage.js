import React, { useEffect } from 'react'
import HeroBanner from '../Components/AllComponents/HeroBanner'
import FormSection from '../Components/ApplyNowPage/FormSection'
import Section1 from '../Components/ApplyNowPage/Section1'

const breadCrumb = ["Home", "Apply Now"]

function ApplyNowPage() {

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | Apply Now "
  }, [])

  return (
    <div>
        <HeroBanner pageName="Apply Now" breadCrumb={breadCrumb} />
        <Section1/>
        <FormSection/>
    </div>
  )
}

export default ApplyNowPage