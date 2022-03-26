import React from "react";
import "./Body.css";
import Header from "../Header/Header"
import Discover from "../BodyInfo/Discover";
import UserPlaylist from "../BodyInfo/UserPlaylist"
import { useStateProviderValue } from "../../StateProvider";

function Body({spotify}) {
    const [{current_playlist}, dispatch] = useStateProviderValue();
    return (
        <div className="body">
            <Header spotify={spotify}/>

            {current_playlist? <UserPlaylist spotify={spotify}/> : <Discover spotify={spotify}/>}
        </div>
    );
}

export default Body;