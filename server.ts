

// const { productData } = require("./productData");

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const productRoutes = require('./routes/product');

