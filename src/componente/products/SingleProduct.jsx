import React from 'react'
import Grid from '@material-ui/core/grid';
import { Button } from '@material-ui/core';
import productService from '../../services/ProductService';
import {withRouter} from "react-router";
import userService from '../../services/UserService';
const SingleProduct=(props)=>{
    const {product,onDelete}=props;
    console.log(props);

    return (<Grid item  xs={4}>
            
            <h2 style={{background:"aquamarine",color:"#7c4dff"}}  >{product.name}
            {userService.isAdmin() &&(
            <> <Button variant="contained"  color="secondary" onClick={e=>{
                productService.deleteProduct(product._id).then((data)=>{console.log(data);
                onDelete();}).catch((err)=>{console.log(err);}); 
            }}>Delete</Button>
            <Button variant="contained" color="primary" onClick={(e)=>{
            console.log("navigate to update");
            props.history.push("/products/update/"+product._id);
            }}>Edit</Button>
            </>
            )}
            </h2>
            <p>{product.price}</p>
            <p>{product.address}   </p>
            <p>{product.number}</p>
            <hr/>
            
    </Grid>);
  
}
export default withRouter (SingleProduct);