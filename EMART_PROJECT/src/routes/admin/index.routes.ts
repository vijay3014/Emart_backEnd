import express from 'express';
import adminRoutes from './admin.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';
import reviewRoutes from './review.routes';
import wishlistRoutes from './wishlist.routes';

const adminsRoutes = express.Router();

adminsRoutes.use('/admin', adminRoutes);
adminsRoutes.use('/product', productRoutes);
adminsRoutes.use('/cart', cartRoutes);
adminsRoutes.use('/review', reviewRoutes);
adminsRoutes.use('/wishlist', wishlistRoutes);


export default adminsRoutes;



// All Admin Password is ---------> "1234"

// Admin Email is ---------> 1."dhaval@test.in"
//                           2."darshan@test.in"
//                           3."vijay@test.in"
//                           4."jenil@test.in"
//                           5."krish@test.in"