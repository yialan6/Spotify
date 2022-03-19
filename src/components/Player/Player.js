import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./Player.css"


function Player( {spotify} ) {
    return(
        <div className="player">
            <div className='player-body'>
                <Sidebar spotify={spotify}/>
                <Body spotify={spotify}/>
            </div>
            <Footer/>

        </div>
    );
}


export default Player;