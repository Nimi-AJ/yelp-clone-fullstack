import React from 'react'
import {Header} from "../components/Header"
import { AddRestaurant } from '../components/AddRestaurant'
import { Restaurants } from '../components/RestaurantList'

export const Home = () => {
    return (
        <>
        <Header/>
        <AddRestaurant/>
        <Restaurants/>
        </>
    )
}
