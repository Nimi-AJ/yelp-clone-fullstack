import React from "react";
let arr = [] //SQL 
export const Liked = (props) => {
    console.log(props);
    let value = false;
    if(props.id === '57'){
        console.log(true)
        value = true;
    }
   
    if(value){
        return (
            <>
            <p className="font-weight-light display-1" >Restaurants</p>
            </>
        )
    } else{
        return(null)
    }
}