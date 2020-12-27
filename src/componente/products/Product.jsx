import React from "react";
import Grid from '@material-ui/core/Grid';
import SingleProduct from "./SingleProduct";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
    addBtn:{
       position:"absolute",
       bottom:theme.spacing(93),
       right:theme.spacing(3),
    }
  }));
const Product = (props) =>{
    const [products,setProducts]=React.useState([]);
    const classes=useStyles();
    const getData=()=>{
        productService
         .getProducts()
         .then((data) => {
             setProducts(data);
         })
         .catch((err)=>{
             console.log(err);
         });
    };
    //getData();
    React.useEffect(getData,[]);
    const handleNewProductClick=()=>{

      props.history.push("/products/new");
    };
    return(
        <div>
         <h1>Products page</h1>
         {userService.isLoggedIn() &&(
          <Fab size="large" color="primary" aria-label="add" className={classes.addBtn} onClick={handleNewProductClick}>
          <AddIcon />
        </Fab>
         )}
        
         
         {products.length == 0?<p>No Product Found</p>:
         <Grid container elevation={3} spacing={3} > {products.map((product,index)=><SingleProduct key={index} product={product} onDelete={getData} />)}</Grid>}
         
        </div>
);}
export default Product;
