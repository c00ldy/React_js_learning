import React from "react";  
import { useParams } from "react-router-dom";

export default function User(){
    const {Userid} = useParams()
    return(
        <div>User : {Userid}</div>
    )
}