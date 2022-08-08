import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function MediaCard(props) {
    const smW = props.smW ? props.smW : 6
    return (
        <Grid item xs={12} sm={smW}>
            <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title1? props.title1: "Lorem Ipsum"} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.text? props.text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus laboriosam voluptatibus minima libero pariatur "}
                        
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MediaCard;
