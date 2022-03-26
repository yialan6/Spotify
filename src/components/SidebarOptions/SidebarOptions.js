import { display } from '@mui/system';
import React from 'react';
import "./SidebarOption.css"
import { useStateProviderValue } from '../../StateProvider';


function SidebarOption({title, Icon, playlist, spotify}) {
    const [{current_playlist}, dispatch] = useStateProviderValue();

    const displayPlaylist = (playlist) => {
        spotify.getPlaylist(playlist.id).then(response => {
            dispatch({
                type: "SET_CURRENT_PLAYLIST",
                current_playlist: response
            })
        })
    }

    function displayDiscover() {
        dispatch({
            type: "SET_CURRENT_PLAYLIST",
            current_playlist: null,
        })
        console.log(current_playlist)
    }

    return (
        <div className='options'>
            {Icon && <Icon className='option-icon'/>}
            {Icon ? <h4 onClick={displayDiscover}>{title}</h4> : <a className="playlist-click" onClick={() => displayPlaylist(playlist)}>{title}</a>}
        </div>
        
    );
};

export default SidebarOption;