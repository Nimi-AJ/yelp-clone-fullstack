import React from 'react'
import {useEffect, useContext} from "react"
import { useHistory } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantContext';
import {Liked} from './Liked';


export const Restaurants = () => {
    const {restaurants, setState, deleteRestaurant} = useContext(RestaurantsContext);
    let history = useHistory();
    useEffect(() => {
        const fetchData = async function() {
            try{
                const response = await RestaurantFinder.get('/')   
                 
                setState(response.data.data.restaurants);
            } catch(e){
                console.log(e)
            }
        }
        fetchData();
       
    }, [])

    const handleDelete = async (id) => {
        try{
            const response = await RestaurantFinder.delete(`/${id}`);
            deleteRestaurant(id);
        } catch(e){
            console.log(e);
        }
    }

    const handleUpdate = (id) => {
        history.push(`/restaurants/${id}/update`)
    }

 
   

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
             
                {restaurants && restaurants.map((item) => {
                    return(
                        
                        <tr key={item.id}>
                            <td >{item.name}</td>
                            <td>{item.location}</td>
                            <td>{"$".repeat(item.price)}</td>
                            <td ><Liked id={item.id}/></td>

                            
                            
                            
                            <td><button onClick={() => handleUpdate(item.id)} className="btn btn-warning">Update</button></td>
                            <td><button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                     
                    )
                })}
              
                </tbody>

            </table>
        </div>
    )
}


 
