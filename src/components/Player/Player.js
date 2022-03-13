import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./Player.css"


function Player() {
    return(
        <div class="player">
            <div class='player-body'>
                <Sidebar/>
                <Body/>
            </div>
            <Footer/>

        </div>
    );
}


export default Player;