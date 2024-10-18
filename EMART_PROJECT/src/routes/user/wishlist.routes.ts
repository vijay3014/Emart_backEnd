import express from "express";
const WishlistRoutes = express.Router();
import {userVerifyToken} from "../../helpers/userVerifyToken";

import { addToWishlist,  deleteWishlist, getAllWishlist } from "../../controller/user/wishlist.controller";

// ADD NEW WISHLIST
WishlistRoutes.post('/add-New-Wishlist' , userVerifyToken ,  addToWishlist);

// GET ALL WISHLIST
WishlistRoutes.get('/get-All-Wishlist', userVerifyToken, getAllWishlist);

// DELETE WISHLIST
WishlistRoutes.delete('/delete-Wishlist' , userVerifyToken , deleteWishlist);

export default WishlistRoutes;