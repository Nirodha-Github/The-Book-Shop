import React from 'react';
import Grid from '@material-ui/core/Grid';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import person from './person/images.jpg';

const defaultProps = {
  bgcolor: '#bbdefb',
borderColor:"#2196f3",
color:'#0d47a1',
  m: 1,
  border: 1,
  
borderRadius:16,
};

export default function Home(){
    return(
        <div>
        <Grid container direction="row" justify="space-between" alignItems="center" item xs={12} sm={12}>
            <Alert severity="success"><Grid container direction="row" sm={12}><Grid xs={12} sm={10} >“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”<br/><p textAlign="right"><em>-Charles W. Eliot</em></p></Grid>
            <Grid sm={2}><img height="150px" src={person}/></Grid></Grid>
            <br/>
            </Alert> 
        </Grid>
           
        <center><h3 style={{color:"#1a237e"}}>Our categories</h3>
        <Grid container direction="row" justify="space-between" alignItems="center" item xs={12} sm={12}>
            <Grid xs={12} sm={4}><Box   {...defaultProps} p={1}>Novels</Box></Grid>
            <Grid xs={12} sm={4}><Box {...defaultProps} p={1}>Fairy Tales</Box></Grid>
            <Grid xs={12} sm={4}><Box  {...defaultProps} p={1}>Short Stories</Box></Grid>
        </Grid>
        
        <Grid container direction="row" justify="space-evenly" alignItems="center" item sm={12}>
            <Grid item sm={2}> </Grid>
            <Grid item xs={12} sm={4}><Box {...defaultProps} p={1}>Educational</Box></Grid>
            <Grid item xs={12} sm={4}><Box {...defaultProps} p={1}>Other books</Box></Grid>
            <Grid item sm={2}> </Grid>
        </Grid>
        </center>
        </div>
    );
}