import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOptions/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useStateProviderValue } from '../../StateProvider';


function Sidebar({spotify}) {
    const [{playlists}, dispatch] = useStateProviderValue();
    return (
        <div className="sidebar">
            <img className='logo' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'></img>
            <div className='option-bar'>
                <SidebarOption title="Home" Icon={HomeIcon}/>
                <SidebarOption title="Search" Icon={SearchIcon}/>
                <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
                <br/>
                <br/>
                <hr/>
                {playlists?.items?.map( (playlist) => 
                <SidebarOption title={playlist.name} playlist={playlist} spotify={spotify}/>)}
            </div>
        </div>
    );
}

export default Sidebar;