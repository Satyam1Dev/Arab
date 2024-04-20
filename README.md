# E-Commerce Platform README

Welcome to our E-Commerce Platform! This README provides an overview of the project, including the authentication flow, user and category/product schemas, frontend and backend functionalities, and design considerations.

## Table of Contents
- [Authentication Flow](#authentication-flow)
- [User Schema](#user-schema)
- [Category CURD](#category-curd)
- [Product CURD](#product-curd)
- [Frontend](#frontend)
- [Backend](#backend)

## Authentication Flow

Our platform offers a comprehensive authentication flow, including login, registration, and forgot password functionalities.

### Login
Users can log in using their username and password. Upon successful login, they are redirected to the home page.

### Register
Registration includes validation on both frontend and backend. Users must provide a valid email address and a secure password to register.

### Forgot Password
Users who forget their password can utilize the "Forgot Password" feature to reset their password securely.

## User Schema

The user schema includes the following fields:

- **fullName**: string
- **userName**: string
- **email**: string
- **password**: string (hashed for security)
- **avatar**: string (URL to the user's avatar image)

Users can update their profile, including their full name and avatar. However, they cannot update their username and email.

## Category CURD

The category CURD functionality allows users to manage product categories effectively.

### Schema
- **name**: string
- **slug**: string
- **image**: string (URL to the category image)
- **owner**: Ref<User>

#### Create Category
- Users can create a category with the specified schema, including a unique slug and image.

#### Update Category
- Users can update category details, including the name, slug, and image.

#### Read Categories
- Users can view all categories and retrieve a single category.
- Query parameters can be sent, such as name (case-insensitive).

#### Delete Category
- Users can delete a category using its ID.
- The associated image is deleted after category deletion.

## Product CURD

The product CURD functionality enables users to manage products seamlessly.

### Schema
- **title**: string
- **description**: string
- **price**: number
- **category**: Ref<Category>
- **image**: string (URL to the product image)
- **owner**: Ref<User>

#### Create Product
- Users can create products with the specified schema, including a category and image.

#### Update Product
- Users can update product details, including the title, description, price, category, and image.
- The old image is deleted after updating the image.

#### Read Products
- Users can view all products and retrieve a single product.
- Query parameters can be sent, such as title (case-insensitive), sort by price, and filter by category.

#### Delete Product
- Users can delete a product using its ID.
- Multiple products can be deleted using a single API call.
- The associated image is deleted after product deletion.

## Frontend

Our frontend is built using React, utilizing fetch and Axios for API calls, Context API for state management, React Router DOM for navigation, and Bootstrap for styling.

## Backend

Our backend is built on Express, Node.js, and MongoDB, providing robust API endpoints for managing users, categories, and products.

### Technologies Used
- React
- Express.js
- Node.js
- MongoDB
- Mongoose
- CORS
- Router
- Modal
- Schema

## Conclusion

Our E-Commerce Platform offers a comprehensive solution for managing products and categories, enabling users to register, authenticate, and interact seamlessly. With intuitive frontend design and robust backend architecture, our platform provides a smooth and efficient shopping experience for users and administrators alike.
