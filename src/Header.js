import React from 'react';
import "./css/Header.css";
import Avatar from '@material-ui/core/Avatar';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ShareIcon from '@material-ui/icons/Share';
import RedoIcon from '@material-ui/icons/Redo';
import SimpleMenu from './SimpleMenu';
import MouseOverPopover from './MouseOverPopover';


const Header = () => {
    return ( 
    <div className="header">

        <div className="header__left">
            <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png" alt=""/>


                <div className="header__option">
                    <SimpleMenu fontSize="large" />
                </div>
                <div className="header__option">
                    <MouseOverPopover fontSize="large" />
                </div>
                <div className="header__option">
                    <RedoIcon fontSize="large" />
                </div>
                
        </div>

        <div className="header__right">
           
                <div className="header__option">
                    <ShareIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <CloudDownloadIcon fontSize="large" />
                </div>
               
                <div className="header__option">
                    <Avatar fontSize="large" />
                </div>
                
        </div>

    </div> );
}
 
export default Header;