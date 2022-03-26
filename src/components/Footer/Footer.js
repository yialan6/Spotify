import React from "react";
import "./Footer.css";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Grid, Slider } from "@material-ui/core"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import { useStateProviderValue } from "../../StateProvider";

function Footer({spotify}) {
    const [{item, curr_state}, dispatch] = useStateProviderValue();

    function playSong() {
        spotify.getMyCurrentPlaybackState().then( result => {

        })

        spotify.getMyCurrentPlayingTrack().then( result => {
            dispatch({
                type: 'SET_ITEM',
                item: result.item,
            })
            console.log(result.item)
        })

        if (curr_state) {
            spotify.pause()
            dispatch ({
                type: 'SET_STATE',
                curr_state: false,
            })
        } else {
            spotify.play({
            })
            dispatch({
                type: 'SET_STATE',
                curr_state: true,
            })
        }
    };

    return (
        <div className="footer">
            <div className='footer-left'>
                <div className='song-img'>
                    {item ? <img src={item.album.images[0].url}/> : <img src='' alt='img'/>}
                </div>
                <div className='song-details'>
                    <p id='song-name'>{item?.name}</p>
                    <p className="artists">
                        {item?.artists?.map(artist => (
                        <p id='artist'>{artist.name},</p>
                        ))}
                    </p>
                </div>
            </div>
            <div className='footer-center'>
                <SkipPreviousIcon id="footericon" className='footer-icon'/>
                {curr_state ? <PauseCircleOutlineIcon fontSize='large' className='footer-icon' onClick={playSong}/> :<PlayCircleOutlinedIcon fontSize='large' className='footer-icon' onClick={playSong}/>}
                <SkipNextIcon id="footericon" className='footer-icon'/>
            </div>
            <div className='footer-right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;