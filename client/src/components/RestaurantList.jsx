import React from 'react'
import {useEffect, useContext} from "react"
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantContext'

export const Restaurants = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    useEffect(() => {
        const fetchData = async function() {
            try{
                const response = await RestaurantFinder.get('/')    
                console.log(response.data.data.restaurants)
                setRestaurants(response.data.data.restaurants);
            } catch(e){
                console.log(e)
            }
        }
        fetchData();
    }, [])




    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th>Restaurant</th>
                        <th>Location</th>
                        <th>Price Range</th>
                        <th>Ratings</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mr Biggs</td>
                        <td>Lagos</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>The Place</td>
                        <td>Lagos</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
