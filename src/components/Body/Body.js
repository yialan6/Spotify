import React from "react";
import "./Body.css";
import Header from "../Header/Header"
import Discover from "../BodyInfo/Discover";

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <Discover/>
        </div>
    );
}

export default Body;