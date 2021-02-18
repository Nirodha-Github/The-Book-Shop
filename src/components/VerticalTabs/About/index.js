import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';

import { styled } from '@material-ui/core/styles';

const MyCard = styled(Card)({
  background: 'linear-gradient(45deg, #ab003c 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 2,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding: 3,
  fullWidth:'true',
  m:0
});
export default function About(){
    return (
        <Grid container xs={12} sm={12}>
            
                <MyCard>
                    <CardHeader title="About The Book Shop"/>
                    <CardContent><p>This is our book shop web site and you can search,read ,buy books.In 2020 ,we built our book shop in colombo and Mr.Perea was founder the shop.You can get many bonus when buy books.
                        About The Book Shop. <br/><br/><i>Read and Imporve your knowledge...</i></p></CardContent>
                </MyCard>
            
        </Grid>
    );
}