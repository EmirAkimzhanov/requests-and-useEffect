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
    const res = await axios.get('http://localhost:3000/cars');
    const data = res.data; // массив объектов с информацией о машинах
    console.log(data);
    setData(res.data)
  }
  
useEffect(()=>{
  getCardsInfo();
},[])




return (
    <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-between'  , }}>
      {
        data?.map((item , index)=>{
         return(
          <Card key={index} sx={{ maxWidth: 345 , marginBottom:'3%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item?.imageUrl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.carName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
         )
        })
      }
    </div>
  );
  
}