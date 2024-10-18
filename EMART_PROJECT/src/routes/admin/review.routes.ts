import express from 'express';
const ReviewRoutes = express.Router();
import {  adminVerifyToken }  from "../../helpers/adminVerifyToken";

import {  getAllReview ,  deleteReview } from "../../controller/admin/review.controller";


// GET ALL REVIEW
ReviewRoutes.get('/get-all-Review' , adminVerifyToken,  getAllReview);

// DELETE REVIEW
ReviewRoutes.delete('/delete-Review' , adminVerifyToken , deleteReview);


export default ReviewRoutes;