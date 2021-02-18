import React, {useState,state,Component,useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import './form.css';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width:'270px'
   
    }
  }
}));



function CountactUs() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    const isPhoneValid = phone !== "";

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.");
    }
    if (!isPhoneValid) {
      errors.push("Phone number is not valid, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      alert("Message Sent Successfully");
    }
  };

  return (
    <div className="container">
      <div className="outerFormContainer">
        <div className="innerFormContainer">
         <Grid container sm={12} xs={12}>
          <h3 style={{color:"#1a237e"}}>If you want to contact us ,send a message</h3>
         </Grid> 
          <form className={classes.root} >
            
            <TextField
              
              label="Name"
              placeholder="Enter your name"
              type="text"
              variant="outlined"
              onChange={e => setName(e.target.value)}
            />
                <br/>
            <TextField
              
              label="Email"
              placeholder="Enter your email"
              type="email"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <TextField
              
              label="Phone Number"
              placeholder="Enter your phone number"
              type="text"
              variant="outlined"
              onChange={e => setPhone(e.target.value)}
            />
                <br/>
         
               
            <TextField
             
              label="Message"
              placeholder="Enter your message"
              type="text"
              variant="outlined"
              multiline
              rowsMax="4"
              onChange={e => setMessage(e.target.value)}
            />
           <br/>
            {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul color="#b71c1c" key={index}>{item}</ul>;
                })
              : null}
            
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={formValidation}
            >
              Submit
            </Button>
           
          </form>
            
        </div>
      </div>
    </div>
  );

}
export default CountactUs;
