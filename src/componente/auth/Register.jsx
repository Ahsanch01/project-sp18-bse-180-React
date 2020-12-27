import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import userService from '../../services/UserService';
import {  toast } from 'react-toastify';
const useStyles = makeStyles((theme) => ({
    container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"500px",
    
    },
    chil:{
        width:"400px",
         
    }
  }));
const Register=(props)=>{
    const classes=useStyles();
    const [name,setName]=React.useState("Ahsan");
    const[email,setEmail]=React.useState("admin@gmail.com");
    const[password,setPassword]=React.useState("Ahsan");
  return(
      <div> <h1>Register User</h1>
      <div className={classes.container}>
          <div className={classes.chil}>
          <TextField label="Name" fullWidth value={name} onChange={e=>{setName(e.target.value)}}/> <br/>
              <TextField label="email" fullWidth value={email} onChange={e=>{setEmail(e.target.value)}} /> <br/>
              <TextField label="password" type="password" fullWidth value={password} onChange={e=>{setPassword(e.target.value)}}/> <br/>
              <Button variant="contained" color="primary" onClick={e=>{
                  userService.register(name,email,password).then(data=>{
                      console.log(data);
                      props.history.push("/login");
                  }).catch(err=>{
                      console.log(err);
                      toast.error(err.response.data ,{
                          position:toast.POSITION.TOP_RIGHT
                      });
                  }) 
              }}>Register</Button>
          </div>
      </div>
      </div>
  );
}

export default Register;