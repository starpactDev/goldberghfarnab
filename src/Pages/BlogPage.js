import styled from '@emotion/styled'
import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import HeroBanner from '../Components/AllComponents/HeroBanner'
import Blog from '../Components/BlogPage/Blog'

function BlogPage() {
  const pageName = "Blog"
  const breadCrumb = ["Home", "Blog"]

  const BigText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    background: "-webkit-linear-gradient(#f7c202, #473906)",
    textAlign: "center",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

  }));

  useEffect(() => {
    document.title = " Goldberg Hedge Funds | Blogs "
  }, [])

  return (
    <div>
      <HeroBanner pageName={pageName} breadCrumb={breadCrumb} />
      <Paper sx={{ mx: 10, mt: 20, pb: 8 }}>
        <Container>
          <Grid container spacing = { 8 }>
            <Grid item md = { 12 } xs= { 12 } >
              <BigText variant="h1"> Blogs </BigText>
            </Grid>

            <Grid item md = { 6 } sm = { 4 }>
              <Blog/>
            </Grid>
            <Grid item md = { 6 } sm = { 4 }>
              <Blog/>
            </Grid>
            <Grid item md = { 6 } sm = { 4 }>
              <Blog/>
            </Grid>
            <Grid item md = { 6 } sm = { 4 }>
              <Blog/>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}

export default BlogPage