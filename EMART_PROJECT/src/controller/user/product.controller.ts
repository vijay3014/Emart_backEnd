import { Request, Response } from "express";
import ProductServices from "../../services/product.service";
const productService = new ProductServices();
import  ReviewServices  from "../../services/review.service";
const reviewService = new ReviewServices();
import mongoose, { ObjectId } from 'mongoose';

declare global {
    namespace Express {
        interface Request {
            admin?: object ;
        }
    }
}

// ADD NEW PRODUCT
export const addNewProduct = async (req: Request,res: Response) => {
    try {
        let product : object | null  = await productService.getProduct({title: req.body.title, isDelete:false});
        if (product) {
            res.status(400).json({ message: `Product Is Already Exist..`});
        }
        product = await productService.addNewProduct({ ...req.body });
        res.status(201).json({product, message: `Product Added Successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

// GET ALL PRODUCT
export const getAllProduct = async (req: Request,res: Response) => {
    try {
        let product  = await productService.getAllProduct({ isDelete:false });
        res.status(200).json(product);
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

// GET SPECIFIC PRODUCT
export const getProduct = async (req: Request,res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        let review = await reviewService.getAllReview(req.query);
        console.log(review);
        let totalRating = review.reduce((total:number, item:any) => total + item.rating, 0);
        let avgRating = totalRating / review.length;
        // console.log(avgRating);
        res.status(200).json({product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

// UPDATE PRODUCT
export const updateProduct = async (req: Request,res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if (!product) {
            return res.status(404).json({ message: `Product is not found..` })
        }
        product = await productService.updateProduct(product?._id, {...req.body});
        res.status(202).json({product, message: `Product updated successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

// DELETE PRODUCT
export const deleteProduct = async (req: Request,res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if (!product) {
            res.status(404).json({ message: `Product is not found...`});
        }
        product = await productService.updateProduct(product?._id, {isDelete: true });
        res.status(202).json({product, message: `Product deleted successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};