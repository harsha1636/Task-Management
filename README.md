Task Management API</br>This Node.js application is a RESTful API built with Express.js and MongoDB. It allows for managing product data, including creating, retrieving, updating, and deleting products.

Features
CRUD Operations:

Retrieve all products.</br>Retrieve a product by ID.</br>Create a new product.</br>Update an existing product.</br>Delete a product.

Database:</br>Powered by MongoDB using Mongoose.

Error Handling:</br>Proper error responses for invalid requests or server issues.

Endpoints

GET /api/products</br>Description: Retrieve all products.</br>Response:</br>Status 200: Array of all products.</br>Status 500: Error message.

GET /api/product/:id</br>Description: Retrieve a product by its ID.</br>Parameters: id (string, required).</br>Response:</br>Status 200: The requested product.</br>Status 404: Product not found.</br>Status 500: Error message.

POST /api/product</br>Description: Create a new product.</br>Body:</br>{ </br>"field1": "value1", </br>"field2": "value2", </br>... </br>}
Response:</br>Status 200: The created product.</br>Status 500: Error message.

PUT /api/product/:id</br>Description: Update an existing product.</br>Parameters: id (string, required).</br>Body (fields to update):</br>{ </br>"field1": "new value", </br>"field2": "new value" </br>}
Response:</br>Status 200: The updated product.</br>Status 404: Product not found.</br>Status 500: Error message.

DELETE /api/product/:id</br>Description: Delete a product by its ID.</br>Parameters: id (string, required).</br>Response:</br>Status 200: Success message.</br>Status 404: Product not found.</br>Status 500: Error message.

Access the API:</br>The API will run at http://localhost:3000.

Data Model</br>The structure of a product depends on the schema in the productModel.js file. An example of a product object:

{</br>"_id": "unique-id",</br>"name": "Product Name",</br>"price": 100.00,</br>"description": "Product description",</br>"category": "Category name",</br>"stock": 50</br>}

Notes
Ensure your MongoDB database is properly connected.</br>Update productModel.js to reflect your product schema.</br>Use a tool like Postman to test the API endpoints.
