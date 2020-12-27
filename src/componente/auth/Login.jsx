import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import userService from '../../services/UserService';
const useStyles = makeStyles((theme) => ({
    container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"400px"
    },
    chil:{
        width:"400px",
    }
  }));
const Login=(props)=>{
    const classes=useStyles();
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
  return(
      <div><h1>User Login</h1>
      <div className={classes.container}>
          
          <div className={classes.chil}>
              <TextField label="email" value={email} fullWidth onChange={e=>{
                  setEmail(e.target.value);
              }} /> <br/>
              <TextField label="password" type="password" value={password} fullWidth onChange={e=>{
                  setPassword(e.target.value);
              }}/> <br/>
              <Button variant="contained" color="primary"onClick={e=>{
                  userService.login(email,password).then((data)=>{console.log(data); window.location.href="/";}).catch((err)=>{console.log(err);})
              }}>Login</Button>
          </div>
      </div>
      </div>
  );
}

export default Login;