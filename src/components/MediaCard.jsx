import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useEffect } from 'react';
export default function MediaCard() {
  const [data ,setData] = React.useState(null)

  const getCardsInfo=async()=>{
    const res = await axios(`http://localhost:3000/0`);
    setData(res.data)
  }
  
useEffect(()=>{
  getCardsInfo();
},[])


  return (
    <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-between'  , }}>

        <Card sx={{ maxWidth: 345 , marginBottom:'3%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={data?.imageUrl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.carName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>



    </div>
  );
  
}