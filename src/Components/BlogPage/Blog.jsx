import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card1 from "../../images/card1.jpg"

function Blog() {
    return (
        <div>
            <Card sx={{ maxWidth: "100%" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Card1}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" my = { 2 }>
                            Blog Heading Text
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et molestias neque, 
                            quidem praesentium tenetur sit eos ipsum corporis veritatis, 
                            velit harum, animi quibusdam adipisci obcaecati cum a quasi soluta?
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Blog