import express from 'express';
import pkg from 'pg';
import dotenv from "dotenv";
const {Pool} = pkg;

dotenv.config();


export const pool = new Pool();

export const getRestaurants = async (req, res) => {
    try{
        
        let result = await pool.query('SELECT * FROM restaurants ORDER BY id ASC')
        console.log(result)
        res.status(200).json({
            status: "success",
            result: result.rows.length,
            data: {
                restaurants: result.rows
            }
    })
    } catch(err){
        console.log(err);
    }
}

export const getRestaurant = async (req, res) => {
    const id = +req.params.id;
    try{
        let result = await pool.query('SELECT * FROM restaurants WHERE id = $1', [id])
        res.status(200).json({
            status: "success",
            result: result.rows.length,
            data: {
                restaurants: result.rows
            }
    })
    } catch(err){
        console.log(err);
    }
}


export const addRestaurant = async (req, res) => {
    try{
        console.log(req.body);
        console.log(req.params);
        const {name, location, price} = req.body;
        console.log(name, location, price);
        let result = await pool.query('INSERT into restaurants (name, location, price) VALUES ($1, $2, $3) RETURNING *', [name, location, price])
        console.log(result.rows);
        res.status(201).json({
            status: "success",
            result: result.rows.length,
            data: {
                restaurants: result.rows
            }
        })
    } catch(err) {
        console.log(err);
    }
    

}

export const updateRestaurant = async(req, res) => {
    try{
        console.log(req.body);
        console.log(req.params);
        const id = +(req.params.id);
        const {name, location, price} = req.body;
        let result = await pool.query('UPDATE restaurants SET name = $1, location = $2, price = $3 WHERE id = $4 RETURNING *', [name, location, price, id])
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows
            }
        })
    } catch(err){
        console.log(err);

    }

}

export const deleteRestaurant = async(req, res) => {
    try{
        console.log(req.body);
        console.log(req.params);
        const id = Number(req.params.id); 
        let result = await pool.query('DELETE FROM restaurants WHERE id = $1', [id])
        res.status(204).json({
            status: "success"
        })
    } catch(err){
        console.log(err);
    }
}