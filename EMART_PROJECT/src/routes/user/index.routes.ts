import express from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';
import orderRoutes from './order.routes';
import reviewRoutes from './review.routes';
import wishlistRoutes from './wishlist.routes';
import contactRoutes from './contact.routes';

const usersRoutes = express.Router();

usersRoutes.use('/user', userRoutes);
usersRoutes.use('/product', productRoutes);
usersRoutes.use('/cart', cartRoutes);
usersRoutes.use('/order', orderRoutes);
usersRoutes.use('/review', reviewRoutes);
usersRoutes.use('/wishlist', wishlistRoutes);
usersRoutes.use('/contact', contactRoutes);

export default usersRoutes;


// All Users Passwords are ------> "1234"

// Users Email is ------> 1."moni@test.in"
//                        2."susi@test.in"
//                        3."pilu@test.in"
//                        4."prayag@test.in"
//                        5."akshu@test.in"