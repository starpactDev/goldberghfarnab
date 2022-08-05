import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, {useEffect} from 'react'
import HeroBanner from '../Components/AllComponents/HeroBanner'
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';

const pageName = "Contact Us"
const breadCrumb = ["Home", "Contact Us"]

const color = "grey"

function ContactUsPage() {

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | Contact Us "
  }, [])

  return (
    <div>
      <HeroBanner pageName={pageName} breadCrumb={breadCrumb} />
      <Box pt={12}>
        <Container>
          <Paper elevation={2} >
            <Grid container py={12} >
              <Grid item xs={12} sm={6} textAlign="left" sx={{ pl: { xs: 6, sm: 12 }, pr: { xs: 6, sm: 6 } }}>
                <Typography variant='h4'>
                  Contact Details
                </Typography>

                <Box sx = {{ paddingTop: 4 }}>                  
                  
                    <Box sx={{ display: "flex", pt: 4 }} fontWeight="bold">
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

                    <Box sx={{ display: "flex", pt: 2 }} color={color} fontWeight="bold">
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

                    <Box sx={{ display: "flex", pt: 2 }} fontWeight="bold" color={color} >
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

                    <Box sx={{ display: "flex", pt: 2 }} fontWeight="bold" color={color}>
                      <Box width="15%" >
                        <LanguageIcon />
                      </Box>
                      <Box>

                        <Typography variant='h8' pt={2}>
                          <Link color="inherit" style={{ textDecoration: 'none' }}>
                            <a href="https://goldbergpay.com" target="_blank">
                            www.goldberghedgefunds.com
                             www.goldbergpay.com
                            </a>
                          </Link>

                        </Typography>

                      </Box>
                    </Box>
                  </Box>
                
              </Grid>
              <Grid item xs={12} sm={6} sx={{ pl: { xs: 6, sm: 6 }, pr: { xs: 6, sm: 12 } }}>
                <Box  >
                  {/* Form */}
                  <TextField id="standard-basic" label="Full Name" variant="standard" fullWidth />
                  <TextField id="standard-basic" label="Email" variant="standard" fullWidth sx={{ mt: 2 }} />
                  <TextField id="standard-basic" label="Phone" variant="standard" fullWidth sx={{ mt: 2 }} />
                  <TextField id="standard-basic" label="Subject" variant="standard" fullWidth sx={{ mt: 2 }} />
                  <TextField
                    id="standard-multiline-basic"
                    label="Message"
                    multiline
                    rows={4}
                    variant="standard"
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                  <Button variant="bold" sx={{ mt: 4 }}>
                    Submit
                  </Button>
                  {/* Form */}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      <Box sx = {{ mt : 12 }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53630.51099531483!2d-96.45382093631295!3d32.847715634547164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5324e8c64cc08deb!2sGoldberg%20HedgeFunds!5e0!3m2!1sen!2sin!4v1652455285156!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </div>
  )
}

export default ContactUsPage