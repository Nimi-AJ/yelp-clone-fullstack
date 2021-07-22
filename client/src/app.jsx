import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./routes/Home";
import { RestaurantInfoPage } from "./routes/RestaurantInfoPage";
import { UpdatePage } from "./routes/UpdatePage";
import { RestaurantsContextProvider } from "./context/RestaurantContext";

  
//diagram for front end routes
//bootstrap classes for components


//Extra
//add images for restaurants


const App = () => {
    return (
        <>
    <RestaurantsContextProvider>
        <div className="container"> 
            <Router>
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/restaurants/:id" component={RestaurantInfoPage}></Route>
                <Route exact path="/restaurants/:id/update" component={UpdatePage}></Route>
                </Switch>
            </Router>
        </div>
    </RestaurantsContextProvider>
    </>
    )
}

export default App;
