import React from 'react';
import {useState, useEffect,} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

export const UpdatePageForm = () => {
    let history = useHistory();
    const {id} = useParams()
    console.log(id);
    
    const [price, setPrice] = useState("Price Range");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("")
    
    useEffect(()=>{
        const fetchData = async () => {
            const response =  await RestaurantFinder.get(`/${id}`);
             setPrice(response.data.data.restaurants[0].price)
             setName(response.data.data.restaurants[0].name);
             setLocation(response.data.data.restaurants[0].location)
        }
        fetchData()
    }
    , [])
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price});
        console.log("d" + response)
         history.push("/");
    }
    return (

            <div className="mb-4">
            <form action="">
                <div className="form-col">
                    <div className="col">
                        <label className="mt-4">Location</label>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <label className="mt-4">Location</label>
                        <input value={location}  onChange={(e) => {setLocation(e.target.value)}}type="text"className="form-control" placeholder="Location"/>
                    </div>
                    <div className="col">
                        <label className="mt-4">Price Range</label>
                        <select value={price}  onChange={(e) =>{setPrice(e.target.value)}} className="custom-select mr-sm-2" placeholder="">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="col">
                        <button onClick={(e) => {handleSubmit(e)}} type="submit"  className="btn btn-primary mt-4">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
