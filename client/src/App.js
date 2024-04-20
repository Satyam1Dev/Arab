import React, { useState } from "react";
// import Header from "./component/header";
// import Product from "./component/Product";
// // import Cart from "./component/Cart";
// import Slider from "./component/Slider";
import AppRouter from "./router/AppRouter";
import TermsAndConditions from "./pages/TermsAndConditions";
const cors = require("cors");

// import Login from "./component/Login";
// import AppRouter from "./router/AppRouter"
const App = () => {

// Allow requests from http://localhost:3000 and set credentials to true


// Your other middleware and routes...

  return (
    <div>  
      
      <AppRouter/>   
      {/* <TermsAndConditions/> */}
     
      {/* <Cart items={cartItems} /> */}
    </div>
  );
};

export default App;
