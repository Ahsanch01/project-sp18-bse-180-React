import React from "react";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import Product from "./componente/products/Product";
import NewProduct from "./componente/products/NewProduct";


import LandingPage from "./componente/LandingPage";
import ContactUs from "./componente/ContactUs";
import NotFound from "./componente/NotFound";

import Header from "./componente/Header";
import Footer from "./componente/Footer";
import UpdateProduct from "./componente/products/UpdateProduct";
import Login from "./componente/auth/Login";
import Register from "./componente/auth/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      
    <div>
    <ToastContainer />
     <Header />
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
        <Route path="/products/new" component={NewProduct}/>
        <Route path="/products/update/:id" component={UpdateProduct}/>
        <Route path="/products" component={Product}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/not-found" component={NotFound}/>
        <Route path="/" exact component={LandingPage}/>
        <Redirect to="/not-found" />
        
       
      </Switch>
     
     <Footer />
    </div>  
    </Router>);
}

export default App;
