import express from 'express'



const router = express.Router(); 

router
.route('/restaurants')
.get(getRestaurants)
.post(createRestaurant)



export default router;