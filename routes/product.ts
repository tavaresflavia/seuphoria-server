const router = require("express").Router();
import { ProductInterface } from "../interfaces";
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();


async function main() {
    const deletedProducts = await prisma.product.deleteMany();
    const newProduct = await prisma.product.create({ 
        data:[
            {
               });
            const allProd = await prisma.product.findMany()
            console.log(allProd);
 }

 main()
 .catch(async (e) => {
   console.error(e)
   process.exit(1)
 })
 .finally(async () => {
   await prisma.$disconnect()
 })
