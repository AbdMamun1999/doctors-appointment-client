import React from 'react';
import {  Button, Card, CardActions, CardContent, CardMedia , Typography } from '@mui/material'

const SpecialitiesCard = () => {
    return (
        <Card sx={{
            maxWidth: 345 ,
            boxShadow:'0 0 10px 0 rgba(0,0,0,0.4)',
            p:2,
            my:3,
            mx:'auto',
          
            
            '&:hover':{
               boxShadow: '0 0 10px 0 rgba(0,0,0,0.4)',
               borderRadius:'1rem',
               backgroundColor:"bisque"
            }
        }}>
        <CardMedia    
        component='img'
        height= '140'
        image="https://medtriplanner.com/wp-content/uploads/2021/07/Cardiology-1.png"
        title="green iguana"
        sx={{ 
           width:'auto',
           mx:'auto'
        }}
        />
        <CardContent sx={{
        textAlign:'center'
        }}>
        <Typography gutterBottom variant="h5" component="div">
        Gastroenterology
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lizards are a widespread group of squamate reptiles, with over 6,000
         species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        <CardActions>
            
            <Button variant='contained' size="medium" sx={{
               mx:'auto'
              }}>Cardiology</Button>
            </CardActions>
        
        </Card>
    );
};

export default SpecialitiesCard;