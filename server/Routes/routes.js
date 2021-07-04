import express from 'express'
import { getRestaurants, addRestaurant, pool, updateRestaurant, deleteRestaurant, getRestaurant } from '../Controller/controller.js';



const router = express.Router(); 

router
.route('/restaurants')
.get(getRestaurants)
.post(addRestaurant)

router
.route('/restaurants/:id')
.get(getRestaurant)
.put(updateRestaurant)
.delete(deleteRestaurant)



export default router;