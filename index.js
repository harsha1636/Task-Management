const express = require('express');
const mongoose = require('mongoose');
const Product = require('./productModel.js');
const app = express()

// To display the data at the output while using post method
app.use(express.json());

//Connecting MongoDB to the application
mongoose.connect('mongodb+srv://harsha60201:SEiIKutKzvVtLC7g@task-management.bhdo1.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Task-Management')
    .then(() => {
        console.log('Connected!');
    })
    .catch(() => {
        console.log("Connection Failed");
    })

//GET all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//GET product by specific ID 
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new product
app.post('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a product
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = await Product.findById(id);  
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE a new product
app.delete('/api/product/:id', async (req, res) => {
    try {

        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000);
