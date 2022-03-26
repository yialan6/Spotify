import React from "react";
import "./Discover.css"
import { useStateProviderValue } from "../../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from "./SongRow";

function Discover({spotify}) {
    const [{current_playlist}, dispatch] = useStateProviderValue();
    console.log(current_playlist)
    return (
        <div>
            <div className='body-info'>
                <img className="img" src={current_playlist?.images[0].url} alt=""/>
                <div className="info-text">
                    <strong>PLAYLIST</strong>
                    <h4>{current_playlist.name}</h4>
                    <p>{current_playlist.description} 
                    {current_playlist.tracks.items.length} songs</p>
                </div>
            </div>
            <div className='body-songs'>
                <div className="body-icons">
                    <PlayCircleFilledIcon className="playlist-play"/>
                    <FavoriteIcon fontSize='small'/>
                    <MoreHorizIcon/>
                </div>
                {current_playlist?.tracks.items.map(item => (
                    <SongRow spotify={spotify} track={item.track}/>
                ))}
            </div>
        </div>
    )
}


export default Discover;