import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/Product";
import { IProduct } from "../models/Product";

const findOne = (req: Request, res: Response) => {
  const { productId } = req.params;
  return Product.findById(productId)
    .then((product) =>
      product
        ? res.status(200).json(product)
        : res.status(404).json({ message: `Could not found ${productId}` })
    )
    .catch((error) => res.status(500).json({ error }));
};

const findAll = async (req: Request, res: Response) => {
  let { tags, ...queryParams } = req.query;

  try {
    if (Object.values(queryParams).length || tags?.length) {
      if(tags){
      return res.status(200).json(await Product.find({ ...queryParams, tags:{ $in: tags }}));
      }
      return res.status(200).json(await Product.find({ ...queryParams}));
    } else {
        return res.status(200).json(await Product.find().limit(200));
    }
  } catch {
    (error: string) => res.status(500).json({ error });
  }
};

const findFilters = async (req: Request, res: Response) => {
 try{
  const brands = await Product.distinct("brand");
  const  categories = await Product.distinct("category");
  const  tags = await Product.distinct("tags");

  brands.indexOf("") && brands.splice(brands.indexOf(""),1) 
  brands.indexOf("null") && brands.splice(brands.indexOf(""),1) 

  categories.indexOf("") && categories.splice(categories.indexOf(""),1) 


  return res.status(200).json({brands,categories, tags})


 } catch {
  (error: string) => res.status(500).json({ error });
}
  

} 

export default {
  findAll,
  findOne,
  findFilters
};
