import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {  //returns a context.provider with a state value that all props.children can access
    const [restaurants, setState] = useState([]);

    const addRestaurant = (newRestaurant) => {
        setState([...restaurants, newRestaurant])
    }

    const deleteRestaurant = (id) => {
        setState(restaurants.filter((item) => {
            return item.id !== id;
        }))
    }
    return(
        <RestaurantsContext.Provider value={{restaurants, setState, addRestaurant, deleteRestaurant}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}

