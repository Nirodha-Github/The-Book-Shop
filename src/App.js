import logo from './logo.svg';
import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { typography } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import cover from './image/bookCover.jpg';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import VerticalTabs from './components/VerticalTabs';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/*Image*/}
      <Grid container xs={12} sm={12}>
      <img src={cover}  style={{ height: '10em' ,width:'100%',margin:'0px',padding:'0px'}} />
      </Grid>

      {/*containert*/}
      
      
      <VerticalTabs/>
      
      
      {/*footer*/}
      <Grid container xs={12} sm={12} m={0} p={0} style={{ backgroundColor: '#455a64',height: '6.5em'}} >
        <Grid item sm={4}></Grid>
        <Grid item xs={12} sm={4}><center><br/><br/>&copy; Copyright 2021, The Book Shop</center></Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
