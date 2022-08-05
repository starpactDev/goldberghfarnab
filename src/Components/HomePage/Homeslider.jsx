import React from "react";
import { styled } from "@mui/system";
import Slider from "react-slick";
import { Grid, Typography } from "@mui/material"
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import image1 from "../../images/slide11.jpg"
import image2 from "../../images/slide2.jpg"
import image3 from "../../images/slide3.jpg"
import Paper from '@mui/material/Paper';

const SliderBase = styled(Paper)({
  height: "62vh",
  width: "90%",
  marginBottom: "62px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundColor: "rgba(252, 252, 252, 0.2)",
  backdropFilter: "blur(4px)",
});



function Homeslider() {

  // Slick Slider Settings Starts
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplayspeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  // Slick Slider Settings Ends

  // Slider content Starts
  const items = [
    {
      "bigText": "The Text 1",
      "smallText": "The Small Text 1",
      "image": image1,
    },
    {
      "bigText": "The Text 2",
      "smallText": "The Small Text 2",
      "image": image2,
    },
    {
      "bigText": "The Text 3",
      "smallText": "The Small Text 2",
      "image": image3,
    }
  ];
  // Slider Content Ends

  return (
    <SliderBase elevation={3}>

      <Slider {...settings} style={{ height: "100%", width: "100%", display: "relative", alignItems: "center", justifyContent: "center" }}>
        {
          items.map((item, key) => {
            return <Slide item={item} key={key} />
          })
        }

      </Slider>

    </SliderBase>
  )
}


function Slide(props) {
  return (

    <Grid container alignItems="center" style={{ height: "62vh" }}>
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}  >

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div >
            <Typography variant='h3'>
              {props.item.bigText}
            </Typography>
          </div>

          <div>
            <Typography variant='h6' sx={{ paddingBottom: 2, flexGrow: 2 }} >
              {props.item.smallText}
            </Typography>
          </div>

          <div >
            <Button size="large" variant='bold' >
              Call Us
            </Button>
          </div>
        </div>



      </Grid>

      <Grid container item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={{}}>
        {/* <img src={props.item.image} style={{width: "100%", objectFit: "cover"}}/> */}
        {/* <Box component="img" src={image1} sx={{ width: "100%"}}/> */}
        {/* <Box backgroundImage={image1} sx={{ height: "57vh", width: "100%" }}/> */}
        <div style={{ height: "70vh", width: "100%", backgroundImage: `url(${image1})`, backgroundSize: "cover" }}>

        </div>
      </Grid>
    </Grid>


  )
}

export default Homeslider;
