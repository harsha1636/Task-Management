Task Management API
This Node.js application is a RESTful API built with Express.js and MongoDB. It allows for managing product data, including creating, retrieving, updating, and deleting products.

Features
CRUD Operations:

Retrieve all products.
Retrieve a product by ID.
Create a new product.
Update an existing product.
Delete a product.

Database:
Powered by MongoDB using Mongoose.

Error Handling:
Proper error responses for invalid requests or server issues.

Endpoints

GET /api/products
Description: Retrieve all products.
Response:
Status 200: Array of all products.
Status 500: Error message.

GET /api/product/:id
Description: Retrieve a product by its ID.
Parameters: id (string, required).
Response:
Status 200: The requested product.
Status 404: Product not found.
Status 500: Error message.

POST /api/product
Description: Create a new product.
Body:
json
Copy code
{
  "field1": "value1",
  "field2": "value2",
  ...
}
Response:
Status 200: The created product.
Status 500: Error message.

PUT /api/product/:id
Description: Update an existing product.
Parameters: id (string, required).
Body (fields to update):
json
Copy code
{
  "field1": "new value",
  "field2": "new value"
}
Response:
Status 200: The updated product.
Status 404: Product not found.
Status 500: Error message.

DELETE /api/product/:id
Description: Delete a product by its ID.
Parameters: id (string, required).
Response:
Status 200: Success message.
Status 404: Product not found.
Status 500: Error message.

Access the API:
The API will run at http://localhost:3000.

Data Model
The structure of a product depends on the schema in the productModel.js file. An example of a product object:

json
Copy code
{
  "_id": "unique-id",
  "name": "Product Name",
  "price": 100.00,
  "description": "Product description",
  "category": "Category name",
  "stock": 50
}
Notes
Ensure your MongoDB database is properly connected.
Update productModel.js to reflect your product schema.
Use a tool like Postman to test the API endpoints.
