import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BlogComponent(props) {

  return (
    <Card style={{backgroundColor:"#2D2D2D"}} sx={{ maxWidth: 345, minWidth:250, height:245}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/8/8d/Caiman_Lizard.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom color="white" variant="h4" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
          </CardActionArea>
    </Card>
  );
}