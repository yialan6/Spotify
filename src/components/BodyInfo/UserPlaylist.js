import React from "react";
import "./Discover.css"
import { useStateProviderValue } from "../../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from "./SongRow";

function Discover() {
    const [{current_playlist}, dispatch] = useStateProviderValue();
    return (
        <div>
            <div className='body-info'>
                <img className="img" src={current_playlist?.images[0].url} alt=""/>
                <div className="info-text">
                    <strong>Playlist</strong>
                    <h4>{current_playlist.name}</h4>
                    <p>{current_playlist?.description}</p>
                </div>
            </div>
            <div className='body-songs'>
                <div className="body-icons">
                    <PlayCircleFilledIcon className="playlist-play"/>
                    <FavoriteIcon fontSize='small'/>
                    <MoreHorizIcon/>
                </div>
                {current_playlist?.tracks.items.map(item => (
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )
}


export default Discover;