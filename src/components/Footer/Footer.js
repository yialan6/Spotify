import React from "react";
import "./Footer.css";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Grid, Slider } from "@material-ui/core"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"


function Footer() {
    return (
        <div className="footer">
            <div className='footer-left'>
                <div className='song-img'>
                    <img src='' alt='img'></img>
                </div>
                <div className='song-details'>
                    <h5>Name</h5>
                    <p id='artist'>Artist</p>
                </div>
            </div>
            <div className='footer-center'>
                <SkipPreviousIcon className='footer-icon'/>
                <PlayCircleOutlinedIcon fontSize='large' className='footer-icon'/>
                <SkipNextIcon className='footer-icon'/>
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