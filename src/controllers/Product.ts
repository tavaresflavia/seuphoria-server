import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/Product";

const findOne = (req:Request, res:Response, next:NextFunction)=>{
    const {productId} = req.params;
    return Product.findById(productId)
    .then((product)=> (product? res.status(200).json(product): res.status(404).json({message: `Could not found ${productId}`})))
    .catch((error)=>(res.status(500).json({error})));

}

const  findAll = async (req:Request, res:Response, next:NextFunction)=>{
    return await Product.find()
        .then((product)=> res.status(200).json(product))
        .catch((error)=> res.status(500).json({error}))

}


export default {
    findAll, 
    findOne
}
