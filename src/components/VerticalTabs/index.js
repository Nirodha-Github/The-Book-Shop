import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Store from './Store';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import './style.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin:'5px',
    padding:'10px'
  },
  tabs: {
   
    borderRight: `1px solid ${theme.palette.divider}`,
    
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    
    <div className={classes.root} >
       <Grid container xs={12} sm={12}>
      <Grid item xs={4} sm={2}>
        <center><LocalLibraryRoundedIcon style={{fontSize:"50"}} /></center>
        <h1>The B00k Shop</h1>
        <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        margin="0px"
        
       
        className={classes.tabs}>
        
        <Tab icon={<HomeRoundedIcon fontSize="small" />}  label="Home" {...a11yProps(0)} />
        <Tab icon={<InfoRoundedIcon fontSize="small" />} label="About us" {...a11yProps(1)} />
        <Tab icon={<MenuBookRoundedIcon fontSize="small" />} label="Store" {...a11yProps(2)} />
        <Tab icon={<PermContactCalendarRoundedIcon fontSize="small" />} label="Contact us" {...a11yProps(3)} />
      </Tabs>
      </Grid>
      <Grid item xs={8} sm={10}  className="store">
       
      <TabPanel value={value} index={0}>
        <Box bgColor="primary.main"><Home/></Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box><About/></Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Box><Store/></Box> 
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box><Contact/></Box>
      </TabPanel>
      </Grid>
      </Grid>
    </div>
    
  );
}


