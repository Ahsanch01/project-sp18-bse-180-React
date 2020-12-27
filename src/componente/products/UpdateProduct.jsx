import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import productService from '../../services/ProductService';
const UpdateProduct=(props)=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState(0);
    const [address,setAddress]=React.useState("");
    const [number,setNumber]=React.useState(0);
    const id=  props.match.params.id;
    React.useEffect(()=>{
              productService.getSingleProduct(id).then((data)=>{
                setName(data.name);
                setPrice(data.price);
                setAddress(data.address);
                setNumber(data.number);
              });
        
    },[])
  return(
      <Grid container spacing={3} >
          <Grid item xs={12}  >
              <h1>Update Product</h1></Grid>
              <Grid item xs={3}  ></Grid>
              <Grid item xs={6} style={{background:"yellow"}} >
              <TextField label="name" fullWidth value={name} onChange={e=>{setName(e.target.value)}}/>
              <TextField label="price" fullWidth value={price} onChange={e=>{setPrice(e.target.value)}}/>
              <TextField label="address" fullWidth value={address} onChange={e=>{setAddress(e.target.value)}}/>
              <TextField label="number" fullWidth value={number} onChange={e=>{setNumber(e.target.value)}}/>
              </Grid>
              <Grid item xs={3}  ></Grid>
              <Grid item xs={3}  ></Grid>
              <Grid item xs={9}  >
              <Button variant="contained" color="primary" onClick={(e)=>{
                  console.log("send Api call to Add");
                  productService.updateProduct(id,{name,price,address,number})
                    .then((data)=>{ console.log(data);
                        props.history.push("/products");
                            }).catch((err)=>{console.log(err);}) ;             }}>Update</Button>
              
              </Grid>
          
      </Grid>
  );
};
export default UpdateProduct;