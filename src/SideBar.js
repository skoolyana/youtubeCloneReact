import './SideBar.css';

import React from 'react'
import SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';



function SideBar() {
    return (
        <div className='sidebar'>
           
            <SideBarRow selected Icon={HomeIcon}  title= "Home"></SideBarRow>
            <SideBarRow Icon={WhatshotIcon}  title= "Trending"></SideBarRow>
            <SideBarRow Icon={SubscriptionsIcon}  title= "Subscriptions"></SideBarRow>
            <hr></hr>
            <SideBarRow Icon={VideoLibraryIcon}  title= "Library"></SideBarRow>
            <SideBarRow Icon={HistoryIcon}  title= "History"></SideBarRow>
            <SideBarRow Icon={OndemandVideoIcon}  title= "Your Videos"></SideBarRow>
            <SideBarRow Icon={WatchLaterIcon}  title= "Watch Later"></SideBarRow>
            <SideBarRow Icon={ThumbUpAltOutlinedIcon}  title= "Liked Video"></SideBarRow>
            <SideBarRow Icon={ExpandMoreOutlinedIcon}  title= "Show More"></SideBarRow>
            
            
            
            <hr></hr>
        </div>
    )
}

export default SideBar
