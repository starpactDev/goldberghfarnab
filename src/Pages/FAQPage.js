import styled from '@emotion/styled'
import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Accordion1 from '../Components/AllComponents/Accordion1'
import HeroBanner from '../Components/AllComponents/HeroBanner'

const pageName = "FAQ"
const breadCrumb = ["Home", "FAQ"]

const BigText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  background: "-webkit-linear-gradient(#f7c202, #473906)",
  textAlign: "center",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

}));

const QnA = [
              {
                question: "Q: Is it true Goldberg HedgeFunds offers same day funding?",
                answer: "A: Yes, most of our clients actually request same day funding. If we receive all of your docu-ments within a reasonable time, we will fund the same business day. For example, if you provide all of the requested funding documents at 1:00 PM CST you can reasonably expect funding to occur the same day if you ask us to do so."
              },
              {
                question: "Q: If I ever need to reach out to someone regarding my current account, past account or if I need additional funding, who should I contact?",
                answer: "A: Go ahead and call, email or text your account manager. All clients are provided an account manager when they have an open account with us. You can think of your account manager as your personal representative who is willing to provide assistance with any current, past or future funding you may need."
              },
              {
                question: "Q: My business does not have “business credit” yet. Will it still qualify for some type of business funding?",
                answer: "A: Of course, we have revenue-based funding options which make it easy for your business to qualify for funding even if you don’t have business credit yet. This is because your current busi-ness performance is your business credit. See, simple yet effective solutions are available here at Goldberg HedgeFunds."
              },
              {
                question: "Q: I’ve had a personal bankruptcy in the past. Can I qualify for anything?",
                answer: "A: If you’re out of bankruptcy, then yes. The truth is most “established lenders” and banks will automatically decline applications which indicate any previous bankruptcy history. We know sometimes life happens. We get it. We don’t auto-decline applications because of past bank-ruptcy history."
              },
              {
                question: "Q: I’ve been declined before, why would I qualify with Goldberg?",
                answer: "A: We’re not a bank. We don’t think like a bank, nor do we think like a big lender (in fact most of the TV lenders you see during commercial breaks are actually owned or affiliated with the banks). We started as a small business, so we understand small businesses. In fact, many of our employees have had experience with small businesses before so we all know what it means to take care of your business. We have real underwriting, that means a person looks at your file and all of the aspects of your business. So even if you have less than stellar credit, that’s perfectly okay. It’s actually quite rare when we encounter a business owner with perfect credit, so we un-derstand and know what to look for in order to qualify your business for funds."
              },
              {
                question: "Q: ¿Hablan español?",
                answer: "A: Claro que sí. La gran mayoría de nuestros empleados hablan español. Entonces llámanos, mándanos un mensaje de texto o un correo electrónico en español, si es más cómodo para ti."
              },
              {
                question: "Q: What are your minimum requirements for my business to get funded?",
                answer: "A: If you can provide us with the most recent 6 months’ worth of bank statements, owner infor-mation (Driver’s License, State ID Card), and an application, you’re 90% there to get funded in terms of paperwork."
              },
              {
                question: "Q: How long does it take to acquire funding if I need funds ASAP?",
                answer: "A: The same business day! We’ll send a wire transfer to your business account so you’ll get it as soon as your bank processes the funds (which is relatively quick, sometime as quick as a few minutes, sometimes a few hours), but in either case, if it’s sent the same day then you’ll get funds that very same day."
              },

]

function FAQPage() {

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | FAQ "
  }, [])

  return (
    <div>
      <HeroBanner pageName={pageName} breadCrumb={breadCrumb} />
      <Container>
        <Paper sx = {{ px: 12, py:12, my: 12 }}>
          <Grid container>
            <Grid item xs = {12} sm = { 12 }>
              <BigText variant="h2">
                FAQ
              </BigText>
            </Grid>
            <Grid item xs = { 12 } sm = { 12 } sx = {{ pt : 12 }}>
              <Accordion1 QnA = {QnA}/>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default FAQPage