import React from 'react'
import { useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import {RestaurantsContext} from "../context/RestaurantContext";

export const AddRestaurant = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("Price Range");
    const {addRestaurant} = useContext(RestaurantsContext)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await RestaurantFinder.post("/", {
                name: name,
                location: location,
                price: price
            })
            
          
            console.log(response.data.data.restaurants)
             addRestaurant(response.data.data.restaurants[0])
            
        } catch(e){
            console.log(e);
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text"className="form-control" placeholder="Location"/>
                    </div>
                    <div className="col">
                        <select value={price} onChange={e => setPrice(e.target.value)} className="custom-select mr-sm-2" placeholder="">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add Restaurant</button>
                </div>
            </form>
        </div>
    )
}
