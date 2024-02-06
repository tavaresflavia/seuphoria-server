import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/Product";
import { IProduct } from "../models/Product";

const findOne = (req: Request, res: Response, next: NextFunction) => {
  const { productId } = req.params;
  return Product.findById(productId)
    .then((product) =>
      product
        ? res.status(200).json(product)
        : res.status(404).json({ message: `Could not found ${productId}` })
    )
    .catch((error) => res.status(500).json({ error }));
};

const findAll = (req: Request, res: Response, next: NextFunction) => {
    const { tags, ...queryParams } = req.query;
  return Product.find({...queryParams, tags: { $in: tags }})
    .then((products: IProduct[]) => {
      return res.status(200).json({products}
      );
    })
    .catch((error) => res.status(500).json({ error }));
};

export default {
  findAll,
  findOne,
};
