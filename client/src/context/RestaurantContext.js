import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {  //returns a context.provider with a state value that all props.children can access
    const {restaurants, setRestaurants} = useState([]);
    return(
        <RestaurantsContext.Provider value={{restaurants: restaurants, setRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}

