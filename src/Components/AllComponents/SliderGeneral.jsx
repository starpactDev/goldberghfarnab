import * as React from 'react';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Face from "../../images/face.jpg"
import { Box } from '@mui/material';
// import Styled from "./SliderGeneral.module.css"

// Slick Slider Settings Starts
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplayspeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
// Slick Slider Settings Ends

function SliderGeneral() {
    return (
        <Slider {...settings} >
            {/* {
                items.map((item, key) => {
                    return <Slide item={item} key={key} />
                })
            } */}
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />

        </Slider>
    )
}

function Slide() {
    return (
        // TODO: Check on small Devices
        <Box sx={{  background: "transparent", px: 2 }}>
            <Card width="120px" sx={{  }}>
                {/* <CardMedia sx = {{ borderRadius: "100%" }}
            component="img"
            alt="green iguana"
            height="140"
            image={Face}
        /> */}


                <Box sx={{  display: "flex", width: "100%", py: "22px", alignItems: "center", justifyContent: "center" }} >
                    <Box sx={{ backgroundColor: "blue", width: "100px", height: "100px", borderRadius: "50%", backgroundImage: `url(${Face})`, backgroundSize: "cover" }}></Box>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lorem Ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus laboriosam voluptatibus minima libero pariatur
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>

            </Card>
        </Box>
    )
}

export default SliderGeneral