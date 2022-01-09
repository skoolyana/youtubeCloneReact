import React from 'react';
import './Video.css';
import { Avatar } from '@material-ui/core';

function Video({videoimage, title, channel,views, timestamp,channelimage}) {
    return (
        <div className='video'>
            <img className='video_thumbnail' src={videoimage} alt=''></img>
            <div className='video_info'>

            <Avatar className='video_avatar' src={channelimage} alt={channel}></Avatar>

          
            <div className='video_text'>

                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>
            </div>
            </div>

        </div>
    )
}

export default Video
