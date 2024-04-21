import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProductList from "../product/ProductList ";
import CategoryList from "../product/CategoryList";
import { AuthProvider } from '../component/AuthContext';
import TermsAndConditions from "../pages/TermsAndConditions";
import UsersTable from "../pages/UsersTable";
import ChangePassword from "../component/ChangePassword";

const AppRouter = () => {
  return (
    <>
          <AuthProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chp" element={<ChangePassword />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/products" element= {<ProductList/>} />   
        <Route path="/categories" element = {<CategoryList/>} />   
        <Route path="/t&c" element = {<TermsAndConditions/>} />  
        <Route path="/userData" element = {<UsersTable/>} />    
       
      </Routes>
      </AuthProvider>
    </>
  );
};

export default AppRouter;
