import React from "react";
import "./SongRow.css"
import { useStateProviderValue } from "../../StateProvider";

function SongRow({spotify, track}) {
    const [{item, curr_state}, dispatch] = useStateProviderValue();

    const set_song = () => {
        spotify.getTrack(track.id).then( item => {

            dispatch({
                type: "SET_ITEM",
                item: item,
            })

            spotify.play({
                uris: [item.uri]
            })

            dispatch({
                type: "SET_STATE",
                curr_state: true,
            })
        })
        console.log(curr_state)
    }


    return (
        <div onClick={set_song} className="songRow">
            <img className="album-img" src={track?.album.images[0].url}/>
            <div className="songRow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(', ')}
                </p>
            </div>
        </div>
    )
}


export default SongRow;