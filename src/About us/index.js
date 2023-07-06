import React from "react";
import './style.css';
import { FaAirbnb } from "react-icons/fa6";


const About=()=>{
    return(
        <div className="food">
           <p>This is the about page</p>
           <img src="https://res.cloudinary.com/dt91lb8gs/image/upload/v1688103151/cld-sample-4.jpg" ></img>
           <FaAirbnb/>
        </div>
    )

}
export default  About;