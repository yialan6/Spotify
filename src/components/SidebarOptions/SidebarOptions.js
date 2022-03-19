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
                current_playlist: response,
            })
        })
    }

    return (
        <div className='options'>
            {Icon && <Icon className='option-icon'/>}
            {Icon ? <h4>{title}</h4> : <a className="playlist-click" onClick={() => displayPlaylist(playlist)}>{title}</a>}
        </div>
        
    );
};

export default SidebarOption;