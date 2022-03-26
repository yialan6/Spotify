import React from "react";
import "./Discover.css"
import { useStateProviderValue } from "../../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from "./SongRow";
function Discover({spotify}) {
    const [{discover}, dispatch] = useStateProviderValue();
    return (
        <div>
            <div className='body-info'>
                <img className="img" src={discover?.images[0].url} alt=""/>
                <div className="info-text">
                    <strong>PLAYLIST</strong>
                    <h4>Discover Weekly</h4>
                    <p>{discover?.description}</p>
                </div>
            </div>
            <div className='body-songs'>
                <div className="body-icons">
                    <PlayCircleFilledIcon className="playlist-play"/>
                    <FavoriteIcon fontSize='small'/>
                    <MoreHorizIcon/>
                </div>
                {discover?.tracks.items.map(item => (
                    <SongRow spotify={spotify} track={item.track}/>
                ))}
            </div>
        </div>
    )
}


export default Discover;