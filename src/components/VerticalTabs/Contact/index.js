import React from 'react';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { yellow,red,green } from '@material-ui/core/colors';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import { FormControl,InputLabel,Input,FormHelperText,FormGroup } from '@material-ui/core';
import CountactUs from './Form';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export default function Contact(){
    return (
        <Grid container sm={12}>
            <Grid xs={12} sm={4}>
                <h5><HomeWorkRoundedIcon  style={{ color: yellow[800] }}  fontSize="large" /> Our Address :</h5>
                <address>The Book Shop,<br/>
                    Galle Road,<br/>
                    Colombo 7
                </address>
                <h5><CallIcon style={{ color: "#009688" }} fontSize="large"/> : 071 2345678</h5>
                <h5><EmailIcon style={{ color: red[600] }} fontSize="large"/>  : <a style={{ color: "#212121" }} href="thebookshop@gmail.com">thebookshop@gmail.com</a></h5>
                <br/>
                <Grid container xs={12} sm={12}>
                    <table>
                        <tr>
                            <th><a href="www.facebook.com"><FacebookIcon style={{ fontSize: 40, color:"#3b5998" }}/></a></th>
                            <th><a href="www.instagram.com"><InstagramIcon style={{ fontSize: 40, color:"#e4405f" }}/></a></th>
                            <th><a href="www.linkedin.com"><LinkedInIcon style={{ fontSize: 40, color:"#0e76a8" }}/></a></th>
                            <th><a href="www.youtube.com"><YouTubeIcon style={{ fontSize: 40, color:"#FF0000" }}/></a></th>
                            <th><a href="www.twitter.com"><TwitterIcon style={{ fontSize: 40, color:"#00acee" }}/></a></th>
                            <th><a href="www.whatsapp.com"><WhatsAppIcon style={{ fontSize: 40, color:"#4fce5d" }}/></a></th>
                        </tr>
                    </table>
                </Grid>
            </Grid>
            <Grid  sm={8}>
             <CountactUs/>
            </Grid>
        </Grid>
    );
}