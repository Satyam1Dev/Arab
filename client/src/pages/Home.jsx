import React, { useState } from "react";
import Header from "../component/header";
import Product from "../component/Product";
// import Cart from "./component/Cart";
import Slider from "../component/Slider";
import TermsAndConditions from "./TermsAndConditions";
// import Login from "./component/Login";
// import AppRouter from "./router/AppRouter"
const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Update cart items
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart!`);
  };
  const handleAccept = () => {
    localStorage.setItem('acceptedTerms', 'true');
  };

  const handleCancel = () => {
    // Handle cancellation here, for example, you can reset the accepted terms in local storage
    localStorage.removeItem('acceptedTerms');
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <TermsAndConditions 
        onAccept={handleAccept} 
        onCancel={handleCancel} 
      />
      {/* <AppRouter/> */}
      <Slider/>

      <div className="container">
        <div className="row ">
            <h2>Products</h2>
            <div className="row product-row">
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
             
            </div>
            {/* Add more Product components as needed */}
          
        </div>
        <div className="row product-list product-row">
                <div className="row">
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="col-md-3">
                <Product
                  product={{
                    id: 1,
                    name: "Product 1",
                    price: 10.99,
                    image: "https://www.dorofeyindia.com/wp-content/uploads/2023/11/Long-Hair-Products-Female-Embrace-Your-Beautiful-Mane-with-Confidence-.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }}
                  onAddToCart={handleAddToCart}
                />
              </div>
             
            </div>
            {/* Add more Product components as needed */}
          
        </div>
      </div>
      {/* <Cart items={cartItems} /> */}
    </div>
  );
};

export default Home;
